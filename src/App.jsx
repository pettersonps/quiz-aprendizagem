import { useEffect, useState } from 'react'
import ScrollTopButton from './components/ScrollTopButton'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import GuideScreen from './components/GuideScreen'
import StoryModal from './components/StoryModal'
import ConfirmModal from './components/ConfirmModal'
import { QUESTIONS } from './data/questions'
import { computeResults } from './lib/scoring'

/**
 * Componente raiz: controla a tela atual e o estado do quiz (somente em memória).
 * Telas: 'home' | 'quiz' | 'result' | 'guide'
 */
export default function App() {
  const [screen, setScreen] = useState('home')
  const [from, setFrom] = useState('home') // tela de origem do Infoguia
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState(() => Array(QUESTIONS.length).fill(null))
  const [story, setStory] = useState(null) // dados do cartão de Stories (ou null)
  const [confirmDiscard, setConfirmDiscard] = useState(false) // modal de descarte

  // Ao trocar de tela, volta ao topo da página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [screen])

  const select = (key) =>
    setAnswers((prev) => prev.map((v, i) => (i === index ? key : v)))

  const restart = () => {
    setAnswers(Array(QUESTIONS.length).fill(null))
    setIndex(0)
    setStory(null)
    setConfirmDiscard(false)
    setScreen('home')
  }

  const openGuide = (origin) => {
    setFrom(origin)
    setScreen('guide')
  }

  // Rótulo do botão "voltar" do Infoguia conforme a origem
  const backLabels = { home: 'Voltar ao início', quiz: 'Voltar ao Quiz', result: 'Voltar ao Resultado' }
  const highlight = from === 'result' && answers.every(Boolean) ? computeResults(answers).top.key : undefined

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col px-4 py-6 md:my-6 md:min-h-0 md:rounded-3xl md:bg-slate-100 md:shadow-xl md:ring-1 md:ring-slate-200">
      {screen === 'home' && (
        <HomeScreen
          onStart={() => {
            setIndex(0)
            setScreen('quiz')
          }}
          onOpenGuide={() => openGuide('home')}
        />
      )}

      {screen === 'quiz' && (
        <QuizScreen
          index={index}
          answers={answers}
          onSelect={select}
          onBack={() => setIndex((i) => Math.max(0, i - 1))}
          onNext={() => setIndex((i) => Math.min(QUESTIONS.length - 1, i + 1))}
          onFinish={() => setScreen('result')}
          onExit={() => setConfirmDiscard(true)}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          answers={answers}
          onRestart={() => setConfirmDiscard(true)}
          onOpenGuide={() => openGuide('result')}
          onShare={setStory}
        />
      )}

      {screen === 'guide' && (
        <GuideScreen
          key={from}
          backLabel={backLabels[from]}
          highlight={highlight}
          onBack={() => setScreen(from)}
        />
      )}

      <footer className="mt-auto pt-8 text-center text-xs leading-relaxed text-slate-500">
        © {new Date().getFullYear()} · Feito por Gustavo Assini, Luiz Pegoraro, <br />Petterson Santos e Sofia Knoll
      </footer>

      <ScrollTopButton />

      {confirmDiscard && (
        <ConfirmModal onConfirm={restart} onCancel={() => setConfirmDiscard(false)} />
      )}

      {story && <StoryModal data={story} onClose={() => setStory(null)} />}
    </main>
  )
}
