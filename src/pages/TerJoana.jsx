import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import joana from '@/images/terJoana.png'

export default function TerJoana() {
  return (
    <>
      <div className="primaryBack">
        <Header />

        <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40 lg:px-8">

          {/* Voltar à equipa */}
          <div className="mb-8">
            <Link
              href="/#ourteam"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-gray-500
                transition-colors
                hover:text-[#b98b76]
              "
            >
              <span aria-hidden="true">←</span>
              Voltar à equipa
            </Link>
          </div>

          {/* Conteúdo principal */}
          <section
            aria-labelledby="joana-title"
            className="
              grid
              items-start
              gap-10
              lg:grid-cols-[320px_1fr]
              lg:gap-16
            "
          >

            {/* Coluna esquerda */}
            <div className="mx-auto w-full max-w-[320px] lg:mx-0">

              {/* Fotografia */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#f8f3f0]
                  shadow-sm
                  ring-1
                  ring-black/5
                "
              >
                <Image
                  src={joana}
                  alt="Dra. Joana Gomes, Terapeuta da Fala"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>

            </div>

            {/* Coluna direita */}
            <div>

              {/* Cabeçalho */}
              <div className="border-b border-[#e8cfc2] pb-7">

                <p
                  className="
                    mb-2
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#b98b76]
                  "
                >
                  A nossa equipa
                </p>

                <h1
                  id="joana-title"
                  className="
                    sectionTitles
                    text-3xl
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  Dra. Joana Gomes
                </h1>

                <p className="mt-2 text-lg text-gray-500">
                  Terapeuta da Fala
                </p>

              </div>

              {/* Apresentação */}
              <div
                className="
                  mt-8
                  space-y-5
                  text-[15px]
                  leading-7
                  text-gray-600
                  sm:text-base
                "
              >
                <p>
                  Olá! Sou a Joana e sou Terapeuta da Fala desde 2024,
                  licenciada pela Escola Superior de Saúde do Porto.
                </p>

                <p>
                  Ao longo do meu percurso, tenho tido a oportunidade de
                  trabalhar com diferentes faixas etárias, mas é com crianças
                  e no desenvolvimento infantil que me sinto verdadeiramente
                  realizada.
                </p>
                <p>
                  Tenho especial interesse na área da Motricidade Orofacial,
                  na qual me especializei, e atualmente encontro-me a
                  frequentar o mestrado na Escola Superior de Saúde do Porto.
                </p>
              </div>

              {/* Áreas de acompanhamento */}
             {/*  <div
                className="
                  mt-9
                  rounded-3xl
                  bg-[#f8f3f0]
                  p-6
                  sm:p-7
                "
              >
                <h2
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    text-gray-900
                  "
                >
                  Áreas de acompanhamento
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    'Terapia da Fala',
                    'Pediatria',
                    'Desenvolvimento Infantil',
                    'Motricidade Orofacial',
                  ].map((area) => (
                    <span
                      key={area}
                      className="
                        rounded-full
                        bg-white
                        px-3.5
                        py-2
                        text-sm
                        text-gray-600
                        shadow-sm
                        ring-1
                        ring-black/5
                      "
                    >
                      {area}
                    </span>
                  ))}
                </div>
                
              </div>*/}

              {/* Especialização */}
              <div
                className="
                  mt-8
                  space-y-5
                  text-[15px]
                  leading-7
                  text-gray-600
                  sm:text-base
                "
              >


                <p>
                  No Centro Terapêutico DI, abraço este projeto com muito
                  entusiasmo, dedicação e sentido de responsabilidade.
                </p>

                <p>
                  Podem contar comigo para acompanhar cada criança e família
                  de forma próxima, respeitosa e atenta às suas necessidades.
                </p>
              </div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}