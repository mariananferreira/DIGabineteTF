import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Container } from '@/components/Container'

import space1 from '@/images/gab1.jpeg'
import space2 from '@/images/gab2.jpeg'
import space3 from '@/images/gab3.jpeg'
import space4 from '@/images/gab4.jpeg'
import space5 from '@/images/gab5.jpeg'
import space7 from '@/images/gab21.jpeg'
import space8 from '@/images/gab9.jpeg'
import space9 from '@/images/gab10.jpeg'
import space13 from '@/images/gab19.jpeg'
import space14 from '@/images/gab15.jpeg'
import space16 from '@/images/gab17.jpeg'
import space17 from '@/images/gab23.jpeg'
import space18 from '@/images/gabD.jpeg'
import space20 from '@/images/ent.jpeg'
import space21 from '@/images/balc.jpeg'
import space22 from '@/images/porta.jpeg'
import SM from '@/images/balcao.jpeg'

const products = [
  { id: 5, imageSrc: SM, imageAlt: 'Receção do Centro Terapêutico DI' },
  { id: 2, imageSrc: space5, imageAlt: 'space' },
  { id: 3, imageSrc: space20, imageAlt: 'space' },
  { id: 4, imageSrc: space16, imageAlt: 'space' },
  { id: 1, imageSrc: space22, imageAlt: 'space' },
  { id: 6, imageSrc: space21, imageAlt: 'space' },
  { id: 7, imageSrc: space8, imageAlt: 'space' },
  { id: 8, imageSrc: space18, imageAlt: 'space' },
  { id: 9, imageSrc: space7, imageAlt: 'space' },
  { id: 10, imageSrc: space13, imageAlt: 'space' },
  { id: 11, imageSrc: space2, imageAlt: 'space' },
  { id: 12, imageSrc: space9, imageAlt: 'space' },
  { id: 13, imageSrc: space17, imageAlt: 'space' },
  { id: 14, imageSrc: space1, imageAlt: 'space' },
  { id: 15, imageSrc: space4, imageAlt: 'space' },
  { id: 16, imageSrc: space14, imageAlt: 'space' },
  { id: 17, imageSrc: space3, imageAlt: 'space' },
]

// --- helpers para pré-carregar imagem grande (~1200px via loader do Next) ---
const nextOptimizedUrl = (mod, w = 1200, q = 90) =>
  `/_next/image?url=${encodeURIComponent(mod.src)}&w=${w}&q=${q}`

const prefetchLarge = (mod) => {
  if (typeof window === 'undefined') return
  const img = new window.Image()
  img.decoding = 'async'
  img.src = nextOptimizedUrl(mod)
}

