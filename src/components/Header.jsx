import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { ClockIcon, PhoneIcon } from '@heroicons/react/24/outline'

// Componente para o TopBar
function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsVisible(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 bg-[#e8cfc2] px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } hidden sm:flex`}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-end">
        {/* Horário com ícone de relógio */}
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-5 w-5 text-slate-700" />
          <span>De terça a sábado</span>
        </div>
        {/* Espaçamento entre os itens */}
        <div className="w-4"></div>
        {/* Contacto telefónico */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-5 w-5 text-slate-700" />
          <a href="tel:+351933281493" className="hover:underline">
            +351 933 281 493
          </a>
        </div>
      </div>
    </div>
  );
}



// Componente para Navegação Mobile
function MobileNavLink({ href, children, onClick }) {
  const basePath = "/"; // Substitua pelo caminho base do seu projeto, se necessário
  return (
    <Link
      href={`${basePath}${href}`}
      onClick={onClick}
      className="flex min-h-[48px] w-full items-center justify-center rounded-xl px-3 py-3 text-center hover:bg-[#f8f3f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59]"
    >
      {children}
    </Link>
  )
}


function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 overflow-visible stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button
            className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59]"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <MobileNavIcon open={open} />
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-black/30" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="div"
                className="absolute inset-x-4 top-full mt-2 flex max-h-[calc(100dvh-10rem)] flex-col gap-1 overflow-y-auto overscroll-contain rounded-2xl bg-white p-3 text-base shadow-lg ring-1 ring-black/5"
              >
                <MobileNavLink onClick={() => close()} href="#aboutme">Quem somos</MobileNavLink>
                <MobileNavLink onClick={() => close()} href="#ourteam">Corpo técnico</MobileNavLink>
                <MobileNavLink onClick={() => close()} href="#ourspace">O nosso espaço</MobileNavLink>
                <MobileNavLink onClick={() => close()} href="#parceries">Parcerias</MobileNavLink>
                <MobileNavLink onClick={() => close()} href="#contacts">Contactos</MobileNavLink>
                <MobileNavLink onClick={() => close()} href="#faqs">Perguntas frequentes</MobileNavLink>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

// Cabeçalho Principal

const navigation = [
  ['aboutme', 'Quem somos'],
  ['ourteam', 'Corpo técnico'],
  ['ourspace', 'O nosso espaço'],
  ['parceries', 'Parcerias'],
  ['faqs', 'Perguntas frequentes'],
]

export function Header() {
  const { pathname } = useRouter()
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    let frame
    const update = () => {
      const sections = ['aboutme', 'ourteam', 'ourspace', 'parceries', 'Testimonials', 'contacts', 'faqs']
        .map((id) => document.getElementById(id)).filter(Boolean)
      let active = null
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 140) active = section.id
      }
      if (sections.length && window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        active = sections[sections.length - 1].id
      }
      setActiveSection(active)
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [pathname])

  const [isTopBarVisible, setIsTopBarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTopBarVisible(window.scrollY === 0)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <TopBar />

      <header
        className={clsx(
          'fixed top-0 z-40 w-full bg-[#e8cfc2] px-4 py-4 font-bold shadow-md sm:px-6 lg:px-8',
          'transition-transform duration-300 ease-in-out',
          isTopBarVisible
            ? 'sm:translate-y-[40px]'
            : 'translate-y-0'
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-2">
            <Link href="/" aria-label="Página inicial" className="min-w-0 text-sm sm:text-base">
              <p>Centro Terapêutico DI</p>
            </Link>

            <div className="xl:hidden">
              <MobileNavigation />
            </div>

            <nav aria-label="Navegação principal" className="hidden items-center gap-5 text-sm xl:flex">
              {navigation.map(([id, label]) => (
                <Link key={id} href={`/#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  className={clsx(
                    'inline-flex min-h-[48px] items-center whitespace-nowrap border-b-2 px-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59]',
                    activeSection === id ? 'border-[#936b59] text-[#5b5044]' : 'border-transparent text-slate-700 hover:border-[#b98b76] hover:text-[#5b5044]'
                  )}>
                  {label}
                </Link>
              ))}
              <Link href="/#contacts" aria-current={activeSection === 'contacts' ? 'location' : undefined}
                className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full bg-[#936b59] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#795440] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#936b59]">
                Marcar consulta
              </Link>
            </nav>
          </div>
        </Container>
      </header>
    </>
  )
}



