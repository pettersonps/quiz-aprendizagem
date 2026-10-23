import { BookOpen, ClipboardList, GraduationCap, Play } from 'lucide-react'

/**
 * Tela 1 – Boas-vindas.
 * @param {{ onStart: () => void, onOpenGuide: () => void }} props
 */
export default function HomeScreen({ onStart, onOpenGuide }) {
  return (
    <section className="animate-fade-up flex flex-col gap-6">
      <p className="flex items-start gap-2 text-xs leading-snug text-slate-500">
        <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          UNIVALI - Laboratório de Práticas Educativas e Extensão II | E. B. João Paulo II
        </span>
      </p>

      <div className="rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 p-6 text-white shadow-lg">
        <h1 className="text-3xl font-extrabold leading-tight">
          Quiz Pedagógico: descubra o seu estilo de ensino
        </h1>
        <p className="mt-3 text-base text-blue-50">
          Descubra qual teoria de aprendizagem orienta a sua prática em sala de aula e explore
          novas estratégias para o seu dia a dia!
        </p>
      </div>

      <div className="space-y-3 text-[15px] leading-relaxed text-slate-700">
        <p>
          Na correria do dia a dia, raramente paramos para refletir sobre as teorias de
          aprendizagem que sustentam nossas escolhas em sala de aula. Este quiz é um convite para
          uma autoavaliação rápida e leve, criada pelos estudantes de História da UNIVALI para a
          disciplina Laboratório de Práticas Educativas e Extensão II.
        </p>
        <p className="flex items-start gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
          <span>
            <strong>Como funciona:</strong> são 6 perguntas objetivas sobre situações reais da sua
            rotina docente. Ao final, você receberá de forma imediata o mapeamento do seu perfil
            entre 5 abordagens teóricas e terá acesso direto ao nosso Infoguia Pedagógico.
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onStart}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 text-lg font-bold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:scale-[0.98]"
        >
          <Play className="h-5 w-5" aria-hidden="true" />
          Começar o Quiz
        </button>
        <button
          type="button"
          onClick={onOpenGuide}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-indigo-600 bg-white px-5 text-base font-bold text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:scale-[0.98]"
        >
          <BookOpen className="h-5 w-5" aria-hidden="true" />
          Consultar Infoguia Pedagógico
        </button>
      </div>
    </section>
  )
}
