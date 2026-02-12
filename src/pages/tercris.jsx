import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ines from '@/images/crisfoto.png'
import Link from 'next/link'

export default function TerDeb() {
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
              Dra. Cristiana Elias
            </h1>
            <p className="text mt-2 text-lg">Terapeuta Ocupacional</p>
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
              <section className="mt-6 flex justify-center gap-6"></section>
            </div>

            <div className="mb-12">
              <p className="text text-justify leading-relaxed">
                Olá, eu sou a Cristiana Elias, Terapeuta Ocupacional desde de
                2019.
                <br />
                <br />
                A Pediatria é a área que sempre fez mais sentido no meu percurso
                profissional e onde encontro maior realização.
                <br />
                <br />
                Trabalho com crianças, acompanhando o seu desenvolvimento de
                forma individualizada, com foco na promoção da autonomia,
                funcionalidade e participação nas atividades do dia a dia.
                Acredito numa intervenção centrada na criança e na família,
                baseada na relação, na confiança e no respeito pelo ritmo de
                cada criança.
                <br />
                <br />
                Desempenho a minha prática com dedicação, profissionalismo e
                empatia, procurando apoiar cada criança e família no seu
                percurso terapêutico e contribuir de forma positiva para o seu
                desenvolvimento e bem-estar.
              </p>
            </div>
          </section>
        </main>
        <Footer className="mt-4" /> {/* Ajuste no espaçamento do Footer */}
      </div>
    </>
  )
}
