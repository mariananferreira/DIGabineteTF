import Image from 'next/image'
import morangos from '@/images/mor.jpeg'
import seb1 from '@/images/parceria.jpeg'
import seb2 from '@/images/parceria1.jpeg'
import seb3 from '@/images/parceria2.jpeg'
import seb4 from '@/images/parceria4.png'
import colegio from '@/images/transferir.png'


const people = [
  {
    name: 'Centro de Estudos – 3 Ponto 14',
    role: 'Rio Tinto',
    imageUrl: seb1,
    bio: 'Todos os nossos clientes podem usufruir de 10% de desconto em todos os seus serviços. Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    url: 'https://3ponto14.com',
  },
  {
    name: 'Crescer a Brincar (Jardim / Creche)',
    role: 'Polo I – Fânzeres',
    imageUrl: seb2,
    bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro. -Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    url:'http://www.crescerabrincar.pt '
  },
  {
    name: 'Centro de Estudos – Morangos',
    role: 'Baguim do Monte',
    imageUrl: morangos,
    bio: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    url:'https://www.instagram.com/morangos_baguimdomonte/'
  },
  {
    name: 'Centro Médico de Soutelo - Medicina dentária',
    role: 'Rio Tinto',
    imageUrl: seb3,
    bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro.',
    url:'ttps://www.centromedicodesoutelo.com'
  },
  {
    name: 'Externato Santa Margarida',
    role: 'Gondomar',
    imageUrl: colegio,
    bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro.',
    url:'https://externatosantamargarida.pt/'
  },
  // More people...
]

export default function Parceries() {
  return (
    <section id="parceries" aria-label="parceries">
      <div className="py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
            Parcerias
          </h2>
          <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            O progresso é um caminho que não se traça sozinho e é com grande
            satisfação que temos o privilégio de colaborar com algumas
            instituições!
          </p>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-contain"
                  src={person.imageUrl}
                  alt=""
                  priority
                />
                <div className="flex-auto">
                  <a href={person.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                  </a>

                  <p className="text-base leading-7 text-gray-600">
                    {person.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
