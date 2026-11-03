import { MobileCarousel } from '@/components/MobileCarousel'

const googleMapsUrl =
  'https://www.google.com/maps/place/Centro+Terap%C3%AAutico+DI/@41.1765243,-8.5559812,605m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd246389310fa803:0xff5e2419b55aba57!8m2!3d41.1765243!4d-8.5534063!16s%2Fg%2F11sslc02wr'

// Review texts supplied by the site owner from Google Maps; manually maintained.
const testimonials = [
  {
    author: 'Dora Sofia Bastos da Silva',
    body: 'Estamos muito gratos pelo trabalho desenvolvido, pelo profissionalismo e cuidado demonstrado em cada sessão. Somos de SMFeira, mas cada km percorrido foi recebido a dobrar com algo que não é mensurável. GRATIDÃO pela ajuda recebida 🤍',
  },
  {
    author: 'Soraia Gomes',
    body: 'O profissionalismo, dedicação e abordagem acolhedora e empática demonstram um verdadeiro compromisso com o desenvolvimento e bem-estar de todos os meninos (e suas famílias) que frequentam o espaço! Parabéns Débora e Inês, por todo o cuidado exímio neste projeto especial!',
  },
  {
    author: 'Joana Ramos',
    body: 'Excelentes profissionais. Não importa apenas ter formação, é necessário ter vocação, e sem dúvida alguma que a Dra Inês nasceu para lidar com crianças. Um muito obrigada por todo o profissionalismo, cuidado e amor.',
  },
  {
    author: 'Ana Silva',
    body: 'Recomendo, terapeutas muito profissionais e dedicadas, espaço acolhedor!',
  },
  {
    author: 'Salomé Cruz de Sá',
    body: 'Equipa muito profissional e atenciosa, recomendo muito!!',
  },
]

export default function Testimonials() {
  return (
    <section
      id="Testimonials"
      aria-labelledby="testimonials-title"
      className="py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="mx-auto mb-14 w-3/4 border-t-2 border-[#e8cfc2]" />

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">
            Testemunhos
          </p>
          <h2
            id="testimonials-title"
            className="sectionTitles text-3xl tracking-tight sm:text-3xl"
          >
            As <span className="titleWord">vozes</span> de quem já confia no
            nosso trabalho
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Cada família tem uma história. Conheça as experiências de quem já
            passou pelo nosso centro.
          </p>
        </div>

        <MobileCarousel
          id="testimonial-cards"
          label="ler os testemunhos"
          count={testimonials.length}
          desktopClassName="sm:flex-wrap sm:justify-center"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.author} className="flex w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
              <figure className="flex w-full flex-col rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[#936b59]">
                  Avaliação no Google
                </p>
                <blockquote className="flex-1 whitespace-pre-wrap text-left text-base leading-7 text-gray-700">
                  <p>{testimonial.body}</p>
                </blockquote>
                <figcaption className="mt-7 border-t border-[#f0e5de] pt-5 text-left">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-[#936b59] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59]"
                  >
                    Consultar ficha no Google ↗
                    <span className="sr-only"> (abre num novo separador)</span>
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </MobileCarousel>

        <div className="mt-8 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#b98b76] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#936b59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59]"
          >
            Consultar avaliações no Google ↗
            <span className="sr-only"> (abre num novo separador)</span>
          </a>

        </div>
      </div>
    </section>
  )
}
