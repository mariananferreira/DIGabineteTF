import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ines from '@/images/ines.jpeg'
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
              Dra. Inês leite
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
              <section className="mt-6 flex justify-center gap-6">
                {/* Instagram Icon */}
                <Link
                  href="https://www.instagram.com/tfinesleite/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </Link>

                {/* LinkedIn Icon */}
                <Link
                  href="https://www.linkedin.com/in/maria-in%C3%AAs-leite-b91956190/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </section>
            </div>

            <div className="mb-12">
              <p className="text text-justify leading-relaxed">
                Olá, eu sou a Inês e sou Terapeuta da fala desde 2019!
                <br />
                <br />
                Formei-me na Escola Superior de Saúde do Instituto Politécnico
                do Porto (ESS). Neste meu percurso especializei-me na área
                Pediátrica e é nesta área que me sinto mais feliz e completa.
                Sou especialista em Perturbações da Comunicação, Linguagem e
                Fala, pela CRIAP e em Perturbações da comunicação, Relação e
                Autismo, pela SeedGo.
                <br />
                <br />
                Realizo intervenção com crianças e com estas diversas
                perturbações desde que terminei a licenciatura. O Centro Terapêutico DI é
                para mim, ao nível pessoal e profissional, um grande desafio.
                Poderão sempre contar com a minha sinceridade, dedicação e
                profissionalismo. Espero que o nosso projeto auxilie muitas
                famílias e crianças nesta viagem que é a Terapia da Fala.
              </p>
            </div>
          </section>
        </main>
        <Footer className="mt-4" /> {/* Ajuste no espaçamento do Footer */}
      </div>
    </>
  )
}
