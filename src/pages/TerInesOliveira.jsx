import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ines from '@/images/io.png'

export default function TerInesOliveira() {
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
            aria-labelledby="ines-oliveira-title"
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
                  src={ines}
                  alt="Dra. Inês Oliveira, Terapeuta da Fala"
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
                  id="ines-oliveira-title"
                  className="
                    sectionTitles
                    text-3xl
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  Dra. Inês Oliveira
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
                  Olá! Eu sou a Inês e sou Terapeuta da Fala.
                </p>

                <p>
                  Sou licenciada em Terapia da Fala pela Escola Superior de
                  Saúde e, ao longo do meu percurso profissional, tenho tido
                  a oportunidade de acompanhar pessoas de diferentes faixas
                  etárias e com necessidades muito distintas.
                </p>

                <p>
                  Apesar dessa diversidade, é no trabalho com crianças que
                  encontro uma motivação muito especial. Gosto de acompanhar
                  cada criança ao seu ritmo, valorizar as suas conquistas e
                  transformar cada sessão num espaço onde aprender também
                  pode ser divertido.
                </p>
                <p>
                  Dentro da Terapia da Fala, tenho particular interesse
                  pelas áreas da Comunicação e pela Motricidade Orofacial,
                  áreas que procuro aprofundar continuamente através de
                  formação e de experiência clínica.
                </p>

                <p>
                  Acredito que cada criança tem a sua própria forma de
                  comunicar e que o nosso papel, enquanto terapeutas, passa
                  também por descobrir e potenciar essa forma de expressão.
                </p>
              </div>

              {/* Áreas de acompanhamento */}
              {/*<div
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
                    'Comunicação',
                    'Motricidade Orofacial',
                    'Terapia da Fala',
                    'Intervenção Pediátrica',
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

              {/* Continuação */}
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
                  Estou muito feliz por abraçar este novo desafio e por poder
                  fazer parte da equipa do Centro Terapêutico DI.
                </p>

                <p>
                  Espero poder acompanhar cada criança de forma próxima e
                  atenta, respeitando o seu ritmo, e que seja possível
                  celebrar cada pequena conquista ao longo do caminho.
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