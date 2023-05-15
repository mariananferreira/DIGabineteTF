import Image from 'next/image'
import { Container } from '@/components/Container'
import aboutus from '@/images/aboutus.jpeg'

export function AboutMe() {
  return (
    <section
      id="aboutme"
      aria-label="Features for running your books"
      className="primaryBack pb-28 pt-20 sm:py-32"
    >
      <Container className="relative py-16">
        <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div
                className="absolute inset-x-0 h-1/2 lg:hidden"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <Image
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src={aboutus}
                    alt=""
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="secondary relative lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
                className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="secondaryColor"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className=""
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 px-4 py-12 sm:max-w-3xl sm:px-6 sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="test text-2xl tracking-tight" id="join-heading">
                  Quem somos, <br />
                </h2>
                <p className="textAboutMe">
                  Somos duas amigas e colegas de trabalho que decidiram entrar
                  nesta aventura e criar um espaço onde pudessem fazer o que
                  mais gostam e ajudar crianças e famílias que necessitem do
                  apoio da Terapia da Fala para o seu bom desenvolvimento.
                </p>
                <p className="textAboutMe">
                  O nosso principal objetivo é prestar um serviço de qualidade
                  ao nível Pediátrico.
                </p>
                <p className="textAboutMe">
                  Somos especializadas em Perturbações da Comunicação, Linguagem
                  e Fala, na intervenção com o diagnóstico de Autismo e temos
                  uma vasta experiência em intervenção com crianças com
                  perturbações da leitura e da escrita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
