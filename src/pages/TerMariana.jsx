import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import mariana from '@/images/TERM.png'

export default function TerMari() {
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
            aria-labelledby="mariana-title"
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
                  src={mariana}
                  alt="Dra. Mariana Moreira, Terapeuta Ocupacional"
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
                  id="mariana-title"
                  className="
                    sectionTitles
                    text-3xl
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  Dra. Mariana Moreira
                </h1>

                <p className="mt-2 text-lg text-gray-500">
                  Terapeuta Ocupacional
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
                  Olá, sou a Mariana Moreira, Terapeuta Ocupacional desde
                  2019, licenciada pela Escola Superior de Saúde do Porto
                  (ESS).
                </p>

                <p>
                  Ao longo do meu percurso profissional tive oportunidade de
                  trabalhar com diferentes faixas etárias, mas é na Pediatria
                  que me sinto mais realizada.
                </p>

                <p>
                  Tenho investido de forma contínua em formação nesta área,
                  garantindo uma intervenção atualizada e alinhada com as
                  necessidades de cada criança e da sua família.
                </p>
                <p>
                  Entre as formações realizadas destacam-se o Snoezelen e o
                  DIR 101 – Introdução ao Modelo DIR/DIRFloortime.
                </p>

                <p>
                  Acredito profundamente que cada criança é única e merece
                  uma abordagem individualizada, que valorize as suas
                  capacidades e promova o seu desenvolvimento.
                </p>
              </div>

              {/* Áreas de acompanhamento */}
              <div
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
                    'Pediatria',
                    'Desenvolvimento Infantil',
                    'Participação',
                    'Snoezelen',
                    'DIR / DIRFloortime',
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
              </div>

              {/* Formação e abordagem */}
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
                  No Centro Terapêutico DI comprometo-me a proporcionar um
                  acompanhamento pautado pela dedicação, empatia e
                  profissionalismo.
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