import Image from 'next/image'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { Container } from '@/components/Container'
import SM from '@/images/balcao.jpeg'

const emptyForm = { from_name: '', reply_to: '', subject: '', message: '', mobile: '' }
const whatsappUrl = 'https://wa.me/351933281493?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20rastreio%20gratuito!'
const mapsUrl = 'https://www.google.com/maps?cid=18401184820317829719'
const fields = [
  { name: 'from_name', label: 'Nome', type: 'text', autoComplete: 'name' },
  { name: 'mobile', label: 'Telemóvel', type: 'tel', autoComplete: 'tel' },
  { name: 'reply_to', label: 'Email', type: 'email', autoComplete: 'email' },
]
const inputClass = 'block min-h-[48px] w-full min-w-0 rounded-xl border-gray-300 px-4 py-3 text-base text-gray-900 shadow-sm focus:border-[#b98b76] focus:ring-[#b98b76] disabled:bg-gray-50'
const linkClass = 'inline-flex min-h-[48px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59]'

export function Contacts() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const sending = useRef(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
    if (status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sending.current) return
    const form = event.currentTarget
    const nextErrors = {}
    for (const name of Object.keys(emptyForm)) {
      if (!formData[name].trim()) nextErrors[name] = 'Preencha este campo.'
    }
    if (formData.reply_to.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to.trim())) {
      nextErrors.reply_to = 'Introduza um email válido.'
    }
    if (formData.mobile.trim() && !/^\+?[\d\s().-]+$/.test(formData.mobile.trim())) {
      nextErrors.mobile = 'Introduza um número de telemóvel válido.'
    } else if (formData.mobile.trim() && (formData.mobile.replace(/\D/g, '').length < 9 || formData.mobile.replace(/\D/g, '').length > 15)) {
      nextErrors.mobile = 'Introduza um número com 9 a 15 algarismos, incluindo o indicativo se necessário.'
    }
    if (formData.message.length > 500) nextErrors.message = 'A mensagem pode ter até 500 caracteres.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('invalid')
      form.elements.namedItem(Object.keys(nextErrors)[0])?.focus()
      return
    }
    sending.current = true
    setStatus('sending')
    try {
      // Keep EmailJS template field names unchanged.
      await emailjs.send('service_yv1x1pd', 'template_0yxclri',
        Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()])),
        '8qY6HCFSONqoQZK3s')
      setFormData(emptyForm)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      sending.current = false
    }
  }

  return (
    <section id="contacts" aria-labelledby="contacts-title" className="py-14 sm:py-16">
      <Container>
        <hr className="mx-auto mb-14 w-3/4 border-t-2 border-[#e8cfc2]" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b98b76]">Contactos</p>
          <h2 id="contacts-title" className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Fale <span className="titleWord">connosco</span> e venha-nos conhecer!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Peça uma consulta ou um rastreio gratuito. Entraremos em contacto para combinar consigo.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <a href="tel:+351933281493" className={`${linkClass} bg-[#b98b76] text-white hover:bg-[#936b59]`}>Ligar · 933 281 493</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-white text-[#936b59] ring-1 ring-[#e8cfc2] hover:bg-[#f8f3f0]`}>
            Falar pelo WhatsApp<span className="sr-only"> (abre num novo separador)</span>
          </a>
        </div>
        <p className="mt-3 text-center text-xs leading-5 text-gray-500">Chamada para rede móvel nacional.</p>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5 lg:grid-cols-3">
          <div className="min-w-0 px-5 py-8 sm:p-10 lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Envie-nos uma mensagem</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">Todos os campos são obrigatórios. O pedido fica sujeito a confirmação pela equipa.</p>
            <form onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'} className="mt-6">
              <fieldset disabled={status === 'sending'} className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                <legend className="sr-only">Dados de contacto e mensagem</legend>
                {fields.map((field) => (
                  <div key={field.name} className={field.name === 'reply_to' ? 'min-w-0 sm:col-span-2' : 'min-w-0'}>
                    <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-gray-900">{field.label}</label>
                    <input name={field.name} type={field.type} autoComplete={field.autoComplete} id={field.name} required inputMode={field.type === 'tel' ? 'tel' : field.type === 'email' ? 'email' : undefined}
                      value={formData[field.name]} onChange={handleChange} className={inputClass}
                      aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />
                    {errors[field.name] && <p id={`${field.name}-error`} className="mt-2 text-sm text-red-700">{errors[field.name]}</p>}
                  </div>
                ))}
                <div className="min-w-0 sm:col-span-2">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900">Assunto</label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClass}
                    aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined}>
                    <option value="">Selecione uma opção</option>
                    <option>Marcar consulta</option><option>Rastreio gratuito</option><option>Outra questão</option>
                  </select>
                  {errors.subject && <p id="subject-error" className="mt-2 text-sm text-red-700">{errors.subject}</p>}
                </div>
                <div className="min-w-0 sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">Mensagem</label>
                  <textarea id="message" name="message" rows={5} maxLength={500} required value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-y`} aria-invalid={Boolean(errors.message)} aria-describedby={`message-count${errors.message ? ' message-error' : ''}`} />
                  <p id="message-count" className="mt-2 text-right text-xs text-gray-500">{formData.message.length}/500 caracteres</p>
                  {errors.message && <p id="message-error" className="mt-2 text-sm text-red-700">{errors.message}</p>}
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button type="submit" disabled={status === 'sending'} className={`${linkClass} w-full bg-[#b98b76] text-white hover:bg-[#936b59] disabled:cursor-wait disabled:opacity-70 sm:w-auto`}>
                    {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'}
                  </button>
                </div>
              </fieldset>
              <div role="status" aria-live="polite" aria-atomic="true" className="mt-4 text-sm leading-6">
                {status === 'success' && <p className="rounded-xl bg-green-50 p-4 text-green-800">Mensagem enviada com sucesso! Entraremos em contacto consigo.</p>}
                {status === 'error' && <p className="rounded-xl bg-red-50 p-4 text-red-800">Não foi possível enviar. A sua mensagem foi mantida. Tente novamente ou contacte-nos por telefone ou WhatsApp.</p>}
                {status === 'invalid' && <p className="text-red-700">Verifique os campos assinalados antes de enviar.</p>}
                {status === 'sending' && <p className="text-gray-600">A enviar a sua mensagem. Aguarde um momento.</p>}
              </div>
            </form>
          </div>

          <aside aria-label="Morada, horário e contactos" className="min-w-0 bg-[#f8f3f0] px-5 py-8 sm:p-10 lg:p-7">
            <Image src={SM} alt="Receção do Centro Terapêutico DI" sizes="(max-width: 1023px) 100vw, 320px" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Venha conhecer-nos</h3>
            <address className="mt-3 text-sm not-italic leading-6 text-gray-600">
              Rua Manuel de Sousa Casal 156<br />Rio Tinto
            </address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center text-sm font-medium text-[#936b59] underline underline-offset-4">Abrir no Google Maps ↗<span className="sr-only"> (abre num novo separador)</span></a>
            <h4 className="mt-5 text-sm font-semibold text-gray-900">Horário</h4>
            <dl className="mt-3 space-y-2 text-sm text-gray-600">
              {[['Segunda', 'Encerrado'], ['Terça a sexta', '09.00 – 19.00'], ['Sábado', '09.00 – 16.00'], ['Domingo', 'Encerrado']].map(([day, hours]) => (
                <div key={day} className="flex flex-wrap justify-between gap-x-3 gap-y-1"><dt>{day}</dt><dd>{hours}</dd></div>
              ))}
            </dl>
            <nav aria-label="Redes sociais" className="mt-6 flex flex-wrap gap-x-4">
              {[['Instagram', 'https://www.instagram.com/centroterapeuticodi/'], ['Facebook', 'https://www.facebook.com/profile.php?id=100090192008423'], ['LinkedIn', 'https://www.linkedin.com/company/gabinete-terapia-da-fala-di/']].map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center text-sm text-[#936b59] underline-offset-4 hover:underline">{label}<span className="sr-only"> (abre num novo separador)</span></a>
              ))}
            </nav>
            <div className="mt-6 border-t border-[#e8cfc2] pt-5 text-xs leading-6 text-gray-600">
              <h4 className="font-semibold text-gray-900">Informação legal</h4>
              <p>Certidão de Registo: E179175</p>
              <p>Licença de Funcionamento: 26245/2025</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
