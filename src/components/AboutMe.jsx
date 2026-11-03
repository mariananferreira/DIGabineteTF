import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'

export function AboutMe() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section
      id="aboutme"
      aria-labelledby="aboutme-title"
      className="primaryBack py-14 sm:py-16"
    >
      <Container>
        <hr className="mx-auto mb-10 w-3/4 border-t-2 border-[#e8cfc2] sm:mb-14" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="aboutme-title" className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">
            Quem somos
          </h2>

        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] bg-white px-5 py-7 text-left shadow-sm ring-1 ring-black/5 sm:mt-10 sm:p-10">
          <div className="space-y-6 text-base leading-7 text-gray-600 sm:space-y-8">
            <p>
              O Centro Terapêutico DI, sediado em Rio Tinto, Gondomar, que
              nasceu com um propósito especial. Enquanto amigas e colegas de
              trabalho, somos duas profissionais que decidiram abraçar uma nova
              aventura e criar um espaço no qual possamos exercer aquilo que
              mais gostamos e ajudar crianças e famílias que necessitem de apoio
              na valência de Terapia da Fala para o seu bom desenvolvimento!
            </p>
            <div id="aboutme-more" className={`${expanded ? 'block' : 'hidden'} space-y-6 sm:block sm:space-y-8`}>
            <p>
              No nosso centro, priorizamos o atendimento pediátrico e
              procuramos oferecer um serviço de qualidade excecional, adaptado
              às necessidades específicas de cada paciente, tendo em
              consideração a sua individualidade. A nossa abordagem passa ainda
              por integrar e trabalhar de perto com as famílias, de forma a
              incentivar a participação ativa e o envolvimento das mesmas no
              decorrer da intervenção.
            </p>
            <p>
              A nossa área de especialização estende-se a Perturbações da
              Comunicação, Linguagem e Fala e à intervenção com o diagnóstico de
              Autismo, não esquecendo a vasta experiência em intervenção com
              crianças com Perturbações da Leitura e da Escrita.
            </p>
            <p>
              Explore as opções de serviços que oferecemos e descubra de que
              forma o(a) podemos ajudar!
            </p>
            </div>
            <button type="button" aria-expanded={expanded} aria-controls="aboutme-more"
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex min-h-[48px] items-center rounded-lg px-2 text-sm font-semibold text-[#936b59] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59] sm:hidden">
              {expanded ? 'Ler menos' : 'Ler mais sobre nós'}
            </button>
          </div>

          <div className="mt-7 border-t border-[#f0e5de] pt-6 sm:mt-8">
            <Link
              href="/#ourteam"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#b98b76] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#936b59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59] sm:w-auto"
            >
              Conheça a equipa <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
