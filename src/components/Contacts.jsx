import Image from 'next/image'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container } from '@/components/Container'
import SM from '@/images/space1.jpeg'

export function Contacts() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
    mobile: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { from_name, reply_to, subject, message, mobile } = formData
    if (
      from_name.trim() === '' ||
      reply_to.trim() === '' ||
      subject.trim() === '' ||
      message.trim() === '' ||
      mobile.trim() === ''
    ) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    emailjs
      .sendForm(
        'service_yv1x1pd',
        'template_0yxclri',
        e.target,
        '8qY6HCFSONqoQZK3s'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success('Email enviado com sucesso!')
        },
        (error) => {
          console.log(error.text)
          toast.error('Erro ao enviar o email. Por favor, tente novamente.')
        }
      )

    setFormData({
      from_name: '',
      reply_to: '',
      subject: '',
      message: '',
      mobile: '',
    })
  }
  return (
    <section id="contacts" aria-label="">
      <Container>
        <div className="py-6">
          <div className="mb-12 mt-12 first-letter:max-w-2xl md:mx-auto md:text-center xl:max-w-none">
            <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

            <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
              Fale <span className="titleWord">connosco</span> e venha-nos
              conhecer!
            </h2>
            <p className="text mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Marque connosco a sua consulta ou rastreio gratuito, utilizando o
              formulário abaixo. Responderemos com a maior brevidade!
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="secondary relative overflow-hidden px-6 py-10 sm:px-10 xl:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* <h3 className="text-center text-lg text-white sm:text-2xl">
                  Contacte-nos por via telefónica, através do 933 281 493, ou
                  pelas redes sociais
                </h3> */}
                  {/* <div className="socialMedia sm:col-span-2 sm:flex">
                  <ul role="list" className="socialMedia mt-8 flex space-x-12">
                    <li>
                      <a
                        className=" hover:text-indigo-100"
                        href="https://api.whatsapp.com/send?phone=933281493&text=Olá, Gostaria de marcar um rastreio gratuito!"
                        target="blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Whatsapp</span>
                        <svg
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-indigo-100"
                        href="https://m.me/Gabinetetf.di"
                        target="blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">messenger</span>
                        <svg
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />{' '}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-indigo-100"
                        href="https://www.instagram.com/gabinetetf.di/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div> */}
                  <Image
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src={SM}
                    alt=""
                    priority
                  />
                  <div className="contactAlign">
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z" />
                    </svg>
                    <p className="address">
                      Rua Manuel de Sousa casal 156 <br />
                      Rio Tinto
                      
                    </p>

                    <ul className="mt-10">
                      <li className="flex items-center">
                        <svg
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="mr-2" // Margem à direita para espaçar o ícone do texto
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l4.25 2.52.75-1.23-3.5-2.09z" />
                        </svg>
                        <p className="address">Horário</p>
                      </li>
                    </ul>

                    <table className="scheduleTable">
                      <tbody>
                        <tr>
                          <td>Segunda</td>
                          <td>Encerrado</td>
                        </tr>
                        <tr>
                          <td>Terça</td>
                          <td>09.00 - 19.00</td>
                        </tr>
                        <tr>
                          <td>Quarta</td>
                          <td>09.00 - 19.00</td>
                        </tr>
                        <tr>
                          <td>Quinta</td>
                          <td>09.00 - 19.00</td>
                        </tr>
                        <tr>
                          <td>Sexta</td>
                          <td>09.00 - 19.00</td>
                        </tr>
                        <tr>
                          <td>Sábado</td>
                          <td>09.00 - 16.00</td>
                        </tr>
                        <tr>
                          <td>Domingo</td>
                          <td>Encerrado</td>
                        </tr>
                      </tbody>
                    </table>

                    <ul className="mobileIcon mt-10">
                      <li>
                        <span className="sr-only">call</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-phone-call"
                        >
                          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </li>
                      <a href="tel:933281493">
                        <p className="mobileNumber text-center text-lg sm:text-xl">
                          +351 933 281 493
                        </p>
                      </a>
                    </ul>
                    <p className="mobileNumber text-center text-sm sm:text-xs">
                      (Chamada para rede móvel nacional)
                    </p>
                  </div>
                </div>

                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                  <form
                    onSubmit={handleSubmit}
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nome
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="from_name"
                          id="from_name"
                          required
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          value={formData.from_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Telemóvel
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          required
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="reply_to"
                          id="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          value={formData.reply_to}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Assunto
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          required
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Mensagem
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 caracteres.
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          aria-describedby="message-max"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="secondary mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium  shadow-sm hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                      >
                        Enviar
                      </button>
                      <ToastContainer />
                    </div>
                  </form>
                  {/* <h3 className="text-center text-lg text-white sm:text-2xl">
                  Contacte-nos por via telefónica, através do 933 281 493, ou
                  pelas redes sociais
                </h3> */}
                  <div className="socialMedia sm:col-span-2 sm:flex">
                    <ul
                      role="list"
                      className="socialMedia mt-8 flex space-x-12"
                    >
                      <li>
                        <a
                          className=" hover:text-indigo-100"
                          href="https://api.whatsapp.com/send?phone=933281493&text=Olá, Gostaria de marcar um rastreio gratuito!"
                          target="blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Whatsapp</span>
                          <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-indigo-100"
                          href="https://www.facebook.com/profile.php?id=100090192008423"
                          target="blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">facebook</span>
                          <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-indigo-100"
                          href="https://www.instagram.com/centroterapeuticodi/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Instagram</span>
                          <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className=" hover:text-indigo-100"
                          href="https://www.linkedin.com/company/gabinete-terapia-da-fala-di/?originalSubdomain=pt"
                          target="blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">linkedin</span>
                          <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
