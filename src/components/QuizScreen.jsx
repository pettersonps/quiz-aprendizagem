import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Home } from 'lucide-react'
import { QUESTIONS } from '../data/questions'

/**
 * Tela 2 – Quiz (uma pergunta por vez, com navegação livre).
 * @param {{
 *   index: number,
 *   answers: string[],
 *   onSelect: (key: string) => void,
 *   onBack: () => void,
 *   onNext: () => void,
 *   onFinish: () => void,
 *   onExit: () => void,
 * }} props
 */
export default function QuizScreen({ index, answers, onSelect, onBack, onNext, onFinish, onExit }) {
  const question = QUESTIONS[index]
  const total = QUESTIONS.length
  const selected = answers[index]
  const isLast = index === total - 1
  const progress = ((index + 1) / total) * 100

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index])

  return (
    <section key={question.id} className="animate-fade-up flex flex-col gap-5">
      <button
        type="button"
        onClick={onExit}
        className="flex min-h-11 w-fit items-center gap-2 rounded-xl px-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
        Voltar ao início
      </button>

      <div>
        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-600">
          <span>
            Pergunta {index + 1} de {total}
          </span>
          <span className="text-indigo-700">{question.topic}</span>
        </div>
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Progresso do quiz"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold leading-snug text-slate-900">{question.text}</h2>

      {/* Alternativas */}
      <div role="radiogroup" aria-label={question.text} className="flex flex-col gap-3">
        {question.options.map((opt) => {
          const active = selected === opt.key
          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(opt.key)}
              className={`flex min-h-16 items-start gap-3 rounded-2xl border-2 p-4 text-left text-[15px] leading-snug transition focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:scale-[0.99] ${
                active
                  ? 'border-indigo-600 bg-indigo-50 text-slate-900 shadow-md'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  active ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
                aria-hidden="true"
              >
                {active ? <Check className="h-4 w-4" /> : opt.key}
              </span>
              <span>{opt.text}</span>
            </button>
          )
        })}
      </div>

      {/* Navegação */}
      <div className="sticky bottom-0 -mx-4 flex gap-3 border-t border-slate-200 bg-slate-100/95 px-4 py-3 backdrop-blur">
        {index > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-4 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar
          </button>
        )}

        {isLast ? (
          <button
            type="button"
            onClick={onFinish}
            disabled={!selected}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-center font-bold text-white transition enabled:hover:bg-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            Confirmar Respostas e Ver Resultado
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={!selected}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 font-bold text-white transition enabled:hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Próxima
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}
