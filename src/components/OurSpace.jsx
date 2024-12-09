import Image from 'next/image'
import { Container } from '@/components/Container'
import space1 from '@/images/space1.jpeg'
import space2 from '@/images/space2.jpeg'
import space3 from '@/images/space3.jpeg'
import space4 from '@/images/space4.jpeg'
import space5 from '@/images/space5.jpeg'
import space6 from '@/images/space6.jpeg'
import space7 from '@/images/space7.jpeg'
import space8 from '@/images/gab7.jpeg'

const products = [
  {
    id: 1,
    imageSrc: space1,
    imageAlt: 'space',
  },
  {
    id: 2,
    imageSrc: space2,
    imageAlt: 'space.',
  },
  {
    id: 3,
    imageSrc: space3,
    imageAlt: 'space',
  },
  {
    id: 4,
    imageSrc: space4,
    imageAlt: 'space',
  },
  {
    id: 5,
    imageSrc: space5,
    imageAlt: 'space',
  },
  {
    id: 6,
    imageSrc: space6,
    imageAlt: 'space',
  },
  {
    id: 7,
    imageSrc: space7,
    imageAlt: 'space',
  },
  {
    id: 8,
    imageSrc: space8,
    imageAlt: 'space',
  },
]

export default function Photos() {
  return (
    <section id="ourspace" aria-label="our space">
      <Container>
        <div className="py-16">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              O nosso <span className="titleWord">gabinete</span> foi pensado ao
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
