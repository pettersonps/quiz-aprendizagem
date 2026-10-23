import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

/**
 * Modal de confirmação para descartar as respostas.
 * @param {{ onConfirm: () => void, onCancel: () => void }} props
 */
export default function ConfirmModal({ onConfirm, onCancel }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onCancel()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onCancel])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      aria-describedby="confirm-desc"
    >
      <div className="animate-fade-up w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
          <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
        </div>
        <h2 id="confirm-title" className="text-xl font-bold text-slate-900">
          Descartar respostas?
        </h2>
        <p id="confirm-desc" className="mt-2 text-[15px] leading-relaxed text-slate-600">
          Ao voltar para o início, todas as suas respostas e o resultado serão descartados. Essa
          ação não pode ser desfeita.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="min-h-12 rounded-xl bg-rose-600 px-4 font-bold text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
          >
            Descartar e voltar ao início
          </button>
          <button
            type="button"
            onClick={onCancel}
            autoFocus
            className="min-h-12 rounded-xl border-2 border-slate-300 bg-white px-4 font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
