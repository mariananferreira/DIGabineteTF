import Image from 'next/image'
import team from '@/images/team.jpeg'
import somos from '@/images/di2.jpeg'
import space from '@/images/space1.jpeg'
import { Container } from '@/components/Container'

export default function Intro() {
  return (
    <section id="intro" aria-label="">
      <Container>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-24 lg:px-8">
            <div className="mb-12 mt-12 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
              <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
                Cada <span className="titleWord ">palavra</span> é um passo para
                o futuro!
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <Image
                  className="object-cover object-center group-hover:opacity-75"
                  src={somos}
                  alt=""
                  priority
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#aboutme">
                        <span className="absolute inset-0" />
                        Quem somos
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <Image
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                  src={team}
                  alt=""
                  priority
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#ourteam">
                        <span className="absolute inset-0" />A nossa equipa
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <Image
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                  src={space}
                  alt=""
                  priority
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#ourspace">
                        <span className="absolute inset-0" />O nosso espaço
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
