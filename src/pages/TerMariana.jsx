import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ines from '@/images/TERM.png'
import Link from 'next/link'

export default function TerMari() {
  return (
    <>
      <div className="primaryBack">
        <Header />
        <main className="mx-auto mt-[80px] flex min-h-screen max-w-7xl flex-col px-4 sm:mt-[120px] sm:px-8 lg:px-16">
          <section
            id="terDeb"
            aria-label="terDeb"
            className="mb-12 mt-12 text-center"
          >
            <h1 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Dra. Mariana Moreira
            </h1>
            <p className="text mt-2 text-lg">Terapeuta ocupacional</p>
          </section>
          <section className="flex flex-col items-center gap-8 sm:flex-row">
            <div className="flex-shrink-0">
              <Image
                src={ines}
                alt="Foto"
                width={300}
                height={300}
                className="w-full rounded-2xl border-4 border-[#e8cfc2]"
              />
            </div>

            <div className="mb-12">
              <p className="text text-justify leading-relaxed">
                Olá sou a Mariana Moreira, Terapeuta Ocupacional desde 2019,
                licenciada pela Escola Superior de Saúde do Porto (ESS).
                <br />
                <br />
                Ao longo do meu percurso profissional tive oportunidade de
                trabalhar com diferentes faixas etárias, mas é na pediatria que
                me sinto mais realizada. Tenho investido de forma contínua em
                formação nesta área, garantindo uma intervenção atualizada e
                alinhada com as necessidades de cada criança e da sua família.
                Entre as formações realizadas destacam‑se o Snoezelen e DIR 101
                I Introdução ao Modelo DIR/DIRFloortime.
                <br />
                <br />
                Acredito profundamente que cada criança é única e merece uma
                abordagem individualizada, que valorize as suas capacidades e
                promova o seu desenvolvimento. No Centro Terapêutico DI
                comprometo-me a proporcionar um acompanhamento pautado pela
                dedicação, empatia e profissionalismo.
              </p>
            </div>
          </section>
        </main>
        <Footer className="mt-4" /> {/* Ajuste no espaçamento do Footer */}
      </div>
    </>
  )
}
