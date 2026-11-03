
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Sara from '@/images/sara.png'

export default function TerSara() {
  return (
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
          aria-labelledby="sara-title"
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
                src={Sara}
                alt="Sara, Psicóloga"
                fill
                priority
                sizes="320px"
                className="team-portrait-sara object-cover object-top"
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
                id="sara-title"
                className="
                  sectionTitles
                  text-3xl
                  tracking-tight
                  sm:text-4xl
                "
              >
                Dra. Sara
              </h1>

              <p className="mt-2 text-lg text-gray-500">
                Psicóloga
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
                Olá! Eu sou a Sara e sou Psicóloga.
              </p>

              <p>
                Sou doutorada em Psicologia Aplicada e mestre em
                Psicologia. Ao longo do meu percurso profissional,
                tenho procurado complementar a minha formação de
                forma contínua, para aprofundar as áreas que mais
                me motivam e responder da melhor forma às
                necessidades de cada criança.
              </p>

              <p>
                Neste percurso, destaco a Especialização Avançada
                em Neuropsicologia da Criança e do Adolescente e
                a Pós-Graduação em Terapia Assistida por Animais.
                Destaco também diversos cursos e formações
                complementares nesta última área, entre os quais
                o Curso de Treino de Cães de Assistência.
              </p>

              <p>
                Tenho trabalhado com crianças e jovens em contextos
                muito diferentes: na escola, em contexto clínico
                e com recurso aos Serviços Assistidos por Animais.
                Nestas intervenções trabalho com cavalos e com
                a minha cadela, a Cookie, que é também a minha
                companheira de trabalho.
              </p>

              <p>
                Uma parte significativa do meu percurso profissional
                foi desenvolvida no âmbito da investigação
                científica. Esta experiência contribuiu para
                consolidar a minha postura crítica e reflexiva,
                aliando o rigor científico ao trabalho do dia a dia.
              </p>

              <p>
                Dentro da Psicologia, tenho particular interesse
                pela avaliação e intervenção psicológica e
                neuropsicológica, pela regulação emocional e pela
                esperança, ou seja, a capacidade de cada criança
                acreditar que consegue alcançar os seus objetivos
                e encontrar caminhos para lá chegar.
              </p>

              <p>
                Acredito que cada criança precisa de se sentir
                segura e compreendida para poder crescer. Por
                isso, procuro construir com ela uma relação de
                confiança e adaptar cada sessão às suas
                necessidades.
              </p>

              <p>
                Ajudo-a a conhecer melhor as suas emoções e a
                descobrir as suas próprias estratégias, sempre
                com espaço para brincar.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
