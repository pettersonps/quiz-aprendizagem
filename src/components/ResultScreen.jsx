import { useMemo } from 'react'
import { BookOpen, Lightbulb, RotateCcw, Share2, ShieldCheck, Star, Target } from 'lucide-react'
import { computeResults } from '../lib/scoring'
import { REFLECTION } from '../data/theories'

/**
 * Tela 3 – Resultado detalhado, com caixas proporcionais à porcentagem.
 * @param {{
 *   answers: string[],
 *   onRestart: () => void,
 *   onOpenGuide: () => void,
 *   onShare: (data: { results: Array, top: object }) => void,
 * }} props
 */
export default function ResultScreen({ answers, onRestart, onOpenGuide, onShare }) {
  const data = useMemo(() => computeResults(answers), [answers])
  const { results, top } = data

  return (
    <section className="animate-fade-up flex flex-col gap-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Seu resultado
        </p>
        <h2 className="mt-1 text-2xl font-extrabold leading-tight text-slate-900">
          Predomínio: {top.name}
        </h2>
        <p className="mt-1 text-slate-600">{top.tagline}</p>
      </header>

      <div
        className="flex h-16 w-full gap-1 overflow-hidden rounded-2xl"
        role="img"
        aria-label={results.map((r) => `${r.short} ${r.percent}%`).join(', ')}
      >
        {results.map((r) => (
          <div
            key={r.key}
            className="flex min-w-0 items-center justify-center text-xs font-bold text-white"
            style={{ flexGrow: r.percent, flexBasis: 0, backgroundColor: r.hex }}
          >
            {r.percent >= 8 ? `${r.percent}%` : ''}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {results.map((r, i) => (
          <TheoryBox key={r.key} theory={r} isTop={i === 0} />
        ))}
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h3 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
          <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden="true" />
          {REFLECTION.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-slate-700">{REFLECTION.text}</p>
        <p className="mt-3 text-[15px] font-medium leading-relaxed text-indigo-800">
          {REFLECTION.cta}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => onShare(data)}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 font-bold text-white shadow-md transition active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300"
        >
          <Share2 className="h-5 w-5" aria-hidden="true" />
          Compartilhar Resultado (Story 9:16)
        </button>
        <button
          type="button"
          onClick={onOpenGuide}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-indigo-600 bg-white px-4 font-bold text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
        >
          <BookOpen className="h-5 w-5" aria-hidden="true" />
          Acessar Infoguia Pedagógico Completo
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-slate-800 px-4 font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          Novo Quiz
        </button>
      </div>
    </section>
  )
}

function TheoryBox({ theory: t, isTop }) {
  const minHeight = 90 + t.percent * 4
  const numberSize = 2 + Math.min(t.percent, 60) / 30

  return (
    <article
      className={`rounded-3xl border-2 p-5 ${t.bg} ${t.border} ${isTop ? 'shadow-lg ring-4 ring-offset-2' : 'shadow-sm'}`}
      style={{ minHeight, ...(isTop ? { '--tw-ring-color': t.hex } : {}) }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className={`font-extrabold leading-tight ${t.text}`} style={{ fontSize: `${1 + t.percent / 100}rem` }}>
            {t.name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {isTop && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-bold text-white">
                <Star className="h-3 w-3" aria-hidden="true" /> Predominante
              </span>
            )}
            {t.official && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-800 ring-1 ring-slate-300">
                <ShieldCheck className="h-3 w-3 text-emerald-600" aria-hidden="true" /> Teoria Oficial do PPP
              </span>
            )}
          </div>
        </div>
        <span className="font-black leading-none" style={{ color: t.hex, fontSize: `${numberSize}rem` }}>
          {t.percent}%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/80" aria-hidden="true">
        <div className="h-full rounded-full" style={{ width: `${t.percent}%`, backgroundColor: t.hex }} />
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-slate-800">{t.explanation}</p>

      <dl className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
        <div>
          <dt className={`flex items-center gap-1.5 font-bold ${t.text}`}>
            <Target className="h-4 w-4" aria-hidden="true" /> Foco
          </dt>
          <dd>{t.foco}</dd>
        </div>
        <div>
          <dt className={`flex items-center gap-1.5 font-bold ${t.text}`}>
            <Star className="h-4 w-4" aria-hidden="true" /> Ponto forte
          </dt>
          <dd>{t.pontoForte}</dd>
        </div>
        <div>
          <dt className={`flex items-center gap-1.5 font-bold ${t.text}`}>
            <Lightbulb className="h-4 w-4" aria-hidden="true" /> Dica de ouro
          </dt>
          <dd>{t.dica}</dd>
        </div>
      </dl>
    </article>
  )
}
