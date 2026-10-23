/**
 * Banco de perguntas do quiz.
 * Cada alternativa (A–E) corresponde de forma fixa a uma teoria.
 * `reason` é um fragmento usado para compor a justificativa personalizada
 * no resultado (ex.: "valoriza o erro como aprendizagem na condução de dúvidas").
 */
export const QUESTIONS = [
  {
    id: 1,
    topic: 'Espaço e rotina',
    text: 'Como você costuma estruturar a rotina e a dinâmica de trabalho com a turma?',
    options: [
      { key: 'A', text: 'Priorizo uma rotina sequencial e organizada, garantindo clareza nos passos e foco no acompanhamento dos conteúdos planejados.', reason: 'prioriza uma rotina sequencial e organizada' },
      { key: 'B', text: 'Organizo atividades em duplas ou grupos para que a troca entre os estudantes fortaleça o aprendizado de todos.', reason: 'organiza atividades em duplas ou grupos na rotina' },
      { key: 'C', text: 'Crio um ambiente acolhedor e flexível, permitindo momentos de diálogo, movimento e escuta das emoções da turma.', reason: 'cria um ambiente acolhedor e flexível, com escuta das emoções' },
      { key: 'D', text: 'Monto situações de investigação e experimentação, em que os alunos possam manusear materiais e testar hipóteses.', reason: 'monta situações de investigação e experimentação' },
      { key: 'E', text: 'Integro os conteúdos da aula a temas sociais e projetos comunitários que fazem parte da vida dos estudantes.', reason: 'integra os conteúdos a temas sociais e projetos comunitários' },
    ],
  },
  {
    id: 2,
    topic: 'Condução de dúvidas ou erros',
    text: 'Quando um estudante encontra dificuldades para compreender um conceito, qual é sua estratégia inicial?',
    options: [
      { key: 'A', text: 'Reviso o passo a passo de forma clara no quadro ou no material, oferecendo apoio orientado até que o aluno domine o exercício.', reason: 'revisa o passo a passo com apoio orientado na condução de dúvidas' },
      { key: 'B', text: 'Incentivo que ele trabalhe com um colega que já compreendeu o conteúdo, promovendo a mediação entre pares.', reason: 'promove a mediação entre pares na condução de dúvidas' },
      { key: 'C', text: 'Acolho a frustração do aluno com empatia, buscando fortalecer sua confiança antes de retomar o conteúdo.', reason: 'acolhe a frustração do aluno com empatia diante das dificuldades' },
      { key: 'D', text: 'Faço perguntas instigantes para que o próprio aluno perceba a contradição e descubra um novo caminho para a solução.', reason: 'valoriza o erro como aprendizagem na condução de dúvidas' },
      { key: 'E', text: 'Relaciono o problema a uma situação prática da vida diária para que o conceito ganhe sentido concreto.', reason: 'relaciona as dúvidas a situações práticas da vida diária' },
    ],
  },
  {
    id: 3,
    topic: 'Gestão da turma e convivência',
    text: 'Diante de momentos de agitação ou dispersão da turma, qual abordagem costuma trazer melhores resultados?',
    options: [
      { key: 'A', text: 'Retomo os combinados da turma e utilizo critérios claros de acompanhamento da rotina para reestabelecer o foco.', reason: 'retoma combinados e critérios claros diante da dispersão' },
      { key: 'B', text: 'Redireciono a atenção da turma para uma tarefa participativa ou discussão em grupo sobre o tema da aula.', reason: 'redireciona a turma para tarefas participativas e discussões em grupo' },
      { key: 'C', text: 'Faço uma pausa para alinhar as expectativas com a turma, abrindo espaço para autorregulação e expressão emocional.', reason: 'abre espaço para autorregulação e expressão emocional na agitação' },
      { key: 'D', text: 'Proponho um desafio prático ou um problema intrigante que desperte a curiosidade natural dos alunos.', reason: 'propõe desafios intrigantes que despertam a curiosidade da turma' },
      { key: 'E', text: 'Promovo um momento de reflexão coletiva sobre a convivência, a empatia e o respeito no ambiente escolar.', reason: 'promove reflexão coletiva sobre convivência, empatia e respeito' },
    ],
  },
  {
    id: 4,
    topic: 'Seleção de recursos didáticos',
    text: 'Qual é o principal objetivo que guia a escolha dos seus recursos e materiais didáticos?',
    options: [
      { key: 'A', text: 'Garantir a consolidação dos conceitos fundamentais e a fixação sólida do programa curricular.', reason: 'escolhe recursos para consolidar conceitos e fixar o programa curricular' },
      { key: 'B', text: 'Estimular a comunicação, a cooperação e o trabalho em equipe.', reason: 'escolhe recursos que estimulam comunicação, cooperação e trabalho em equipe' },
      { key: 'C', text: 'Valorizar o desenvolvimento integral do estudante, conectando a cognição ao bem-estar afetivo e físico.', reason: 'escolhe recursos que conectam cognição ao bem-estar afetivo e físico' },
      { key: 'D', text: 'Favorecer a autonomia, a pesquisa e a descoberta autônoma pelo próprio aluno.', reason: 'escolhe recursos que favorecem autonomia, pesquisa e descoberta' },
      { key: 'E', text: 'Formar cidadãos críticos e reflexivos, capazes de atuar de forma ética na sociedade.', reason: 'escolhe recursos que formam cidadãos críticos e éticos' },
    ],
  },
  {
    id: 5,
    topic: 'Avaliação da aprendizagem',
    text: 'Como você enxerga e realiza o processo de avaliação da aprendizagem dos alunos?',
    options: [
      { key: 'A', text: 'Priorizo avaliações escritas e verificações periódicas objetivas para mensurar com clareza a retenção e o domínio dos conteúdos ensinados.', reason: 'prioriza verificações periódicas objetivas na avaliação' },
      { key: 'B', text: 'Acompanho o processo de forma contínua e formativa, observando como o aluno evolui do apoio inicial até conseguir realizar as tarefas sozinho ou em grupo.', reason: 'acompanha a avaliação de forma contínua e formativa, da mediação à autonomia' },
      { key: 'C', text: 'Realizo uma observação sensível do progresso individual, levando em consideração o estado emocional, a postura, a autoexpressão e o esforço do estudante.', reason: 'avalia com observação sensível do progresso individual e do estado emocional' },
      { key: 'D', text: 'Avalio a capacidade do aluno de formular hipóteses, resolver situações-problema e explicar o raciocínio por trás de suas respostas.', reason: 'avalia a capacidade de formular hipóteses e explicar o raciocínio' },
      { key: 'E', text: 'Utilizo instrumentos diversificados e momentos de autoavaliação, analisando o desenvolvimento cognitivo junto com atitudes como empatia, responsabilidade e cooperação.', reason: 'usa instrumentos diversificados e autoavaliação, considerando atitudes como empatia e cooperação' },
    ],
  },
  {
    id: 6,
    topic: 'Planejamento pedagógico',
    text: 'Qual costuma ser o ponto de partida principal ao planejar uma nova unidade de ensino ou assunto?',
    options: [
      { key: 'A', text: 'Sigo a sequência lógica e estruturada do currículo e do material didático oficial, garantindo o cumprimento ordenado de todas as etapas.', reason: 'parte da sequência estruturada do currículo e do material oficial no planejamento' },
      { key: 'B', text: 'Parto do diálogo sobre o que a turma já conhece sobre o tema, utilizando a interação inicial para ampliar o repertório cultural do grupo.', reason: 'parte do diálogo sobre os conhecimentos prévios da turma no planejamento' },
      { key: 'C', text: 'Começo escutando as vivências, sentimentos e curiosidades que os estudantes trazem em relação ao assunto, conectando o conteúdo à sua realidade.', reason: 'começa o planejamento escutando vivências e sentimentos dos estudantes' },
      { key: 'D', text: 'Apresento uma pergunta intrigante, um experimento ou um desafio prático que desequilibre as certezas iniciais e desperte a investigação.', reason: 'prioriza situações-problema que desequilibram certezas no planejamento' },
      { key: 'E', text: 'Parto de um problema real do bairro, da cidade ou da sociedade, conectando o conhecimento escolar à intervenção cidadã.', reason: 'parte de problemas reais da comunidade no planejamento' },
    ],
  },
]
