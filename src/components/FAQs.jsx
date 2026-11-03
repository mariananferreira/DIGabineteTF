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
    question: 'O vosso centro trabalha com a Segurança Social?',
    answer:
      'Não, o nosso Centro não auxilia no processo de colocação do subsídio de educação especial e/ou bonificação. Contudo fornecemos a documentação necessária para que as famílias o possam fazer.',
  },
  {
    question: 'O Centro Terapêutico DI tem acordo com algum seguro ou ADSE?',
    answer:
      'Não temos nenhum acordo direto, no entanto, se a apólice do seguro assim o permitir poderão submeter as faturas ao seguro para possível reembolso. Esta submissão da fatura, ocorre de igual forma na ADSE.',
  },
  {
    question: 'O vosso centro trabalha com crianças com Espectro do Autismo?',
    answer:
      ' Sim, trabalhamos com meninos com esses diagnósticos e/ou com qualquer outro diagnóstico cujas dificuldades sejam ao nível da Comunicação, Relação, Linguagem, Fala e Leitura e Escrita. Todas estas dificuldades são abrangidas nas nossas especializações.',
  },
  {
    question: 'Trabalham com adultos?',
    answer:
      ' Depende do diagnóstico. Casos associados à alimentação como disfagia e défices musculares faciais graves, como paralisias faciais, não são acompanhados no nosso centro. No entanto, se o caso estiver associado à linguagem, como a afasia, e verificarmos junto do paciente e da família que possuímos os conhecimentos necessários e que temos capacidade de o acompanhar corretamente, é possível. É de salientar que, caso as nossas Terapeutas da Fala sintam que não dispõem das condições necessárias para realizar a intervenção, os pacientes são sempre encaminhados para um profissional de confiança. Todas as crianças e adultos que recorrem ao O Centro Terapêutico DI nunca saem sem auxílio ou orientação.',
  },

  // More questions...
]

export default function FAQs() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="py-14 sm:py-16">
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center">
            <hr className="mx-auto mb-10 w-3/4 border-t-2 border-[#e8cfc2]" />

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">
              Perguntas frequentes
            </p>
            <h2 id="faqs-title" className="sectionTitles mx-auto max-w-3xl text-3xl tracking-tight sm:text-3xl">
              Perguntas <span className="titleWord">comuns</span> respostas
              simples
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
              Tem uma questão diferente das mencionadas? Envie a sua dúvida{' '}
              <a
                href="#contacts"
                className="font-medium text-[#936b59] underline underline-offset-4 hover:text-[#5b5044] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#936b59]"
              >
                através do formulário de contacto
              </a>{' '}
              e entraremos em contacto consigo com a maior brevidade.
            </p>
            <dl className="mx-auto mt-8 max-w-4xl space-y-4 text-left sm:mt-12">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex min-h-[56px] w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-gray-900 transition-colors hover:bg-[#f8f3f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#936b59] sm:px-6">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8f3f0] text-[#936b59]">
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
                      <Disclosure.Panel as="dd" className="px-5 pb-6 sm:px-6">
                        <p className="border-t border-[#f0e5de] pt-4 text-left text-base leading-7 text-gray-600">
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
