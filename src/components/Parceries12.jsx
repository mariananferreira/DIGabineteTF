import Image from 'next/image'
import morangos from '@/images/mor.jpeg'
import ideia from '@/images/ideia.jpeg'
import seb from '@/images/seb.jpeg'
import seb1 from '@/images/parceria.jpeg'
import seb2 from '@/images/parceria1.jpeg'
import seb3 from '@/images/parceria2.jpeg'


export default function Parceries() {
  return (
    <section id="parceries" aria-label="parceries">
      <div className="py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
            Parcerias
          </h2>
          <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            O progresso é um caminho que não se traça sozinho e é com grande satisfação que temos o privilégio de colaborar com algumas instituições! 
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
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={seb1}
              alt=""
              width={180}
              height={50}
            />
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={seb2}
              alt=""
              width={180}
              height={40}
            />
            <Image
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
              src={seb3}
              alt=""
              width={160}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
