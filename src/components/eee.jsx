const faqs = [
    {
      id: 1,
      question: 'O Gabinete DI trabalha com o SNS ou a Segurança Social?',
      answer:
        'Sim, o nosso gabinete auxilia os pais no processo de submissão dos documentos necessários para o Subsídio de Educação Especial, no entanto, os mesmos terão de antecipar o pagamento das consultas a privado durante o período de aceitação do pedido e do respetivo envio do subsídio. Assim que o apoio for dispensado, a criança poderá usufruir dessas consultas.',
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
    {
      id: 4,
      question: 'Trabalham com adultos?',
      answer:
        ' Depende do diagnóstico. Casos associados à alimentação como disfagia e défices musculares faciais graves, como paralisias faciais, não são acompanhados no nosso gabinete. No entanto, se o caso estiver associado à linguagem, como a afasia, e verificarmos junto do paciente e da família que possuímos os conhecimentos necessários e que temos capacidade de o acompanhar corretamente, é possível. É de salientar que, caso as nossas Terapeutas da Fala sintam que não dispõem das condições necessárias para realizar a intervenção, os pacientes são sempre encaminhados para um profissional de confiança. Todas as crianças e adultos que recorrem ao Gabinete DI nunca saem sem auxílio ou orientação.',
    },
  ]
  
  export default function FAQs() {
    return (
      <section id="faqs" aria-label="frequent questions">
        <div className="sm:py-25 mx-auto max-w-7xl px-6 lg:px-8">
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
  