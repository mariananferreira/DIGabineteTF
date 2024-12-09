const featuredTestimonial = {
  body: 'Estou tão grata pela ajuda que o meu filho recebeu no gabinete de terapia da fala. Ele tem feito progressos incríveis na comunicação, e isso tem refletido positivamente na sua autoestima e nas suas interacções sociais. A equipa é extremamente qualificada e atenciosa.',
  author: {
    name: 'Maria Silva',
    date: 'setembro 10, 2024',
  },
}

const testimonials = [
  [
    [
      {
        body: 'O espaço é incrível e a equipa é extremamente simpática e atenciosa, estamos muito felizes com os resultados.',
        author: {
          name: 'José Rocha',
          date: 'agosto 15, 2024',
        },
      },
    ],
    [
      {
        body: 'A evolução no meu filho foi visível. Agora ele compreende melhor e fala com clareza. Muito agradecida!',
        author: {
          name: 'Sofia Rodrigues',
          date: 'dezembro 20, 2023',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Com a terapia, o meu filho tornou-se mais expressivo e confiante, especialmente em público.',
        author: {
          name: 'Isabel Santos',
          date: 'setembro 17, 2024',
        },
      },
    ],
    [
      {
        body: 'A evolução do meu filho no gabinete de terapia da fala foi notável. Ele passou de uma criança que mal conseguia comunicar para uma criança que adora conversar. Sou muito grata pelo trabalho que fizeram!',
        author: {
          name: 'Miguel Sousa',
          date: 'junho 5, 2023',
        },
      },
    ],
    
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <section id="Testimonials" aria-label="Testimonials">
      <div className=" py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              As <span className="titleWord">vozes</span> de quem já confia no
              nosso trabalho
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    ★★★★★ <span className="text-green-500">✔️ Verificado</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {featuredTestimonial.author.date}
                  </div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex flex-col gap-y-2">
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-sm text-gray-600">
                          ★★★★★ <span className="text-green-500">✔️ Verificado</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {testimonial.author.date}
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
