import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Quanto tempo demora um rastreio?',
    answer:
      'O rastreio tem um tempo estimado de 30 minutos, contudo este tempo não é exaustivo sendo adaptado a cada caso.',
  },
  {
    question: 'O Centro Terapêutico DI trabalha com o SNS?',
    answer:
      'Não, o nosso centro não tem acordo com o Sistema Nacional de Saúde (P1).',
  },
  {
    question: 'O vosso Centro trabalha com a Segurança Social?',
    answer:
      'Não, o nosso Centro não auxilia no processo de colocação do subsídio de educação especial e/ou bonificação. Contudo fornecemos a documentação necessária para que as famílias o possam fazer.',
  },
  {
    question: 'O O Centro Terapêutico DI tem acordo com algum seguro ou ADSE?',
    answer:
      'Não temos nenhum acordo direto, no entanto, se a apólice do seguro assim o permitir poderão submeter as faturas ao seguro para possível reembolso. Esta submissão da fatura, ocorre de igual forma na ADSE.',
  },
  {
    question: 'O vosso Centro trabalha com crianças com Espectro do Autismo?',
    answer:
      ' Sim, trabalhamos com meninos com esses diagnósticos e/ou com qualquer outro diagnóstico cujas dificuldades sejam ao nível da Comunicação, Relação, Linguagem, Fala e Leitura e Escrita. Todas estas dificuldades são abrangidas nas nossas especializações.',
  },
  {
    question: 'Trabalham com adultos?',
    answer:
      ' Depende do diagnóstico. Casos associados à alimentação como disfagia e défices musculares faciais graves, como paralisias faciais, não são acompanhados no nosso Centro. No entanto, se o caso estiver associado à linguagem, como a afasia, e verificarmos junto do paciente e da família que possuímos os conhecimentos necessários e que temos capacidade de o acompanhar corretamente, é possível. É de salientar que, caso as nossas Terapeutas da Fala sintam que não dispõem das condições necessárias para realizar a intervenção, os pacientes são sempre encaminhados para um profissional de confiança. Todas as crianças e adultos que recorrem ao O Centro Terapêutico DI nunca saem sem auxílio ou orientação.',
  },

  // More questions...
]

export default function FAQs() {
  return (
    <section id="faqs" aria-label="frequent questions">
      <div className="py-6">
        <div className="sm:py-25 mx-auto max-w-7xl px-6 pb-10 lg:px-8">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Perguntas <span className="titleWord">comuns</span> respostas
              simples
            </h2>
            <p className=" text mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Tem uma questão diferente das mencionadas? Envie a sua dúvida{' '}
              <a
                href="#contacts"
                className="primaryColor text-bold font-semibold hover:text-rose-100"
              >
                através do formulário de contacto
              </a>{' '}
              e entraremos em contacto consigo com a maior brevidade.
            </p>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-justify text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
