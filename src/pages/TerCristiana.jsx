import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import cristiana from '@/images/crisfoto.png'

export default function TerCristiana() {
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
            aria-labelledby="cristiana-title"
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
                  src={cristiana}
                  alt="Dra. Cristiana Elias, Terapeuta Ocupacional"
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
                  id="cristiana-title"
                  className="
                    sectionTitles
                    text-3xl
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  Dra. Cristiana Elias
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
                  Olá, eu sou a Cristiana Elias, Terapeuta Ocupacional desde
                  2019.
                </p>

                <p>
                  A Pediatria é a área que sempre fez mais sentido no meu
                  percurso profissional e onde encontro maior realização.
                </p>

                <p>
                  Trabalho com crianças, acompanhando o seu desenvolvimento
                  de forma individualizada, com foco na promoção da autonomia,
                  funcionalidade e participação nas atividades do dia a dia.
                </p>
              </div>

              {/* Áreas de acompanhamento */}
            {/*   <div
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
                    'Funcionalidade',
                    'Desenvolvimento Infantil',
                    'Atividades da Vida Diária',
                    'Participação',
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

              {/* Abordagem */}
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
                  Acredito numa intervenção centrada na criança e na família,
                  baseada na relação, na confiança e no respeito pelo ritmo
                  de cada criança.
                </p>

                <p>
                  Desempenho a minha prática com dedicação, profissionalismo
                  e empatia, procurando apoiar cada criança e família no seu
                  percurso terapêutico e contribuir de forma positiva para o
                  seu desenvolvimento e bem-estar.
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