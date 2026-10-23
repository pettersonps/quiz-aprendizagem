/**
 * Dados das 5 teorias (resumo do resultado + conteúdo do Infoguia).
 * Texto baseado no material "Textos Quiz" (UNIVALI / E. B. João Paulo II).
 * A chave (A–E) corresponde à alternativa do quiz.
 */

export const THEORY_KEYS = ['A', 'B', 'C', 'D', 'E']

export const THEORIES = {
  A: {
    key: 'A',
    name: 'Behaviorismo / Pedagogia Tradicional',
    short: 'Behaviorismo',
    official: false,
    // Classes de cor (Tailwind) e valor hex (usado no cartão de Stories)
    hex: '#d97706',
    hexSoft: '#fef3c7',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    bar: 'bg-amber-500',
    text: 'text-amber-800',
    tagline: 'Clareza, rotina e consolidação sólida dos conteúdos.',
    summary:
      'Sua prática pedagógica destaca-se pela organização, clareza metodológica, previsibilidade e foco na consolidação sólida dos conteúdos curriculares. Você valoriza uma rotina bem definida, na qual os estudantes sabem exatamente o que se espera deles.',
    foco: 'Organiza a rotina de forma funcional, utiliza a explicação expositiva no quadro, sequências de exercícios da apostila e critérios transparentes de acompanhamento.',
    pontoForte:
      'Oferece segurança, clareza, disciplina e cobertura eficiente do programa curricular.',
    dica: 'Intercale os momentos individuais de apostila com breves trocas ou desafios em dupla para evitar a passividade e o desinteresse dos alunos.',
    conexao:
      'Abordagem frequentemente observada no cotidiano escolar como resposta à gestão do tempo e ao acompanhamento do livro didático padronizado. O desafio é equilibrar a clareza dessa estrutura com momentos de maior protagonismo e autonomia do estudante.',
    guide: {
      autores: 'B. F. Skinner (Behaviorismo Operante), John B. Watson e Ivan Pavlov.',
      foco: 'Orientar o comportamento e a aprendizagem dos estudantes por meio de estímulos, rotinas e reforços vindos do ambiente.',
      aprendizagem:
        'Mudança no comportamento resultante de associações diretas entre estímulos e respostas. O conhecimento é transmitido pelo professor e fixado no estudante por meio do condicionamento (reforço positivo, reforço negativo, treino e repetição mecânica), no qual o acerto é incentivado para se repetir e o erro é corrigido.',
      estrategias:
        'Uso de reforços e combinados claros, como o ganho de pontos por participação e tarefas entregues no prazo ou a perda de pontos pelo descumprimento de regras. Também envolve a resolução individual de exercícios da apostila para fixação do conteúdo e aulas expositivas focadas na explicação direta no quadro e na disciplina da turma.',
      recursos:
        'Apostilas e livros didáticos com sequências fixas de exercícios, listas de fixação, gabaritos padronizados, quadros de acompanhamento disciplinar e sistemas de pontuação por desempenho.',
      papel:
        'O professor é o detentor e transmissor central do conhecimento, bem como o organizador do ambiente escolar. Conduz a instrução direta, avalia os estudantes em relação a padrões fixos e aplica reforços para garantir a disciplina e o cumprimento do programa escolar.',
    },
  },

  B: {
    key: 'B',
    name: 'Sociointeracionismo (Teoria Histórico-Cultural)',
    short: 'Sociointeracionismo',
    official: true,
    hex: '#2563eb',
    hexSoft: '#dbeafe',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    bar: 'bg-blue-600',
    text: 'text-blue-800',
    tagline: 'Mediação, diálogo e construção coletiva do saber.',
    summary:
      'Sua prática pedagógica destaca-se pela mediação, pelo diálogo e pela valorização da construção coletiva do conhecimento. Você enxerga a sala de aula como um espaço vivo de trocas, no qual o saber é construído por meio da linguagem, da cultura e das interações sociais.',
    foco: 'Prioriza a organização da sala em duplas ou pequenos grupos, atua na Zona de Desenvolvimento Proximal (ZDP) com perguntas mediadoras e valoriza a bagagem cultural e os conhecimentos prévios da turma.',
    pontoForte:
      'Estimula a autonomia, a cooperação, o respeito às diferenças e o desenvolvimento do pensamento crítico.',
    dica: 'Em dias de rotina corrida, utilize rituais curtos (como duplas de reflexão de 5 minutos) para manter a troca colaborativa sem comprometer o tempo da aula.',
    conexao:
      'Principal base teórica do Projeto Político-Pedagógico (PPP) da escola e das Diretrizes Curriculares Municipais (2024), que definem a mediação pedagógica e o trabalho colaborativo como pilares do processo educativo.',
    guide: {
      autores: 'Lev Vygotsky (autor central), Alexander Luria e Alexis Leontiev.',
      foco: 'A aprendizagem é entendida como um processo mediado pela linguagem, pela cultura e pelas interações sociais com o outro e com o meio.',
      aprendizagem:
        'Processo social em que o conhecimento se constrói na convivência e na troca com os outros. Atua na Zona de Desenvolvimento Proximal (ZDP): a distância entre o que o estudante já faz sozinho e o que aprende a realizar com o apoio do professor ou de um colega.',
      estrategias:
        'Trabalhos em grupo, debates em aula, sala de aula invertida e dinâmicas interativas (como "caça ao tesouro pedagógica").',
      recursos:
        'Ferramentas digitais interativas como Kahoot (nuvens de palavras e quizzes), mapas conceituais e jogos educacionais cooperativos.',
      papel:
        'O professor atua como mediador e incentivador do aprendizado, praticando a escuta atenta e orientando os alunos para que desenvolvam sua autonomia.',
    },
  },

  C: {
    key: 'C',
    name: 'Psicogênese da Pessoa Completa (Henri Wallon)',
    short: 'Wallon',
    official: false,
    hex: '#e11d48',
    hexSoft: '#ffe4e6',
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    bar: 'bg-rose-500',
    text: 'text-rose-800',
    tagline: 'Afeto, corpo e cognição caminham juntos.',
    summary:
      'Sua prática pedagógica destaca-se pela sensibilidade, pela empatia e pela compreensão de que não existe aprendizagem intelectual sem vínculo afetivo. Você enxerga o estudante em sua totalidade, articulando cognição, afeto, movimento corporal e contexto social.',
    foco: 'Pratica a escuta empática, valoriza a dimensão corporal e o movimento (dramatizações, uso do pátio e espaços alternativos) e busca resolver conflitos pelo diálogo direto e acolhedor.',
    pontoForte:
      'Constrói vínculos seguros, reduz a ansiedade escolar, promove a inclusão real e valoriza o desenvolvimento humano integral.',
    dica: 'Alie o acolhimento afetivo a combinados e metas acadêmicas claras, mostrando aos alunos que o afeto e a responsabilidade com o estudo caminham juntos.',
    conexao:
      'A valorização da dimensão afetiva e corporal dialoga diretamente com as ações de acolhimento e escuta humana do PPP da escola, fundamentando um ambiente escolar seguro, inclusivo e empático.',
    guide: {
      autores: 'Henri Wallon (idealizador), Izabel Galvão e Heloysa Dantas.',
      foco: 'Compreensão do estudante em sua totalidade, integrando de forma indissociável os aspectos afetivos, cognitivos, motores e sociais.',
      aprendizagem:
        'A atuação da escola se dirige à pessoa por completo e oferece meios para o desenvolvimento integral nas dimensões afetiva, cognitiva e motora. O desenvolvimento ocorre na alternância dialética entre afetividade e cognição. O vínculo afetivo, a empatia e a acolhida das emoções são portas de entrada indispensáveis para o engajamento e a aprendizagem significativa.',
      estrategias:
        'Rodas de conversa e momentos de acolhimento para ouvir e dar espaço às vivências dos alunos, além de jogos, dramatizações e expressão corporal que usam o movimento para apoiar a aprendizagem. Destacam-se também os trabalhos em grupo com papéis rotativos, fortalecendo a empatia, o respeito e o cuidado com as emoções na turma.',
      recursos:
        'Materiais artísticos e de expressão gráfica (cartolinas, tintas, murais), jogos cooperativos, cartões de dinâmicas socioemocionais, recursos audiovisuais e o uso de espaços alternativos da escola (pátio, quadra e biblioteca).',
      papel:
        'O professor atua como facilitador do desenvolvimento humano e mediador afetivo, estabelecendo vínculos seguros, praticando a escuta paciente e criando um ambiente escolar acolhedor que respeita o estudante em sua totalidade.',
    },
  },

  D: {
    key: 'D',
    name: 'Construtivismo (Epistemologia Genética)',
    short: 'Construtivismo',
    official: false,
    hex: '#059669',
    hexSoft: '#d1fae5',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    bar: 'bg-emerald-600',
    text: 'text-emerald-800',
    tagline: 'Investigar, testar hipóteses e aprender com o erro.',
    summary:
      'Sua prática pedagógica destaca-se pelo incentivo à investigação, à curiosidade e à descoberta autônoma. Você acredita que o estudante aprende verdadeiramente quando age sobre o conhecimento, investiga, testa hipóteses e reflete sobre os próprios erros.',
    foco: 'Inicia as aulas com perguntas instigantes ou desafios práticos (desequilíbrio cognitivo), valoriza o erro como etapa natural do raciocínio e atua como orientador da pesquisa e da experimentação.',
    pontoForte:
      'Desenvolve o raciocínio lógico, a capacidade de resolução de problemas, o método científico e a autonomia intelectual.',
    dica: 'Como a investigação exige tempo de maturação, selecione os conceitos-chave do ano para trabalhar por projetos e sintetize os conteúdos secundários em momentos de explicação direta.',
    conexao:
      'Esta concepção fundamenta as diretrizes pedagógicas municipais e estaduais no que tange ao desenvolvimento do pensamento crítico, do raciocínio científico e da autonomia do estudante frente aos desafios do conhecimento.',
    guide: {
      autores: 'Jean Piaget (autor central), Jerome Bruner, Emilia Ferreiro e Ana Teberosky.',
      foco: 'A construção ativa do conhecimento pelo próprio estudante mediante a ação, a experimentação, a interação com o meio e a reflexão sobre suas descobertas.',
      aprendizagem:
        'Processo ativo de reconstrução interna. O estudante aprende quando interage com o objeto de estudo, mobiliza seus conhecimentos prévios e enfrenta um desequilíbrio cognitivo (conflito entre o que já sabe e o novo desafio). Ao formular hipóteses, testar possibilidades e refletir sobre os resultados, realiza a assimilação e a acomodação, transformando suas estruturas mentais e alcançando a autonomia cognitiva.',
      estrategias:
        'Aprendizagem baseada em projetos e resolução de problemas, nas quais os estudantes investigam situações reais, criam hipóteses, testam possibilidades e refletem sobre os resultados. Destaca-se o uso de atividades práticas de experimentação, aliadas a momentos de trabalho colaborativo para a troca de ideias.',
      recursos:
        'Materiais manipuláveis e de experimentação (kits científicos, recipientes, lupas), jogos de lógica e raciocínio, estudos de caso estruturados, maquetes e softwares interativos de pesquisa.',
      papel:
        'O professor atua como orientador e provocador de desafios mentais. Em vez de entregar respostas prontas, formula perguntas problematizadoras, valoriza os conhecimentos prévios, incentiva o erro construtivo e cria oportunidades para a pesquisa autônoma.',
    },
  },

  E: {
    key: 'E',
    name: 'Educação Integral e Socioemocional (SEL/CASEL)',
    short: 'Educação Integral',
    official: true,
    hex: '#7c3aed',
    hexSoft: '#ede9fe',
    bg: 'bg-violet-50',
    border: 'border-violet-300',
    bar: 'bg-violet-600',
    text: 'text-violet-800',
    tagline: 'Formação humana global e cidadania ativa.',
    summary:
      'Sua prática pedagógica destaca-se pela visão sistêmica, pelo compromisso ético e pela formação cidadã. Você compreende a escola como espaço de formação humana global, no qual o ensino dos conteúdos caminha lado a lado com o desenvolvimento socioemocional e a intervenção crítica na sociedade.',
    foco: 'Conecta os conteúdos acadêmicos a problemas reais da comunidade, utiliza projetos interdisciplinares, rodas de conversa e avalia atitudes como empatia, responsabilidade e cooperação.',
    pontoForte:
      'Concede sentido e propósito real ao conhecimento escolar, desenvolvendo as competências gerais da BNCC e o protagonismo cidadão.',
    dica: 'Ao criar debates e projetos comunitários, certifique-se de manter os objetivos conceituais da sua disciplina bem amarrados e estruturados ao longo da atividade.',
    conexao:
      'Representa o compromisso ético e o marco legal do PPP da escola e das Diretrizes Curriculares de Itajaí (2024), pautados na formação humana integral, na inclusão e no desenvolvimento socioemocional.',
    guide: {
      autores:
        'Anísio Teixeira, Darcy Ribeiro, Paulo Freire, John Dewey, Dermeval Saviani, Jacques Delors (Relatório da UNESCO) e o modelo CASEL (Collaborative for Academic, Social, and Emotional Learning).',
      foco: 'Desenvolvimento do ser humano em todas as suas dimensões (intelectual, física, afetiva, social e cultural) para uma atuação autônoma, crítica, empática e cidadã na sociedade.',
      aprendizagem:
        'Processo ativo, contínuo, multidimensional e contextualizado. Realiza-se na articulação entre os saberes acadêmicos e o desenvolvimento das competências socioemocionais (autoconhecimento, autogestão/autorregulação, consciência social, habilidades de relacionamento e tomada de decisão responsável). O conhecimento capacita o estudante a solucionar problemas complexos e a intervir ética e criticamente em sua comunidade.',
      estrategias:
        'Projetos interdisciplinares conectados a temas contemporâneos da realidade dos alunos, rodas de conversa e círculos de acolhimento, além de estudos dirigidos e projetos complementares no contraturno escolar que estimulam o protagonismo e a formação cidadã.',
      recursos:
        'Múltiplos espaços de convivência e pesquisa da escola, tecnologias digitais da informação e comunicação (TDIC), diferentes linguagens artísticas e culturais, além de materiais concretos, manipuláveis e jogos cooperativos.',
      papel:
        'O professor atua como articulador de experiências significativas e mediador do desenvolvimento humano integral. Sua postura é pautada no acolhimento da diversidade, no incentivo à pesquisa e na criação de oportunidades reais para o protagonismo e a autonomia dos estudantes.',
    },
  },
}

/** Ordem de exibição no Infoguia (conforme o material). */
export const GUIDE_ORDER = ['B', 'A', 'C', 'D', 'E']

/** Texto reflexivo universal exibido em todo resultado. */
export const REFLECTION = {
  title: 'Uma reflexão sobre a prática pedagógica',
  text: 'Nenhum docente atua sob uma única abordagem teórica o tempo todo. Na rotina real da escola, a prática é viva, dinâmica e contextual. É perfeitamente natural e compreensível utilizar estratégias mais estruturadas (Behavioristas) em dias de consolidação ou cumprimento de rotinas, e buscar estratégias Sociointeracionistas, Afetivas, Construtivistas ou de Educação Integral em outros momentos. O resultado acima indica a sua tendência de preferência atual, servindo como convite para conhecer novas possibilidades e enriquecer seu repertório pedagógico.',
  cta: 'Acesse o nosso Infoguia Pedagógico para aprofundar os fundamentos teóricos de cada abordagem, conferir seus autores de referência e conectar a teoria à sua prática em sala de aula!',
}