export default function Photos() {
  const [selectedIndex, setSelectedIndex] = useState(null) // índice atual no modal
  const [isMobile, setIsMobile] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [mobileIndex, setMobileIndex] = useState(0)
  const galleryRef = useRef(null)
  const [showAll, setShowAll] = useState(false)
  const visibleProducts = showAll ? products : products.slice(0, 8)

  const toggleGallery = () => {
    if (showAll) {
      galleryRef.current?.scrollTo({ left: 0, behavior: 'instant' })
      setMobileIndex(0)
    }
    setShowAll((value) => !value)
  }

  const scrollToPhoto = (index) => {
    const gallery = galleryRef.current
    if (!gallery) return
    const target = gallery.children[index]
    if (!target) return
    gallery.scrollTo({
      left: target.offsetLeft - gallery.children[0].offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  const updateMobileIndex = () => {
    const gallery = galleryRef.current
    if (!gallery) return
    const start = gallery.children[0].offsetLeft
    let closest = 0
    Array.from(gallery.children).forEach((item, index) => {
      if (Math.abs(item.offsetLeft - start - gallery.scrollLeft) <
          Math.abs(gallery.children[closest].offsetLeft - start - gallery.scrollLeft)) closest = index
    })
    setMobileIndex(closest)
  }

  // detectar mobile (< 640px)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // fechar com Esc e navegar com ← →
  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i + 1) % products.length)
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i - 1 + products.length) % products.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex, isMobile])

  // reset do estado de carregamento ao trocar de imagem
  useEffect(() => {
    setImgLoaded(false)
  }, [selectedIndex])

  // prefetch da próxima e anterior
  useEffect(() => {
    if (selectedIndex === null) return
    const next = products[(selectedIndex + 1) % products.length].imageSrc
    const prev = products[(selectedIndex - 1 + products.length) % products.length].imageSrc
    prefetchLarge(next)
    prefetchLarge(prev)
  }, [selectedIndex, isMobile])

  const openAt = (idx) => {
    setSelectedIndex(idx)
    prefetchLarge(products[(idx + 1) % products.length].imageSrc)
  }

  const goNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i + 1) % products.length)
  }
  const goPrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i - 1 + products.length) % products.length)
  }

  return (
    <section id="ourspace" aria-labelledby="ourspace-title">
      <Container>
        <div className="py-14 sm:py-16">
          <div className="mx-auto mb-8 text-center sm:mb-12">
            <hr className="mx-auto mb-10 w-3/4 border-t-2 border-[#e8cfc2] sm:mb-14" />
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">
              O nosso espaço
            </p>
            <h2 id="ourspace-title" className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Um espaço pensado para <span className="titleWord">acolher</span> a sua família
            </h2>
          </div>

          <div className="mx-auto max-w-7xl">
            <p id="space-gallery-help" className="mb-4 text-center text-sm text-gray-500 sm:hidden">
              Deslize para explorar. Toque numa fotografia para ampliar.
            </p>
            <div
              ref={galleryRef}
              id="space-gallery"
              role="region"
              aria-label="Fotografias do nosso espaço"
              aria-describedby="space-gallery-help"
              tabIndex={0}
              onScroll={updateMobileIndex}
              className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-2xl pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
            >
              {visibleProducts.map((product, idx) => (
                <button
                  type="button"
                  aria-label={`Ampliar fotografia ${idx + 1} do nosso espaço`}
                  key={product.id}
                  className={`group relative w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 text-sm last:mr-[12%] sm:w-full sm:last:mr-0 ${
                    !isMobile ? 'cursor-zoom-in' : ''
                  }`}
                  style={{ aspectRatio: '1 / 1' }} // funciona sem plugin
                  onMouseEnter={() => !isMobile && prefetchLarge(product.imageSrc)}
                  onTouchStart={() => !isMobile && prefetchLarge(product.imageSrc)}
                  onClick={() => openAt(idx)}
                >
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt === 'space' ? `Fotografia ${idx + 1} do Centro Terapêutico DI` : product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width:1280px) 300px, (min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    quality={90}
                  />
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-5 sm:hidden">
              <button type="button" onClick={() => scrollToPhoto(mobileIndex - 1)}
                disabled={mobileIndex === 0} aria-label="Fotografia anterior" aria-controls="space-gallery"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#936b59] ring-1 ring-[#e8cfc2] disabled:opacity-30">←</button>
              <p aria-live="polite" aria-atomic="true" className="min-w-[5rem] text-center text-sm text-gray-600">
                {mobileIndex + 1} / {visibleProducts.length}
              </p>
              <button type="button" onClick={() => scrollToPhoto(mobileIndex + 1)}
                disabled={mobileIndex === visibleProducts.length - 1} aria-label="Fotografia seguinte" aria-controls="space-gallery"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#936b59] ring-1 ring-[#e8cfc2] disabled:opacity-30">→</button>
            </div>
            <div className="mt-6 text-center">
              <button type="button" onClick={toggleGallery} aria-expanded={showAll} aria-controls="space-gallery"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#936b59] ring-1 ring-[#e8cfc2] transition-colors hover:bg-[#f8f3f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59]">
                {showAll ? 'Mostrar menos fotografias' : `Ver todas as fotografias (${products.length})`}
              </button>
            </div>
          </div>
        </div>

        <Dialog open={selectedIndex !== null} onClose={() => setSelectedIndex(null)} className="relative z-[100]">
          <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-6">
            <Dialog.Panel className="flex h-[90dvh] max-h-[900px] w-full max-w-6xl flex-col">
              <div className="flex shrink-0 items-center justify-between gap-3 pb-3 text-white">
                <Dialog.Title className="text-sm font-medium">
                  O nosso espaço · {(selectedIndex ?? 0) + 1} / {products.length}
                </Dialog.Title>
                <button type="button" onClick={() => setSelectedIndex(null)}
                  className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                  Fechar ×
                </button>
              </div>
              {selectedIndex !== null && (
                <div className="relative min-h-0 flex-1">
                  <Image key={selectedIndex} src={products[selectedIndex].imageSrc}
                    alt={`Fotografia ${selectedIndex + 1} do Centro Terapêutico DI ampliada`}
                    fill sizes="(min-width:1280px) 1200px, 100vw" quality={95} priority
                    className="object-contain" onLoadingComplete={() => setImgLoaded(true)} />
                  {!imgLoaded && <div className="pointer-events-none absolute inset-0 flex items-center justify-center" role="status">
                    <span className="sr-only">A carregar fotografia</span>
                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  </div>}
                </div>
              )}
              <div className="flex shrink-0 justify-center gap-6 pt-3">
                <button type="button" onClick={goPrev} aria-label="Fotografia anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">←</button>
                <button type="button" onClick={goNext} aria-label="Fotografia seguinte"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">→</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Container>
    </section>
  )
}
