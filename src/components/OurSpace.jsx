import Image from 'next/image'
import { Container } from '@/components/Container'
import space1 from '@/images/gab1.jpeg'
import space2 from '@/images/gab2.jpeg'
import space3 from '@/images/gab3.jpeg'
import space4 from '@/images/gab4.jpeg'
import space5 from '@/images/gab5.jpeg'
import space6 from '@/images/gab6.jpeg'
import space7 from '@/images/gab21.jpeg'
import space8 from '@/images/gab9.jpeg'
import space9 from '@/images/gab10.jpeg'
import space10 from '@/images/gab18.jpeg'
import space11 from '@/images/entrada.jpeg'
import space12 from '@/images/gab8.jpeg'
import space13 from '@/images/gab19.jpeg'
import space14 from '@/images/gab15.jpeg'
import space15 from '@/images/gab20.jpeg'
import space16 from '@/images/gab17.jpeg'
import space17 from '@/images/gab23.jpeg'
import space18 from '@/images/gabD.jpeg'
import space19 from '@/images/gabI.jpeg'
import space20 from '@/images/ent.jpeg'
import space21 from '@/images/balc.jpeg'
import space22 from '@/images/porta.jpeg'



const products = [
  {
    id: 1,
    imageSrc: space8,
    imageAlt: 'space',
  },
  {
    id: 2,
    imageSrc: space18,
    imageAlt: 'space.',
  },
  {
    id: 3,
    imageSrc: space14,
    imageAlt: 'space',
  },
  {
    id: 4,
    imageSrc: space19,
    imageAlt: 'space',
  },
  {
    id: 5,
    imageSrc: space10,
    imageAlt: 'space',
  },
  {
    id: 6,
    imageSrc: space11,
    imageAlt: 'space',
  },
  {
    id: 7,
    imageSrc: space15,
    imageAlt: 'space',
  },
  {
    id: 8,
    imageSrc: space20,
    imageAlt: 'space',
  },
  {
    id: 9,
    imageSrc: space21,
    imageAlt: 'space',
  },
  {
    id: 10,
    imageSrc: space12,
    imageAlt: 'space.',
  },
  {
    id: 11,
    imageSrc: space16,
    imageAlt: 'space',
  },
  {
    id: 12,
    imageSrc: space22,
    imageAlt: 'space',
  },
  {
    id: 13,
    imageSrc: space2,
    imageAlt: 'space',
  },
  {
    id: 14,
    imageSrc: space9,
    imageAlt: 'space',
  },
  {
    id: 15,
    imageSrc: space13,
    imageAlt: 'space',
  },
  {
    id: 16,
    imageSrc: space17,
    imageAlt: 'space',
  },
  {
    id: 17,
    imageSrc: space1,
    imageAlt: 'space',
  },
  {
    id: 18,
    imageSrc: space7,
    imageAlt: 'space',
  },
  {
    id: 19,
    imageSrc: space3,
    imageAlt: 'space',
  },
  {
    id: 20,
    imageSrc: space5,
    imageAlt: 'space',
  },
]

export default function Photos() {
  return (
    <section id="ourspace" aria-label="our space">
      <Container>
        <div className="py-6">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              O nosso <span className="titleWord">centro</span> foi pensado ao
              pormenor para proporcionar conforto e confiança a cada família!
            </h2>
          </div>
          <div className="mx-auto max-w-7xl overflow-hidden px-4 pt-0 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 ">
              {products.map((product) => (
                <a key={product.id} className="group text-sm">
                  <div className="aspect-h-2 aspect-w-2 w-full overflow-hidden  bg-gray-100 group-hover:opacity-75">
                    <Image
                      className="h-full w-full object-cover object-center"
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      priority
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
