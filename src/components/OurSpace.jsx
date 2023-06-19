import Image from 'next/image'
import { Container } from '@/components/Container'
import space1 from '@/images/space1.jpeg'
import space2 from '@/images/space2.jpeg'
import space3 from '@/images/space3.jpeg'
import space4 from '@/images/space4.jpeg'
import space5 from '@/images/space5.jpeg'
import space6 from '@/images/space6.jpeg'
import space7 from '@/images/space7.jpeg'
import space8 from '@/images/space8.jpeg'

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
    <Container>
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
          O nosso espaço
        </h2>

        <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Venha conhecer o nosso gabinete em Baguim do Monte.
        </p>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
    </Container>
  )
}
