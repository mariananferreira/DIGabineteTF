import { Container } from '@/components/Container'

export function AboutMe() {
  return (
    <section id="aboutme" aria-label="Sobre nós" className="primaryBack py-16">
      <Container className="relative">
        <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Quem <span className="titleWord">somos</span> ?
          </h2>
        </div>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="text mx-auto max-w-2xl space-y-8 px-6 text-center leading-relaxed">
            <p>
              O Gabinete DI é um Gabinete de Terapia da Fala, sediado em Baguim
              do Monte, Gondomar, que nasceu com um propósito especial. Enquanto
              amigas e colegas de trabalho, somos duas profissionais que
              decidiram abraçar uma nova aventura e criar um espaço no qual
              possamos exercer aquilo que mais gostamos e ajudar crianças e
              famílias que necessitem de apoio na valência de Terapia da Fala
              para o seu bom desenvolvimento!
            </p>
            <p>
              No nosso gabinete, priorizamos o atendimento pediátrico e
              procuramos oferecer um serviço de qualidade excecional, adaptado
              às necessidades específicas de cada paciente, tendo em
              consideração a sua individualidade. A nossa abordagem passa ainda
              por integrar e trabalhar de perto com as famílias, de forma a
              incentivar a participação ativa e o envolvimento das mesmas no
              decorrer da intervenção.
            </p>
            <p>
              A nossa área de especialização estende-se a Perturbações da
              Comunicação, Linguagem e Fala e à intervenção com o diagnóstico de
              Autismo, não esquecendo a vasta experiência em intervenção com
              crianças com Perturbações da Leitura e da Escrita.
            </p>
            <p>
              Explore as opções de serviços que oferecemos e descubra de que
              forma o(a) podemos ajudar!
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
