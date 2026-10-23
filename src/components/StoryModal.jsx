import { useEffect, useRef, useState } from 'react'
import { Download, Loader2, X } from 'lucide-react'
import StoryCard from './StoryCard'
import { downloadNodeAsPng } from '../lib/exportImage'

const CARD_W = 360
const CARD_H = 640

/**
 * Modal com prévia do cartão 9:16 e botão para baixar o PNG.
 * Mantém uma cópia fora da tela em tamanho nativo para a captura.
 * @param {{ data: { results: Array, top: object }, onClose: () => void }} props
 */
export default function StoryModal({ data, onClose }) {
  const captureRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const fit = () => {
      const s = Math.min(1, (window.innerWidth - 48) / CARD_W, (window.innerHeight * 0.68) / CARD_H)
      setScale(Math.max(0.4, s))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleDownload = async () => {
    setBusy(true)
    setError('')
    try {
      await downloadNodeAsPng(captureRef.current, 'meu-perfil-pedagogico.png')
    } catch {
      setError('Não foi possível gerar a imagem. Tente novamente.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 overflow-y-auto bg-slate-900/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Prévia do cartão para Stories"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className="overflow-hidden rounded-2xl shadow-2xl"
        style={{ width: CARD_W * scale, height: CARD_H * scale }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: CARD_W, height: CARD_H }}>
          <StoryCard results={data.results} top={data.top} />
        </div>
      </div>

      <div style={{ position: 'fixed', left: -10000, top: 0 }} aria-hidden="true">
        <StoryCard ref={captureRef} results={data.results} top={data.top} />
      </div>

      {error && <p className="text-sm font-semibold text-rose-200" role="alert">{error}</p>}

      <button
        type="button"
        onClick={handleDownload}
        disabled={busy}
        className="flex min-h-14 w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white px-5 font-bold text-indigo-800 shadow-lg hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:opacity-70"
      >
        {busy ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Download className="h-5 w-5" aria-hidden="true" />}
        {busy ? 'Gerando imagem…' : 'Salvar Imagem dos Stories'}
      </button>
    </div>
  )
}
