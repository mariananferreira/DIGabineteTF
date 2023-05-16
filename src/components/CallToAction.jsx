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
        <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Marque o seu rastreio gratuito!
        </h2>
          <p className="secondaryText text-gray-600 mt-4 text-lg tracking-tight">
            O rastreio é realizado com o objetivo de haver um tempo de conversa
            entre a Terapeuta, os Encarregados de Educação e a criança. <br/>Este
            tempo permite esclarecer quais as maiores preocupações dos
            cuidadores, permitir uma observação rápida das maiores dificuldades
            da criança e orientar a família da melhor forma.
          </p>
          <Link
            href="#contacts"
            className="buttonStyle mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Marque já!
          </Link>
        </div>
      </Container>
    </section>
  )
}
