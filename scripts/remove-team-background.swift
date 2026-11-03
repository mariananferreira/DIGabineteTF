import Foundation
import Vision
import AppKit
import CoreImage
import ImageIO
import UniformTypeIdentifiers

// Native foreground segmentation changes only transparency, never generates a person.
let context = CIContext(options: [.workingColorSpace: NSNull()])
for filename in CommandLine.arguments.dropFirst() {
    let inputURL = URL(fileURLWithPath: filename)
    guard let source = CGImageSourceCreateWithURL(inputURL as CFURL, nil),
          let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        fatalError("Cannot read \(filename)")
    }
    let request = VNGenerateForegroundInstanceMaskRequest()
    let handler = VNImageRequestHandler(cgImage: image, options: [:])
    try handler.perform([request])
    guard let observation = request.results?.first, !observation.allInstances.isEmpty else {
        fatalError("No foreground found in \(filename)")
    }
    let mask = try observation.generateScaledMaskForImage(forInstances: observation.allInstances, from: handler)
    let foreground = CIImage(cgImage: image)
    let transparent = CIImage(color: .clear).cropped(to: foreground.extent)
    let output = foreground.applyingFilter("CIBlendWithMask", parameters: [
        kCIInputBackgroundImageKey: transparent,
        kCIInputMaskImageKey: CIImage(cvPixelBuffer: mask)
    ])
    guard let rendered = context.createCGImage(output, from: foreground.extent) else {
        fatalError("Cannot render \(filename)")
    }
    let outputURL = inputURL.deletingPathExtension().appendingPathExtension("cutout.png")
    guard let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
        fatalError("Cannot save \(outputURL.path)")
    }
    CGImageDestinationAddImage(destination, rendered, nil)
    guard CGImageDestinationFinalize(destination) else { fatalError("PNG save failed") }
    print(outputURL.path)
}
