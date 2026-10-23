import { useState } from 'react'
import { ArrowLeft, ChevronDown, ShieldCheck } from 'lucide-react'
import { GUIDE_ORDER, THEORIES } from '../data/theories'

const FIELDS = [
  ['foco', 'Foco da Teoria'],
  ['autores', 'Principais Autores'],
  ['aprendizagem', 'Concepção de Aprendizagem'],
  ['estrategias', 'Estratégias Didáticas Condizentes'],
  ['recursos', 'Recursos Pedagógicos Recomendados'],
  ['papel', 'Postura/Papel do Docente'],
]

/**
 * Tela 4 – Infoguia Pedagógico (accordion com as 5 teorias).
 * @param {{ onBack: () => void, backLabel: string, highlight?: string }} props
 */
export default function GuideScreen({ onBack, backLabel, highlight }) {
  const [open, setOpen] = useState(highlight || GUIDE_ORDER[0])

  return (
    <section className="animate-fade-up flex flex-col gap-5">
      <button
        type="button"
        onClick={onBack}
        className="flex min-h-11 w-fit items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {backLabel}
      </button>

      <header>
        <h2 className="text-2xl font-extrabold text-slate-900">Infoguia Pedagógico</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          Panorama comparativo de cinco grandes teorias da aprendizagem, elaborado pelos
          licenciandos de História da UNIVALI como produto extensionista, articulado à disciplina
          Psicologia da Aprendizagem e do Desenvolvimento, para o corpo docente da Escola Básica
          João Paulo II.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        {GUIDE_ORDER.map((key) => {
          const t = THEORIES[key]
          const isOpen = open === key
          return (
            <div key={key} className={`overflow-hidden rounded-2xl border-2 bg-white ${isOpen ? t.border : 'border-slate-200'}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : key)}
                aria-expanded={isOpen}
                aria-controls={`guide-${key}`}
                className={`flex w-full items-center gap-3 p-4 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-indigo-300 ${isOpen ? t.bg : ''}`}
              >
                <span className="h-10 w-2 shrink-0 rounded-full" style={{ backgroundColor: t.hex }} aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-bold leading-tight text-slate-900">{t.name}</span>
                  {t.official && (
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                      <ShieldCheck className="h-3 w-3" aria-hidden="true" /> Teoria Oficial do PPP da Escola
                    </span>
                  )}
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {isOpen && (
                <dl id={`guide-${key}`} className="space-y-4 px-4 pb-5 pt-2 text-[15px] leading-relaxed text-slate-700">
                  {FIELDS.map(([field, label]) => (
                    <div key={field}>
                      <dt className={`text-sm font-bold uppercase tracking-wide ${t.text}`}>{label}</dt>
                      <dd className="mt-0.5">{t.guide[field]}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={onBack}
        className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 font-bold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {backLabel}
      </button>
    </section>
  )
}
