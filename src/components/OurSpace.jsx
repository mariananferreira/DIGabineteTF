import React from 'react'
import { Container } from '@/components/Container'
import Gallery from '../components/Gallery'
import SM from '@/images/espaco.jpeg'
import esp1 from '@/images/esp1.jpeg'
import esp2 from '@/images/esp2.jpeg'
import esp3 from '@/images/esp3.jpeg'
import esp4 from '@/images/esp4.jpeg'
import esp5 from '@/images/esp5.jpeg'
import esp6 from '@/images/esp6.jpeg'

const images = [
  {
    src: esp3,
    alt: 'espaço 1',
    caption: 'Receção do Gabinete DI',
  },
  // {
  //   src: esp2,
  //   alt: 'espaço 2',
  //   caption: 'Image 2 caption',
  // },
  {
    src: esp1,
    alt: 'espaço 2',
    caption: 'Espaço de brincar situado na receção',
  },
  {
    src: esp4,
    alt: 'espaço 2',
    caption: 'Área de espera pela consulta',
  },
  {
    src: esp5,
    alt: 'espaço 2',
    caption: 'Gabinete da Terapeuta Inês',
  },
  {
    src: esp6,
    alt: 'espaço 2',
    caption: 'Gabinete da Terapeuta Débora',
  },
  // {
  //   src: SM,
  //   alt: 'espaço exterior',
  //   caption: 'Image 2 caption',
  // },
]

export default function OurSpace() {
  return (
    <section id="ourspace" aria-label="" className="py-10 sm:py-30">
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
            O nosso espaço
          </h2>

          <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Venha conhecer o nosso gabinete em Baguim do Monte.
          </p>
        </div>
        <div className="secondary lg:rounded-3xl">
          <Gallery images={images} />
        </div>
      </Container>
    </section>
  )
}
