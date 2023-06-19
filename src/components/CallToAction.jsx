import Image from 'next/image'
import { NavLink } from '@/components/NavLink'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="secondary relative overflow-hidden py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center ">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Marque o seu rastreio gratuito!
          </h2>
          <p className="mt-4 text-xl mb-3 tracking-tight text-gray-600">
            O rastreio é realizado com o objetivo de proporcionar um espaço de
            diálogo entre a Terapeuta, os Encarregados de Educação e a Criança.
            Durante esse tempo, é então possível perceber quais são as maiores
            preocupações dos cuidadores, esclarecê-las, proceder a uma breve
            observação das dificuldades enfrentadas pela criança e fornecer
            orientações adaptadas à família de forma eficaz.
          </p>
          <Link
            href="#contacts"
            className="buttonStyle mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            Marque já!
          </Link>
        </div>
      </Container>
    </section>
  )
}
