import Image from 'next/image'
import morangos from '@/images/mor.jpeg'
import seb1 from '@/images/parceria.jpeg'
import seb2 from '@/images/parceria1.jpeg'
import seb3 from '@/images/parceria2.jpeg'
import colegio from '@/images/transferir.png'
import seb4 from '@/images/seb4.jpeg'
import seb5 from '@/images/seb5.jpeg'

const people = [
  {
    name: 'Centro de Estudos – 3 Ponto 14',
    role: 'Rio Tinto',
    imageUrl: seb1,
  },
  {
    name: 'Crescer a Brincar (Jardim/Creche)',
    role: 'Polo I – Fânzeres',
    imageUrl: seb2,
  },
  {
    name: 'Centro de Estudos – Morangos',
    role: 'Baguim do Monte',
    imageUrl: morangos,
  },
  {
    name: 'Escola Santa Maria',
    role: 'Porto',
    imageUrl: seb5,
  },
  {
    name: 'Centro Médico de Soutelo - Medicina dentária',
    role: 'Rio Tinto',
    imageUrl: seb3,
  },
  {
    name: 'Externato Santa Margarida',
    role: 'Gondomar',
    imageUrl: colegio,
  },
  {
    name: 'Associação de Pais da Escola da Boavista',
    role: 'Rio tinto',
    imageUrl: seb4,
  },

  // More people...
]

export default function Parceries() {
  return (
    <section id="parceries" aria-label="parceries">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              O <span className="titleWord">progresso</span> é um caminho que
              não se faz sozinho!
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[14/13] w-full rounded-2xl border-4 border-[#e8cfc2]"
                  src={person.imageUrl}
                  alt=""
                  priority
                />

                <h3 className="text mt-6 text-center text-base/7 font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="text-center text-sm/6 text-gray-600">
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// const people = [
//   {
//     name: 'Centro de Estudos – 3 Ponto 14',
//     role: 'Rio Tinto',
//     imageUrl: seb1,
//     bio: 'Todos os nossos clientes podem usufruir de 10% de desconto em todos os seus serviços. Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
//     url: 'https://3ponto14.com',
//   },
//   {
//     name: 'Crescer a Brincar (Jardim / Creche)',
//     role: 'Polo I – Fânzeres',
//     imageUrl: seb2,
//     bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro. -Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
//     url:'http://www.crescerabrincar.pt '
//   },
//   {
//     name: 'Centro de Estudos – Morangos',
//     role: 'Baguim do Monte',
//     imageUrl: morangos,
//     bio: 'Todos os alunos têm 10% de desconto em consultas de Terapia da Fala unitárias.',
//     url:'https://www.instagram.com/morangos_baguimdomonte/'
//   },
//   {
//     name: 'Centro Médico de Soutelo - Medicina dentária',
//     role: 'Rio Tinto',
//     imageUrl: seb3,
//     bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro.',
//     url:'ttps://www.centromedicodesoutelo.com'
//   },
//   {
//     name: 'Externato Santa Margarida',
//     role: 'Gondomar',
//     imageUrl: colegio,
//     bio: 'O nosso Gabinete realiza intervenção direta nas instalações deste parceiro.',
//     url:'https://externatosantamargarida.pt/'
//   },
//   // More people...
// ]

// export default function Parceries() {
//   return (
//     <section id="parceries" aria-label="parceries">
//       <div className="py-24 sm:py-20">
//       <div className="mt-12 mb-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
//           <h2 className="sectionTitles text-2xl tracking-tight sm:text-2xl">
//             O <span className="titleWord">progresso</span> é um caminho que n\ao se faz sozinho!
//           </h2>
//           <ul
//             role="list"
//             className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
//           >
//             {people.map((person) => (
//               <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
//                 <Image
//                   className="aspect-[4/5] w-52 flex-none rounded-2xl object-contain"
//                   src={person.imageUrl}
//                   alt=""
//                   priority
//                 />
//                 <div className="flex-auto">
//                   <a href={person.url} target="_blank" rel="noopener noreferrer">
//                     <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
//                       {person.name}
//                     </h3>
//                   </a>

//                   <p className="text-base leading-7 text-gray-600">
//                     {person.role}
//                   </p>
//                   <p className="mt-6 text-base leading-7 text-gray-600">
//                     {person.bio}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }
