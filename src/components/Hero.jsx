import Image from 'next/image'
import hero from '@/images/hero.jpeg'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="primaryColor text-4xl font-bold tracking-tight sm:text-6xl">
                  DI <br /> Gabinete Terapia da Fala
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Bem-vindo(a) ao nosso gabinete de terapia da fala! <br />
                  Estamos sediados em Baguim do Monte e a nossa principal missão
                  é ajudar pessoas de todas as idades superar desafios
                  relacionados com a fala e linguagem. O nosso objetivo é
                  fornecer um ambiente acolhedor e personalizado, onde cada
                  indivíduo receba o suporte necessário para alcançar o seu
                  pleno potencial de comunicação.
                  <br />
                  Descubra mais sobre o nosso espaço e marque já o seu rastreio
                  gratuito!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={hero}
            alt=""
            priority
          />
        </div>
      </div>
    </div>
  )
}
