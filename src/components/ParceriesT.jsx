import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import morangos from '@/images/mor.jpeg'
import ideia from '@/images/ideia.jpeg'
import seb from '@/images/seb.jpeg'
import seb1 from '@/images/parceria.jpeg'
import seb2 from '@/images/parceria1.jpeg'
import seb3 from '@/images/parceria2.jpeg'

const people = [
  {
    name: 'Centro de Estudos – 3 Ponto 14',
    title: 'Rio Tinto',
    text: ' - Todos os nossos Clientes podem usufruir de 10‰ de desconto em todos os seus serviços. -Todos os alunos têm 10‰ de desconto em consultas de Terapia da Fala unitárias.',
    email: 'https://www.instagram.com/morangos_baguimdomonte/',
    imageUrl: seb,
  },
  {
    name: 'Centro de Estudos – Morangos',
    title: 'Baguim do Monte',
    text: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    email: 'https://3ponto14.com ',
    imageUrl: seb1,
  },
  {
    name: 'Centro de Estudos – Morangos',
    title: 'Baguim do Monte',
    text: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    email: 'https://www.instagram.com/morangos_baguimdomonte/',
    imageUrl: ideia,
  },
  {
    name: 'Centro de Estudos – Morangos',
    title: 'Baguim do Monte',
    text: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    email: 'https://www.instagram.com/morangos_baguimdomonte/',
    imageUrl: morangos,
  },
  {
    name: 'Centro de Estudos – Morangos',
    title: 'Baguim do Monte',
    text: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
    email: 'https://www.instagram.com/morangos_baguimdomonte/',
    imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="text-l mt-6 font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-l text-gray-700">{person.title}</dd>
                  </dl>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-m text-gray-500">{person.text}</dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={person.email}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        target="blank"
                      >
                        <EnvelopeIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Site
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
