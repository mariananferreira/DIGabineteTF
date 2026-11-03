import Image from 'next/image'
import { MobileCarousel } from '@/components/MobileCarousel'

import seb1 from '@/images/parceria.jpeg'
import seb2 from '@/images/parceria1.jpeg'
import seb3 from '@/images/parceria2.jpeg'
import colegio from '@/images/transferir.png'
import seb4 from '@/images/seb4.jpeg'

const partners = [
  {
    name: '3 Ponto 14',
    category: 'Centro de estudos',
    location: 'Rio Tinto',
    image: seb1,
  },
  {
    name: 'Crescer a Brincar',
    category: 'Jardim de infância e creche',
    location: 'Polo I · Fânzeres',
    image: seb2,
  },
  {
    name: 'Centro Médico de Soutelo',
    category: 'Medicina dentária',
    location: 'Rio Tinto',
    image: seb3,
  },
  {
    name: 'Externato Santa Margarida',
    category: 'Ensino',
    location: 'Gondomar',
    image: colegio,
  },
  {
    name: 'Associação de Pais da Escola da Boavista',
    category: 'Associação de pais',
    location: 'Rio Tinto',
    image: seb4,
  },
]

export default function Parceries() {
  return (
    <section
      id="parceries"
      aria-labelledby="parceries-title"
      className="py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="mx-auto mb-14 w-3/4 border-t-2 border-[#e8cfc2]" />

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">
            As nossas parcerias
          </p>
          <h2
            id="parceries-title"
            className="sectionTitles text-3xl tracking-tight sm:text-3xl"
          >
            O <span className="titleWord">progresso</span> é um caminho que não
            se faz sozinho!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Trabalhamos em colaboração com entidades de educação e saúde para
            apoiar as famílias.
          </p>
        </div>

        <MobileCarousel
          id="partner-cards"
          label="conhecer as parcerias"
          count={partners.length}
          desktopClassName="sm:flex-wrap sm:justify-center"
        >
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="relative mx-6 mt-6 h-44 sm:mx-8">
                <Image
                  src={partner.image}
                  alt={`Logótipo de ${partner.name}`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 96px), (max-width: 1023px) 40vw, 260px"
                  className="object-contain"
                />
              </div>

              <div className="mx-6 mt-6 flex flex-1 flex-col border-t border-[#f0e5de] pb-6 pt-5 text-center">
                <h3 className="text-base font-semibold leading-6 tracking-tight text-gray-900 sm:min-h-[3rem]">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {partner.category}
                </p>
                <p className="mt-auto pt-4 text-sm text-[#936b59]">
                  {partner.location}
                </p>
              </div>
            </li>
          ))}
        </MobileCarousel>
      </div>
    </section>
  )
}
