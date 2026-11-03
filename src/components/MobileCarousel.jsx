import { useRef, useState } from 'react'

export function MobileCarousel({ id, label, count, desktopClassName, children }) {
  const listRef = useRef(null)
  const [index, setIndex] = useState(0)

  const updateIndex = () => {
    const list = listRef.current
    const start = list.children[0]?.offsetLeft || 0
    let closest = 0
    Array.from(list.children).forEach((item, position) => {
      if (Math.abs(item.offsetLeft - start - list.scrollLeft) <
          Math.abs(list.children[closest].offsetLeft - start - list.scrollLeft)) closest = position
    })
    setIndex(closest)
  }

  const navigate = (nextIndex) => {
    const list = listRef.current
    const item = list?.children[nextIndex]
    if (!item) return
    list.scrollTo({
      left: item.offsetLeft - list.children[0].offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
      <p id={`${id}-help`} className="mb-4 text-center text-sm text-gray-500 sm:hidden">
        Deslize para {label}.
      </p>
      <ul
        id={id}
        ref={listRef}
        role="list"
        aria-label={label}
        aria-describedby={`${id}-help`}
        tabIndex={0}
        onScroll={updateIndex}
        className={`mobile-card-carousel relative flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-1 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#936b59] sm:overflow-visible ${desktopClassName}`}
      >
        {children}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-5 sm:hidden">
        <button type="button" onClick={() => navigate(index - 1)} disabled={index === 0}
          aria-label="Cartão anterior" aria-controls={id}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#936b59] ring-1 ring-[#e8cfc2] disabled:opacity-30">←</button>
        <p aria-live="polite" aria-atomic="true" className="min-w-[5rem] text-center text-sm text-gray-600">{index + 1} / {count}</p>
        <button type="button" onClick={() => navigate(index + 1)} disabled={index === count - 1}
          aria-label="Cartão seguinte" aria-controls={id}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#936b59] ring-1 ring-[#e8cfc2] disabled:opacity-30">→</button>
      </div>
    </div>
  )
}
