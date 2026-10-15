
import Image from 'next/image'
import logo from '@/images/logofi.png'
import hero1 from '@/images/heroa.jpeg'
import hero2 from '@/images/herob.jpeg'
import hero3 from '@/images/heroc.jpeg'
import hero4 from '@/images/hero4.png'

export default function Example() {
  return (
    <div className="relative bg-gray-900 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">

      {/* Imagem de fundo responsiva */}
      <div className="absolute inset-0 overflow-hidden">

        <picture>
          <source
            media="(max-width: 699px)"
            srcSet={hero1.src}
          />
          <source
            media="(min-width: 700px) and (max-width: 1299px)"
            srcSet={hero3.src}
          />
          <source
            media="(min-width: 1801px)"
            srcSet={hero4.src}
          />

          <Image
            src={hero2}
            alt="Centro Terapêutico DI"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
        </picture>

      </div>

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-10"
      />

      {/* Logo */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 transform sm:left-auto sm:right-8 sm:top-20 sm:translate-x-0">
        <Image
          src={logo}
          alt="Logo"
          className="h-auto w-auto max-w-[120px] sm:max-w-[100px] lg:max-w-[150px]"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 text-white sm:pt-40 lg:px-8">
        <div className="ml-auto max-w-md text-center md:text-right lg:max-w-lg">

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            "Comunicar bem <br />
            desde cedo faz <br />
            toda a diferença"
          </h1>

          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Marque já o seu rastreio gratuito!
          </p>

          <div className="mt-8 flex justify-center md:justify-end">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-md bg-[#e8cfc2] px-6 py-3 text-base font-medium text-gray-900 transition duration-200 hover:bg-[#d3b2a1]"
            >
              Contactos
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
