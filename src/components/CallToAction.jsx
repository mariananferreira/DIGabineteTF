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
        <div className="mx-auto text-center max-w-lg ">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Marque o seu rastreio gratuito!
          </h2>
          <p className="secondaryText mt-4 text-lg tracking-tight text-gray-600">
            O rastreio dura entre 20 a 30 minutos e tem como principal objetivo
            perceber as necessidades do utente e da sua família <br />
            No final do rastreio a terapeuta indica se há necessidade ou não de
            uma intervenção e caso esta se confirme, o processo inicia-se de uma
            forma planeada e estruturada.
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
