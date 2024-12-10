import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/images/logo4.png' // Substitua pelo caminho do seu logo
import hero2 from '@/images/herob.jpeg' // Imagem para telas grandes (maiores que 1300px)
import hero3 from '@/images/heroc.jpeg' // Imagem para telas médias (entre 700px e 1300px)
import hero1 from '@/images/heroa.jpeg' // Imagem para telas pequenas (menores que 700px)
import hero4 from '@/images/hero4.png' // Imagem para telas pequenas (menores que 700px)

export default function Example() {
  // Estado para armazenar a imagem do fundo
  const [backgroundImage, setBackgroundImage] = useState(hero2)

  // Detectar o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setBackgroundImage(hero1) // Para telas menores que 700px
      } else if (window.innerWidth < 1300) {
        setBackgroundImage(hero3) // Para telas entre 700px e 1300px
      } else if (window.innerWidth > 1800) {
        setBackgroundImage(hero4) // Para telas entre 700px e 1300px
      } else {
        setBackgroundImage(hero2) // Para telas maiores que 1300px
      }
    }

    // Chama a função imediatamente para ajustar a imagem na primeira renderização
    handleResize()

    // Adiciona o event listener para o resize da tela
    window.addEventListener('resize', handleResize)

    // Limpeza do event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative bg-gray-900 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      {/* Imagem de fundo responsiva */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage} // Usando a imagem que foi definida dinamicamente
          alt="Hero image background"
          className="h-full w-full object-cover object-center opacity-90"
          priority
          layout="fill" // O layout "fill" preenche toda a área disponível
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-10"
      />

      {/* Logo - Mover para baixo */}
      {/* Logo - Mover para baixo e ajustar tamanho */}
      <div className="absolute right-4 top-24 sm:right-8 sm:top-20">
        <Image
          src={logo}
          alt="Logo"
          className="h-auto w-auto max-w-[80x] sm:max-w-[100px] lg:max-w-[150px]" // Ajuste de tamanho
          priority
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 text-white sm:pt-40 lg:px-8">
        <div className="ml-auto max-w-md text-center md:text-right lg:max-w-lg">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            "Comunicar bem <br /> desde cedo faz <br /> toda a diferença"
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
