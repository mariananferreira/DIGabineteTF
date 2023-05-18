const faqs = [
  {
    id: 1,
    question: 'O Gabinete DI trabalha com o SNS ou a Segurança Social?',
    answer:
      'Não, nós trabalhamos de forma privada. No entanto, podemos auxiliar na colocação dos papéis para o “Bonificado”. Esta trata-se de um apoio da Segurança Social que é acrescentado ao abono de família. Assim como todos os apoios é necessária aprovação da Segurança Social, o que demora algum tempo. Não é um apoio que paga as consultas na totalidade, trata-se de uma ajuda aos pais para o pagamento das consultas. Não trabalhamos com Subsídio de Educação Especial.',
  },

  {
    id: 2,
    question: 'O Gabinete DI tem acordo com algum seguro?',
    answer:
      'Não temos nenhum acordo direto, no entanto, se a apólice do seguro assim o permitir, poderão submeter as faturas ao seguro para possível reembolso.',
  },
  {
    id: 3,
    question: 'O vosso Gabinete trabalha com crianças com Espectro do Autismo?',
    answer:
      ' Sim, trabalhamos com meninos com esses diagnósticos e/ou com qualquer outro diagnóstico cujas dificuldades sejam ao nível da Comunicação, Relação, Linguagem, Fala e Leitura e Escrita. Todas estas dificuldades são abrangidas nas nossas especializações.',
  },
]

export default function FAQs() {
  return (
    <section id="faqs" aria-label="frequent questions">

    <div className="mx-auto max-w-7xl px-6 sm:py-25 lg:px-8">
      <div className="max-w-2xl md:text-center xl:max-w-none">
        <h2 className="primaryColor sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Tem uma questão diferente das mencionadas? Envie a sua dúvida{' '}
          <a
            href="#contacts"
            className="primaryColor text-bold font-semibold hover:text-rose-100"
          >
            através do formulário de contacto,
          </a>{' '}
           que entraremos em contacto consigo com a maior brevidade.
        </p>
      </div>

      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </section>

  )
}
