import Link from 'next/link'

export function NavLink({ href, children }) {
  const basePath = '/' // Substitua pelo caminho base do seu projeto, se necessário
  return (
    <Link
      href={`${basePath}${href}`}
      className="text-slate-700 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
