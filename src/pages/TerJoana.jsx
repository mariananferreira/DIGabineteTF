import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ines from '@/images/terJoana.png'
import Link from 'next/link'

export default function TerJoana() {
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
              Dra. Joana
            </h1>
            <p className="text mt-2 text-lg">Terapeuta da fala</p>
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
                Olá! Sou a Joana e sou Terapeuta da Fala desde 2024, licenciada
                pela Escola Superior de Saúde do Porto.
                <br />
                <br />
                Ao longo do meu percurso, tenho tido a oportunidade de trabalhar
                com diferentes faixas etárias, mas é com crianças e no
                desenvolvimento infantil que me sinto verdadeiramente realizada.
                <br />
                <br />
                Tenho especial interesse na área da Motricidade Orofacial, na
                qual me especializei, e atualmente encontro-me a frequentar o
                mestrado na Escola Superior de Saúde do Porto.
                <br />
                <br />
                No Centro Terapêutico DI, abraço este projeto com muito
                entusiasmo, dedicação e sentido de responsabilidade. Podem
                contar comigo para acompanhar cada criança e família de forma
                próxima, respeitosa e atenta às suas necessidades.
              </p>
            </div>
          </section>
        </main>
        <Footer className="mt-4" /> {/* Ajuste no espaçamento do Footer */}
      </div>
    </>
  )
}
