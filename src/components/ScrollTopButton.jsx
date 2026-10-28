import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Botão flutuante "voltar ao topo": aparece (com animação) só depois de rolar a página.
 */
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo da página"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 ease-out hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 ${
        visible ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-6 scale-75 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
