import Image from 'next/image'

import debora from '@/images/deb1.png'
import ines from '@/images/ines.jpeg'
import nadia from '@/images/nadia.png'
import BT from '@/images/io.png'
import CE from '@/images/crisfoto.png'
import TJ from '@/images/terJoana.png'
import TM from '@/images/TERM.png'

const people = [
  {
    name: 'Dra. Débora Brochado',
    role: 'Terapeuta da Fala',
    imageUrl: debora,
    instagramUrl: 'https://www.instagram.com/tfdeborabrochado/',
    url: '/TerDebora',
  },
  {
    name: 'Dra. Inês Leite',
    role: 'Terapeuta da Fala',
    imageUrl: ines,
    instagramUrl: 'https://www.instagram.com/tfinesleite/',
    url: '/TerInes',
  },
  {
    name: 'Dra. Nádia Teixeira',
    role: 'Psicóloga Clínica',
    imageUrl: nadia,
    instagramUrl: null,
    url: '/PsiNadia',
  },
  {
    name: 'Dra. Inês Oliveira',
    role: 'Terapeuta da Fala',
    imageUrl: BT,
    instagramUrl: null,
    url: '/TerInesOliveira',
  },
  {
    name: 'Dra. Cristiana Elias',
    role: 'Terapeuta Ocupacional',
    imageUrl: CE,
    instagramUrl: null,
    url: '/TerCristiana',
  },
  {
    name: 'Dra. Mariana Moreira',
    role: 'Terapeuta Ocupacional',
    imageUrl: TM,
    instagramUrl: null,
    url: '/TerMariana',
  },
  {
    name: 'Dra. Joana Gomes',
    role: 'Terapeuta da Fala',
    imageUrl: TJ,
    instagramUrl: null,
    url: '/TerJoana',
  },
]

function InstagramIcon() {
  return (
    <svg
      className="h-5 w-5"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8Zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002Zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92ZM8.001 3.892a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217Zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334Z" />
    </svg>
  )
}

export default function OurTeam() {
  return (
    <section
      id="ourteam"
      aria-labelledby="ourteam-title"
      className="py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Linha de separação */}
        <hr className="mx-auto mb-14 w-3/4 border-t-2 border-[#e8cfc2]" />

        {/* Título */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="ourteam-title"
            className="sectionTitles text-3xl tracking-tight sm:text-3xl"
          >
            Conheça a nossa <span className="titleWord">equipa</span>{' '}
            especializada!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Uma equipa multidisciplinar dedicada a acompanhar cada pessoa de
            forma individualizada.
          </p>
        </div>

        {/* Cards */}
        <ul
          role="list"
          className="
            mx-auto
            mt-12
            grid
            max-w-5xl
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="
                group
                overflow-hidden
                rounded-[1.75rem]
                bg-white
                shadow-sm
                ring-1
                ring-black/5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Fotografia */}
              <a
                href={person.url}
                className="block"
                aria-label={`Ver perfil de ${person.name}`}
              >
                <div
                  className="
                    relative
                    aspect-[4/4.6]
                    w-full
                    overflow-hidden
                    bg-[#f8f3f0]
                  "
                >
                  <Image
                    src={person.imageUrl}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      320px
                    "
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>
              </a>

              {/* Informação */}
              <div className="px-5 pb-5 pt-4 text-center">
                {/* Nome */}
                <a href={person.url}>
                  <h3
                    className="
                      text-base
                      font-semibold
                      tracking-tight
                      text-gray-900
                      transition-colors
                      hover:text-[#b98b76]
                    "
                  >
                    {person.name}
                  </h3>
                </a>

                {/* Especialidade */}
                <p className="mt-1 text-sm text-gray-500">{person.role}</p>

                {/* Links */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  {/* Perfil */}
                  <a
                    href={person.url}
                    className="
                      text-sm
                      font-medium
                      text-[#b98b76]
                      transition-colors
                      hover:text-[#936b59]
                    "
                  >
                    Ver perfil
                    
                  </a>

                  {/* Instagram */}
                  {person.instagramUrl && (
                    <a
                      href={person.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${person.name}`}
                      className="
                        text-[#b98b76]
                        transition-all
                        duration-200
                        hover:scale-110
                        hover:text-[#936b59]
                      "
                    >
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
