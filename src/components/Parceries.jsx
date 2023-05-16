import Image from 'next/image'
import morangos from '@/images/mor.png'
import ideia from '@/images/react.png'
import three from '@/images/three.png'

export default function Parceries() {
  return (
    <section id="parceries" aria-label="parceries">
      <div className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="primaryColor text-3xl font-bold tracking-tight sm:text-4xl">
            Parcerias
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Temos a honra de ter parceria com algumas instituições. Todos os
            alunos dos nossos parceiros, que necessitarem dos nossos serviços,
            usufruem de 10% de desconto em consultas unitárias em todo o
            processo de intervenção.
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Image
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={morangos}
              alt="Transistor"
              width={180}
              height={50}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
