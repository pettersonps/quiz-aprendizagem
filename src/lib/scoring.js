import { THEORIES, THEORY_KEYS } from '../data/theories'
import { QUESTIONS } from '../data/questions'

/** Pontos base por resposta escolhida. */
const BASE_POINTS = 10

/**
 * Regras de sinergia: quando as duas letras aparecem em perguntas diferentes,
 * cada teoria em `bonus` recebe os pontos indicados.
 */
const SYNERGIES = [
  {
    pair: ['B', 'E'],
    bonus: { B: 3, E: 3, C: 2 },
    note: 'a visão do sujeito social e dialógico (Sociointeracionismo + Educação Integral)',
  },
  {
    pair: ['D', 'B'],
    bonus: { D: 3, B: 3 },
    note: 'a combinação entre investigação e mediação (Construtivismo + Sociointeracionismo)',
  },
  {
    pair: ['C', 'E'],
    bonus: { C: 4, E: 4 },
    note: 'o foco na pessoa integral e na empatia (Afeto + Socioemocional)',
  },
  {
    // Coexistência equilibrada entre métodos investigativos e rotina organizada.
    pair: ['D', 'A'],
    bonus: { D: 2, A: 2 },
    note: 'o equilíbrio entre métodos investigativos e rotinas organizadas',
  },
]

/**
 * "Teoria oculta": se a teoria não foi escolhida diretamente, mas o professor
 * combinou respostas que a fundamentam, ela recebe uma pontuação residual.
 */
const HIDDEN_RULES = [
  { theory: 'E', from: ['B', 'C'], points: 2, note: 'a combinação de mediação social e afetividade, que fundamenta a Educação Integral' },
  { theory: 'B', from: ['C', 'E'], points: 2, note: 'o cuidado afetivo e a formação cidadã, que se apoiam no diálogo e na interação social' },
  { theory: 'C', from: ['B', 'E'], points: 2, note: 'a valorização do coletivo e da formação integral, que dialogam com o afeto' },
  { theory: 'D', from: ['B', 'E'], points: 2, note: 'o trabalho com problemas reais, que mobiliza a investigação' },
]

/**
 * Calcula pontuação, porcentagens normalizadas (soma = 100) e justificativas.
 * @param {string[]} answers - letra escolhida em cada pergunta (índice = pergunta)
 * @returns {{ results: Array, top: object }}
 */
export function computeResults(answers) {
  const points = Object.fromEntries(THEORY_KEYS.map((k) => [k, 0]))
  const direct = Object.fromEntries(THEORY_KEYS.map((k) => [k, 0]))
  const reasons = Object.fromEntries(THEORY_KEYS.map((k) => [k, []]))
  const notes = Object.fromEntries(THEORY_KEYS.map((k) => [k, []]))

  // 1) Pontuação base
  answers.forEach((key, i) => {
    if (!key) return
    points[key] += BASE_POINTS
    direct[key] += 1
    const opt = QUESTIONS[i].options.find((o) => o.key === key)
    reasons[key].push(opt.reason)
  })

  const chosen = new Set(answers.filter(Boolean))

  // 2) Sinergias
  SYNERGIES.forEach(({ pair, bonus, note }) => {
    if (!pair.every((k) => chosen.has(k))) return
    Object.entries(bonus).forEach(([k, p]) => {
      points[k] += p
      notes[k].push(note)
    })
  })

  // 3) Teorias ocultas (somente se ainda sem nenhuma escolha direta e sem bônus)
  HIDDEN_RULES.forEach(({ theory, from, points: p, note }) => {
    if (direct[theory] === 0 && points[theory] === 0 && from.every((k) => chosen.has(k))) {
      points[theory] += p
      notes[theory].push(note)
    }
  })

  // 4) Normalização em 100% (método do maior resto)
  const total = THEORY_KEYS.reduce((s, k) => s + points[k], 0)
  const raw = THEORY_KEYS.map((k) => ({ k, exact: (points[k] / total) * 100 }))
  const pct = Object.fromEntries(raw.map(({ k, exact }) => [k, Math.floor(exact)]))
  let remainder = 100 - Object.values(pct).reduce((s, v) => s + v, 0)
  raw
    .map(({ k, exact }) => ({ k, frac: exact - Math.floor(exact) }))
    .sort((a, b) => b.frac - a.frac || points[b.k] - points[a.k])
    .forEach(({ k }) => {
      if (remainder > 0 && points[k] > 0) {
        pct[k] += 1
        remainder -= 1
      }
    })

  // 5) Monta resultado (apenas > 0%), ordenado do maior para o menor
  const results = THEORY_KEYS.filter((k) => pct[k] > 0)
    .map((k) => ({
      ...THEORIES[k],
      percent: pct[k],
      points: points[k],
      explanation: buildExplanation(THEORIES[k], pct[k], reasons[k], notes[k]),
    }))
    .sort((a, b) => b.percent - a.percent || b.points - a.points)

  return { results, top: results[0] }
}

/** Junta itens em português: "a, b e c". */
function joinList(items) {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join('; ')} e ${items[items.length - 1]}`
}

/** Justificativa personalizada com base nas escolhas do professor. */
function buildExplanation(theory, percent, reasons, notes) {
  const label = theory.short
  if (reasons.length > 0) {
    let text = `Você obteve ${percent}% em ${label} porque ${joinList(reasons)}.`
    if (notes.length > 0) {
      text += ` Esse perfil foi reforçado pela sinergia com outras respostas suas: ${joinList(notes)}.`
    }
    return text
  }
  return `Você obteve ${percent}% em ${label} porque, mesmo sem tê-la escolhido diretamente, sua prática absorve traços desta abordagem, pela combinação das suas respostas: ${joinList(notes)}.`
}
