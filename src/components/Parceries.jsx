import Image from 'next/image'
import morangos from '@/images/mor.jpeg'
import ideia from '@/images/ideia.jpeg'
import seb from '@/images/seb.jpeg'


export default function Parceries() {
  return (
    <section id="parceries" aria-label="parceries">
      <div className="py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
            Parcerias
          </h2>
          <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Temos a honra de ter parceria com algumas instituições. Todos os
            alunos dos nossos parceiros, que necessitarem dos nossos serviços,
            usufruem de 10% de desconto em consultas unitárias em todo o
            processo de intervenção.
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={morangos}
              alt=""
              width={180}
              height={50}
            />
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={ideia}
              alt=""
              width={180}
              height={50}
            />
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={seb}
              alt=""
              width={180}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
