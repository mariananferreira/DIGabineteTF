import { useEffect, useState } from 'react'
import Image from 'next/image'
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
  { id: 1, imageSrc: space22, imageAlt: 'space' },
  { id: 2, imageSrc: space5, imageAlt: 'space' },
  { id: 3, imageSrc: space20, imageAlt: 'space' },
  { id: 4, imageSrc: space16, imageAlt: 'space' },
  { id: 5, imageSrc: SM, imageAlt: 'space' },
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
  /*{ id: 18, imageSrc: space2, imageAlt: 'space' },
  { id: 19, imageSrc: space1, imageAlt: 'space' },
  { id: 20, imageSrc: space7, imageAlt: 'space' },*/
]

// helper para pré-carregar a versão otimizada de ~1200px
const nextOptimizedUrl = (mod, w = 1200, q = 90) =>
  `/_next/image?url=${encodeURIComponent(mod.src)}&w=${w}&q=${q}`
const prefetchLarge = (mod) => {
  if (typeof window === 'undefined') return
  const img = new window.Image()
  img.decoding = 'async'
  img.src = nextOptimizedUrl(mod)
}

export default function Photos() {
  const [selectedIndex, setSelectedIndex] = useState(null) // índice da imagem aberta
  const [isMobile, setIsMobile] = useState(false)

  // detectar mobile (<640px)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // fechar com Esc e navegar com setas
  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null || isMobile) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') setSelectedIndex((i) => (i + 1) % products.length)
      if (e.key === 'ArrowLeft') setSelectedIndex((i) => (i - 1 + products.length) % products.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex, isMobile])

  // scroll lock quando o modal está aberto
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : prev || ''
    return () => { document.body.style.overflow = prev || '' }
  }, [selectedIndex])

  // pré-carregar próxima e anterior quando o modal abre ou muda
  useEffect(() => {
    if (selectedIndex === null || isMobile) return
    const next = products[(selectedIndex + 1) % products.length].imageSrc
    const prev = products[(selectedIndex - 1 + products.length) % products.length].imageSrc
    prefetchLarge(next)
    prefetchLarge(prev)
  }, [selectedIndex, isMobile])

  const openAt = (idx) => {
    if (isMobile) return
    setSelectedIndex(idx)
    // prefetch imediato da próxima
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
    <section id="ourspace" aria-label="our space">
      <Container>
        <div className="py-6">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              O nosso <span className="titleWord">centro</span> foi pensado ao
              pormenor para proporcionar conforto e confiança a cada família!
            </h2>
          </div>

          <div className="mx-auto max-w-7xl px-4 pt-0 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, idx) => (
                <div
                  key={product.id}
                  className={`group relative w-full overflow-hidden rounded-2xl bg-gray-100 text-sm ${
                    !isMobile ? 'cursor-zoom-in' : ''
                  }`}
                  style={{ aspectRatio: '1 / 1' }}
                  onMouseEnter={() => !isMobile && prefetchLarge(product.imageSrc)}
                  onTouchStart={() => !isMobile && prefetchLarge(product.imageSrc)}
                  onClick={() => openAt(idx)}
                >
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width:1280px) 300px, (min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    quality={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal / Lightbox com navegação (apenas desktop/tablet) */}
        {selectedIndex !== null && !isMobile && (
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-5xl"
              style={{ aspectRatio: '4 / 3' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={products[selectedIndex].imageSrc}
                alt="Imagem ampliada"
                fill
                className="object-contain"
                sizes="(min-width:1280px) 1200px, 100vw"
                quality={95}
                priority
                placeholder="blur"
              />

              {/* Botão fechar */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm shadow"
                aria-label="Fechar"
              >
                Fechar
              </button>

              {/* Setas navegação */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white focus:outline-none"
                aria-label="Anterior"
              >
                {/* ícone seta esquerda */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white focus:outline-none"
                aria-label="Seguinte"
              >
                {/* ícone seta direita */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
