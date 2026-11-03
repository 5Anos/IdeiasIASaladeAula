export interface ActivityStep {
  number: number;
  title: string;
  description: string;
  duration?: string;
  teacherRole?: string;
  studentRole?: string;
  resource?: string;
  expectedOutcome?: string;
}

export interface ActivityPromptExample {
  studentInitial: string;
  enriched: string;
  initialLabel?: string;
  enrichedLabel?: string;
}

export interface Activity {
  id: number;
  title: string;
  disciplines: string;
  cycle: string;
  cycleCategories: ('1.º Ciclo' | '2.º Ciclo' | '3.º Ciclo' | 'Secundário')[];
  duration: string;
  modality: string;
  briefDescription: string;
  learningObjectives: string[];
  steps: ActivityStep[];
  promptExample: ActivityPromptExample;
  finalProduct: string;
  toolKeys: string[];
  badgeColor?: string;
  accentColor?: string;
  themeEmoji?: string;
  isFirstImageSpecial?: boolean;
  teacherPreparation?: string;
  evaluationCriteria?: string[];
  differentiation?: string[];
  essentialVsExtension?: {
    essential: string;
    extension: string;
  };
  offlineAlternative?: string;
  aiPedagogicalRole?: string;
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "A IA Desenha o que Eu Imagino",
    disciplines: "Português | Educação Artística",
    cycle: "1.º Ciclo – 1.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Mediada pelo professor (projetada no ecrã central), salvaguardando a privacidade e a ausência de criação de contas por menores.",
    briefDescription: "Os alunos exploram a capacidade da Inteligência Artificial em transformar palavras em imagens. A partir da criação de descrições ricas com adjetivos sobre um objeto ou personagem insólito, a turma assiste à geração da imagem mediada pelo docente, confronta o resultado da máquina com a intenção comunicativa inicial e produz o seu próprio desenho manual, valorizando a imaginação humana face aos algoritmos.",
    learningObjectives: [
      "Identificar e utilizar adjetivos simples (cor, tamanho, forma) para qualificar elementos visuais;",
      "Comparar criticamente a representação gerada por IA com a ideia imaginada e com o desenho manual próprio;",
      "Compreender, a nível elementar, que as imagens geradas pela máquina dependem estritamente das instruções fornecidas pelo utilizador."
    ],
    steps: [
      {
        number: 1,
        title: "Imaginação e Vocabulário Adjetivo",
        duration: "20 min",
        description: "Cada aluno idealiza uma personagem ou objeto insólito (ex.: um lápis voador, um peixe com rodas) e formula oralmente ou escreve uma frase descritiva mobilizando adjetivos precisos."
      },
      {
        number: 2,
        title: "Geração em Grande Grupo com o Professor",
        duration: "25 min",
        description: "Com o computador ligado ao projetor, o professor seleciona ideias dos alunos, redige o pedido na ferramenta visual e projeta o resultado em tempo real para toda a turma."
      },
      {
        number: 3,
        title: "Análise Crítica e Refinamento Descritivo",
        duration: "25 min",
        description: "A turma confronta o resultado visual obtido com a intenção comunicativa inicial, verificando que pormenores foram esquecidos pela IA e como a adição de novos adjetivos altera a imagem."
      },
      {
        number: 4,
        title: "Expressão Plástica Manual e Síntese",
        duration: "20 min",
        description: "Cada aluno desenha a sua versão manual no papel, comparando o seu processo criativo com o da máquina e debatendo por que razão a sensibilidade e a intenção humanas são insubstituíveis."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Um peixe com rodas.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Ilustração infantil colorida de um peixe azul sorridente com quatro rodas vermelhas de brincar, a deslocar-se numa estrada de areia no fundo do mar, estilo livro de contos."
    },
    finalProduct: "Mural escolar coletivo \"O Nosso Olhar vs. O Olhar da IA\", reunindo os desenhos manuais das crianças lado a lado com as descrições e as imagens geradas projetadas.",
    toolKeys: ["canva", "bing", "adobe_express", "ideogram", "leonardo"],
    themeEmoji: "🎨",
    accentColor: "blue",
    isFirstImageSpecial: true,
    teacherPreparation: "Configurar previamente a ferramenta de geração visual no computador docente ligado ao projetor; preparar folhas de desenho A4 e materiais riscadores variados (lápis de cera, marcadores).",
    evaluationCriteria: [
      "Mobilização de pelo menos dois adjetivos qualificativos pertinentes na descrição;",
      "Identificação de semelhanças e discrepâncias entre o texto descritivo e a imagem gerada;",
      "Empenho e originalidade na execução do desenho manual."
    ],
    differentiation: [
      "Apoio: Alunos com dificuldades na escrita ditam a sua descrição diretamente ao professor ou desenham previamente a ideia antes da verbalização;",
      "Extensão: Alunos que terminem rapidamente formulam uma pequena frase narrativa contextualizando a ação da personagem."
    ],
    essentialVsExtension: {
      essential: "Elaboração oral da descrição, observação da geração coletiva e criação do desenho manual individual em papel.",
      extension: "Organização de uma galeria digital comentada com gravação áudio das explicações das crianças."
    },
    offlineAlternative: "O professor atua como \"máquina de desenhar\" no quadro de giz, desenhando à risca apenas o que os alunos dizem para demonstrar a necessidade de rigor descritivo.",
    aiPedagogicalRole: "Estímulo visual imediato que torna evidente a relação de causa-efeito entre a precisão da linguagem verbal e a representação gráfica."
  },
  {
    id: 2,
    title: "A IA Adivinha o Animal",
    disciplines: "Estudo do Meio | Português",
    cycle: "1.º Ciclo – 2.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Mediada pelo professor no ecrã interativo ou em pequenos grupos através de plataformas educativas seguras sem registo pessoal de alunos.",
    briefDescription: "Os alunos aprofundam a classificação dos animais (revestimento, locomoção, alimentação e habitat) redigindo pistas científicas progressivas para desafiar um chatbot a adivinhar o animal secreto. Quando o sistema erra ou hesita, os alunos analisam se a falha se deveu a ambiguidade nas pistas ou a limitações da IA, validando sempre as características biológicas no manual escolar.",
    learningObjectives: [
      "Classificar animais com base em características científicas observáveis (revestimento, habitat, locomoção, regime alimentar);",
      "Redigir pistas estruturadas com progressão lógica (do mais genérico ao mais específico);",
      "Validar criticamente as respostas geradas pela IA, distinguindo falhas de formulação dos alunos de alucinações da máquina através da consulta do manual escolar."
    ],
    steps: [
      {
        number: 1,
        title: "Investigação e Escrita de Pistas Progressivas",
        duration: "20 min",
        description: "Em pares, os alunos escolhem um animal e redigem três pistas graduais no caderno, garantindo que a primeira pista é ampla e a última revela traços distintivos sem dizer o nome."
      },
      {
        number: 2,
        title: "Desafio Interativo com o Chatbot",
        duration: "25 min",
        description: "Os alunos submetem uma pista de cada vez ao chatbot através do professor, observando as deduções da máquina após cada informação adicional."
      },
      {
        number: 3,
        title: "Auditoria Científica e Correção de Pistas",
        duration: "25 min",
        description: "Caso a IA erre ou acerte prematuramente, a turma analisa a causa (pista demasiado óbvia, dados insuficientes ou erro do sistema) e confirma as características biológicas no manual escolar."
      },
      {
        number: 4,
        title: "Registo no Baralho e Ilustração da Turma",
        duration: "20 min",
        description: "Cada par passa a limpo as pistas cientificamente validadas para uma ficha de cartão e ilustra o animal secreto para integrar o baralho de jogos da turma."
      }
    ],
    promptExample: {
      initialLabel: "Pistas progressivas dos alunos:",
      studentInitial: "Pista 1: Sou um mamífero terrestre carnívoro. Pista 2: O meu pelo é amarelo com manchas escuras.",
      enrichedLabel: "Pistas enriquecidas e validadas:",
      enriched: "Pista 1: Sou um mamífero carnívoro que habita nas savanas. Pista 2: O meu corpo é esguio, coberto de pelo amarelo com pintas pretas circulares e possuo garras semirretráteis. Pista 3: Sou considerado o animal terrestre mais veloz em distâncias curtas. Que animal sou?"
    },
    finalProduct: "Baralho pedagógico de cartas \"Quem Sou Eu? – Edição Animal\", com pistas científicas rigorosas e ilustrações feitas pelos alunos.",
    toolKeys: ["magicschool", "mizou", "chatgpt", "gemini"],
    themeEmoji: "🐾",
    accentColor: "emerald",
    teacherPreparation: "Selecionar uma lista de animais presentes nas Aprendizagens Essenciais de Estudo do Meio; preparar cartões em cartolina para a criação do baralho físico.",
    evaluationCriteria: [
      "Exatidão científica dos conceitos biológicos utilizados nas pistas;",
      "Sequenciação lógica das pistas (do geral para o particular);",
      "Capacidade de consulta autónoma do manual escolar para verificar a resposta da IA."
    ],
    differentiation: [
      "Apoio: Fornecimento de uma grelha orientadora com perguntas de escolha guiada (Como se desloca? Onde vive? Como é a pele?);",
      "Extensão: Investigação de animais autóctones portugueses em perigo de extinção (ex.: lince-ibérico, lobo-ibérico)."
    ],
    essentialVsExtension: {
      essential: "Elaboração de 3 pistas no caderno, teste com mediação docente e validação biológica no manual escolar.",
      extension: "Organização de um torneio de adivinhas entre turmas utilizando o baralho de cartas produzido."
    },
    offlineAlternative: "Jogo presencial em pares onde um aluno desempenha o papel de \"computador\" e só pode tentar adivinhar quando receber três pistas completas.",
    aiPedagogicalRole: "Interlocutor de teste para evidenciar a necessidade de precisão conceptual na comunicação científica."
  },
  {
    id: 3,
    title: "Criar Sons de um Mundo Imaginário",
    disciplines: "Educação Artística | Português",
    cycle: "1.º Ciclo – 3.º ou 4.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Mediada pelo professor através de dispositivo central com sistema de som da sala.",
    briefDescription: "Os alunos exploram a dimensão expressiva do som concebendo ambientes imaginários (florestas encantadas, cidades submarinas, planetas distantes). Redigem descrições sensoriais ricas para gerar paisagens sonoras através de ferramentas de áudio com apoio do professor, realizam uma audição atenta e partilham as escolhas artísticas através de um mapa ilustrado coletivo.",
    learningObjectives: [
      "Explorar elementos da linguagem musical e sonora (timbre, intensidade, andamento, textura acústica);",
      "Mobilizar vocabulário sensorial e metafórico na descrição de ambientes espaciais;",
      "Relacionar estímulos auditivos com representações visuais e narrativas."
    ],
    steps: [
      {
        number: 1,
        title: "Conceção do Cenário Sensorial",
        duration: "20 min",
        description: "Em pequenos grupos, os alunos idealizam um espaço imaginário e registam no caderno os sons característicos que compõem esse ecossistema acústico (vento, gotas, passos, ecos)."
      },
      {
        number: 2,
        title: "Construção da Descrição Sonora com o Professor",
        duration: "25 min",
        description: "Os alunos estruturam prompts com adjetivos sensoriais e géneros musicais, enquanto o docente insere os pedidos no gerador sonoro e reproduz as faixas para a turma."
      },
      {
        number: 3,
        title: "Audição Atenta e Associação Evocativa",
        duration: "25 min",
        description: "A turma escuta a faixa gerada em ambiente de silêncio e concentração, descrevendo as emoções suscitadas e tentando identificar os elementos do ambiente pretendido."
      },
      {
        number: 4,
        title: "Mapeamento Visual e Partilha Coletiva",
        duration: "20 min",
        description: "Cada grupo desenha o seu mundo imaginário no mapa coletivo da sala, acompanhado de uma legenda descritiva; a reprodução das faixas é gerida pelo professor em aula (ou via código QR como extensão opcional)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Sons de uma cidade debaixo de água.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Paisagem sonora ambiente relaxante e misteriosa de uma cidade submarina: som suave de bolhas de água, eco distante de baleias, sinos de vento delicados e melodia suave de harpa."
    },
    finalProduct: "Mapa visual coletivo \"Mundos Sonoros da Turma\", com ilustrações dos ambientes e legendas descritivas dos elementos sonoros associados.",
    toolKeys: ["suno", "elevenlabs", "stable_audio", "soundful"],
    themeEmoji: "🎵",
    accentColor: "indigo",
    teacherPreparation: "Testar antecipadamente a ferramenta de geração musical no computador docente com ligação a colunas de som; afixar uma cartolina grande para o mapa coletivo.",
    evaluationCriteria: [
      "Riqueza e adequação do vocabulário sensorial mobilizado na caracterização do ambiente;",
      "Capacidade de escuta atenta e identificação dos parâmetros sonoros (intensidade, timbre);",
      "Articulação coerente entre a representação visual no mapa e a atmosfera sonora."
    ],
    differentiation: [
      "Apoio: Disponibilização de um banco de palavras com sensações auditivas (metálico, abafado, cristalino, cadenciado);",
      "Extensão: Experimentação de sonoplastia manual sobreposta à faixa áudio da IA com instrumentos de percussão orff."
    ],
    essentialVsExtension: {
      essential: "Conceção descritiva, geração mediada com audição em sala e desenho do mundo imaginário no mapa coletivo.",
      extension: "Criação de códigos QR colados no mapa para audição individual através de tablets da biblioteca."
    },
    offlineAlternative: "Produção da paisagem sonora exclusivamente através de percussão corporal, sons vocais e manipulação de objetos do quotidiano (folhas, réguas, garrafas).",
    aiPedagogicalRole: "Instrumento gerador de texturas sonoras complexas que materializa estímulos auditivos para alimentar a criatividade literária e artística."
  },
  {
    id: 4,
    title: "O Arquiteto das Formas Geométricas",
    disciplines: "Matemática | Educação Artística",
    cycle: "1.º Ciclo – 1.º ou 2.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Mediada pelo professor no ecrã interativo, articulada com blocos e materiais manipuláveis nas mesas.",
    briefDescription: "Os alunos mobilizam o vocabulário das figuras geométricas planas e dos sólidos geométricos para desenharem uma «Cidade do Futuro». Convertem o plano em instruções matemáticas rigorosas para a IA e assumem o papel de fiscais da geometria, auditando as falhas da máquina na contagem exata e posicionamento dos elementos antes de corrigirem o projeto em suportes físicos.",
    learningObjectives: [
      "Distinguir com clareza figuras planas (quadrado, retângulo, triângulo, círculo) de sólidos geométricos (cubo, paralelepípedo, pirâmide, cilindro, cone, esfera);",
      "Utilizar vocabulário posicional e geométrico rigoroso na descrição de estruturas tridimensionais;",
      "Identificar criticamente erros de contagem e alucinações de proporção em imagens produzidas por IA através da verificação com materiais manipuláveis."
    ],
    steps: [
      {
        number: 1,
        title: "Construção com Materiais Manipuláveis",
        duration: "20 min",
        description: "Em grupos, os alunos constroem edifícios modelo usando sólidos de madeira ou plástico (cubos, cilindros, cones) e descrevem as relações espaciais entre eles."
      },
      {
        number: 2,
        title: "Ditação do Prompt Matemático ao Professor",
        duration: "25 min",
        description: "A turma dita as instruções ao professor utilizando estritamente a nomenclatura geométrica (indicando quantidades exatas, sólidos e posições relativas), evitando termos vagos."
      },
      {
        number: 3,
        title: "Fiscalização e Auditoria dos Erros da IA",
        duration: "25 min",
        description: "Projetada a imagem gerada, os alunos contam os sólidos gerados, confrontam com as quantidades solicitadas e assinalam alucinações (como contagens distorcidas ou formas fundidas)."
      },
      {
        number: 4,
        title: "Correção Plástica e Tabela de Formas",
        duration: "20 min",
        description: "Cada aluno desenha no caderno o edifício geometricamente corrigido e preenche uma tabela com o número real de figuras planas e sólidos presentes no seu projeto."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Gera uma casa moderna com formas geométricas.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Construção arquitetónica em blocos 3D coloridos sobre fundo neutro: um cubo azul grande na base, uma pirâmide quadrangular amarela centrada em cima do cubo, e dois cilindros verdes verticais lado a lado como pilares."
    },
    finalProduct: "Painel coletivo \"Cidade Geométrica\", integrando as imagens geradas pela IA, as tabelas de contagem auditadas e os desenhos corrigidos pelos alunos.",
    toolKeys: ["ideogram", "bing", "canva", "magicschool"],
    themeEmoji: "📐",
    accentColor: "amber",
    teacherPreparation: "Reunir conjuntos de sólidos geométricos de madeira ou plástico para trabalho de mesa; projetor ligado e calibrado.",
    evaluationCriteria: [
      "Distinção correta entre figuras planas e sólidos geométricos tridimensionais;",
      "Exatidão na contagem e inventário das formas na tabela;",
      "Deteção e justificação fundamentada dos erros de representação cometidos pela IA."
    ],
    differentiation: [
      "Apoio: Uso de cartões visuais com fotografias dos sólidos para apoio à nomeação correta;",
      "Extensão: Introdução da distinção entre poliedros (faces planas) e não poliedros (superfícies curvas)."
    ],
    essentialVsExtension: {
      essential: "Manipulação de sólidos na mesa, ditação do prompt ao professor, auditoria visual da imagem e registo da tabela de contagem.",
      extension: "Construção de maquetes físicas com embalagens recicladas reutilizadas (caixas de medicamentos, rolos de cartão)."
    },
    offlineAlternative: "Construção da cidade exclusivamente com blocos de madeira e registo manual com carimbos de figuras geométricas planas em papel.",
    aiPedagogicalRole: "Provocador cognitivo cujo resultado visual imperfeito suscita a necessidade de fiscalização matemática rigorosa por parte dos alunos."
  },
  {
    id: 5,
    title: "A Fábula Interativa: \"E se fosse eu?\"",
    disciplines: "Português | Cidadania e Desenvolvimento",
    cycle: "1.º Ciclo – 3.º ou 4.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Mediada pelo professor na geração textual; trabalho em pares para revisão crítica, leitura expressiva e dramatização.",
    briefDescription: "A partir da leitura de uma fábula clássica (ex.: «A Lebre e a Tartaruga»), os alunos recorrem ao chatbot com apoio do professor para explorar variantes narrativas onde as personagens adotam atitudes de cooperação. Os alunos assumem a autoria plena da revisão textual em Português de Portugal e treinam a leitura expressiva e a dicção através da dramatização dos diálogos.",
    learningObjectives: [
      "Compreender a estrutura narrativa da fábula (situação inicial, peripécia, desenlace e moral da história);",
      "Rever e melhorar textos em Português de Portugal, eliminando repetições e aperfeiçoando a pontuação do diálogo;",
      "Desenvolver a leitura oral expressiva, a dicção e a capacidade de cooperação interpessoal."
    ],
    steps: [
      {
        number: 1,
        title: "Leitura da Fábula e Dilema de Cooperação",
        duration: "20 min",
        description: "A turma lê a fábula clássica e debate: que desfecho teria a história se as personagens decidissem cooperar em vez de competir perante um obstáculo imprevisto?"
      },
      {
        number: 2,
        title: "Exploração de Cenários com o Chatbot",
        duration: "25 min",
        description: "Com a mediação do docente, os alunos solicitam ao chatbot propostas de desfechos alternativos focados na entreajuda, gerando duas opções de rascunho."
      },
      {
        number: 3,
        title: "Revisão Textual Autoral e Adaptação Linguística",
        duration: "25 min",
        description: "Em pares, os alunos selecionam o melhor rascunho, corrigem expressões para a norma europeia, afinam os diálogos e redigem a sua própria moral da história."
      },
      {
        number: 4,
        title: "Dramatização Oral e Leitura Expressiva",
        duration: "20 min",
        description: "Os pares ensaiam e apresentam a leitura expressiva dos diálogos perante os colegas (a gravação áudio ou animação digital constitui extensão opcional)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Muda o final da história da Lebre e da Tartaruga.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Atua como autor de literatura infantil em Português de Portugal. Reescreve apenas o desfecho da fábula 'A Lebre e a Tartaruga' a partir do momento em que ambas chegam a um rio largo. Elas devem cooperar para atravessar juntas. Inclui 4 falas curtas com travessões de diálogo e uma moral sobre o poder da entreajuda."
    },
    finalProduct: "Dramatização oral em sala de aula do desfecho cooperativo da fábula, acompanhada do texto final revisto e ilustrado pelos alunos.",
    toolKeys: ["chatgpt", "claude", "chatterpix", "vocaroo"],
    themeEmoji: "🦊",
    accentColor: "emerald",
    teacherPreparation: "Selecionar a versão tradicional da fábula a ler; preparar grelha de observação da leitura oral expressiva (pausas, entoação, volume).",
    evaluationCriteria: [
      "Adequação da moral criada ao sentido de entreajuda proposto;",
      "Correção linguística segundo a norma do Português de Portugal e pontuação correta do diálogo;",
      "Fluência, entoação e expressividade na dramatização oral."
    ],
    differentiation: [
      "Apoio: Texto impresso com marcas cromáticas nos travessões de fala para apoiar a leitura dialogada;",
      "Extensão: Criação de uma estrofe rimada em quadra popular com a nova lição de moral."
    ],
    essentialVsExtension: {
      essential: "Leitura crítica, revisão manuscrita do texto em papel e dramatização oral direta na sala de aula.",
      extension: "Gravação de áudio no Vocaroo e animação do desenho da personagem com a aplicação ChatterPix."
    },
    offlineAlternative: "Elaboração autónoma dos finais cooperativos no caderno diário, seguida de representação teatral em pequenos grupos sem ecrãs.",
    aiPedagogicalRole: "Gerador de hipóteses e rascunhos de enredo, cabendo aos alunos o papel soberano de autores, editores e intérpretes."
  },
  {
    id: 6,
    title: "Transformar Histórias em Arte com IA",
    disciplines: "Português | Educação Artística",
    cycle: "1.º Ciclo – 3.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos com escrita no caderno e geração de ilustrações mediada pelo docente no computador central.",
    briefDescription: "Os alunos desenvolvem a competência de escrita narrativa estruturada (início, problema e desenlace). Para enriquecerem o conto, concebem descrições visuais pormenorizadas e iterativas para gerar ilustrações por IA, garantindo que o texto literário comanda o processo e que as imagens apoiam a narrativa sem a ditar.",
    learningObjectives: [
      "Produzir um texto narrativo completo com coerência temporal e conectores discursivos adequados;",
      "Compreender como a escolha criteriosa de palavras (estilo, luz, planos) influencia o resultado de geradores visuais;",
      "Articular o texto escrito com ilustrações que reforcem o ambiente da narrativa."
    ],
    steps: [
      {
        number: 1,
        title: "Planeamento e Escrita do Conto no Caderno",
        duration: "20 min",
        description: "Os alunos planificam a história no caderno (personagens, cenário, peripécia e desfecho), redigindo o primeiro rascunho da sua narrativa."
      },
      {
        number: 2,
        title: "Formulação e Iteração de Prompts Visuais",
        duration: "25 min",
        description: "Identificam a cena-chave do conto e redigem uma descrição detalhada; o professor projeta a imagem gerada e os alunos ajustam palavras-chave para refinar o resultado."
      },
      {
        number: 3,
        title: "Aperfeiçoamento da Narrativa e Legendagem",
        duration: "25 min",
        description: "Com a ilustração de apoio selecionada, os alunos revêem o texto no caderno, enriquecem a descrição do ambiente e criam a legenda da cena."
      },
      {
        number: 4,
        title: "Leitura Partilhada e Reflexão sobre o Processo",
        duration: "20 min",
        description: "Os grupos leem os seus contos em voz alta à turma, projetando a imagem e explicando as alterações feitas no texto e no prompt ao longo do trabalho."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Um rapaz numa floresta com um dragão.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Ilustração em estilo aguarela suave para livro de contos infantis: um rapazinho de casaco amarelo e botas azuis a segurar uma pequena lanterna, olhando com admiração para um dragão verde pequenino e amigável que dorme num tronco coberto de musgo, numa floresta iluminada por vaga-lumes."
    },
    finalProduct: "Livro de contos ilustrados da turma (em suporte de papel ou formato digital coletivo), com textos revistos e ilustrações geradas.",
    toolKeys: ["canva", "bing", "ideogram", "leonardo", "book_creator"],
    themeEmoji: "📖",
    accentColor: "sky",
    teacherPreparation: "Preparar modelo de planificação da narrativa (folha com caixas para personagens, tempo, espaço, ação); testar gerador de imagens.",
    evaluationCriteria: [
      "Coerência da estrutura narrativa (introdução, desenvolvimento, conclusão);",
      "Riqueza do vocabulário descritivo e emprego correto da pontuação;",
      "Capacidade de explicar a relação intencional entre o texto escrito e a imagem gerada."
    ],
    differentiation: [
      "Apoio: Disponibilização de conectores temporais (era uma vez, de repente, no dia seguinte, finalmente);",
      "Extensão: Redação de um epílogo descrevendo uma nova aventura das personagens."
    ],
    essentialVsExtension: {
      essential: "Escrita do conto no caderno, geração supervisionada da ilustração da cena principal e leitura à turma.",
      extension: "Compilação de todas as histórias num livro digital interativo na plataforma Book Creator."
    },
    offlineAlternative: "Ilustração manual das histórias através de técnicas mistas (recorte, colagem de texturas de papel e pintura com lápis de cor).",
    aiPedagogicalRole: "Estimulador da imaginação plástica que materializa visualmente os detalhes descritos pelos alunos no texto."
  },
  {
    id: 7,
    title: "Explorando a História da Terra com Inteligência Artificial",
    disciplines: "Ciências Naturais | História",
    cycle: "3.º Ciclo – 7.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos com pesquisa orientada no manual escolar e ferramentas de IA supervisionadas pelo professor.",
    briefDescription: "Os alunos investigam grandes etapas da história da Terra (ex.: Período Carbónico, Jurássico, Glaciações do Quaternário). Convertem dados científicos em prompts para reconstituir o paleoambiente por IA e preenchem uma ficha de auditoria científica, confrontando as imagens geradas com ilustrações paleontológicas validadas para identificar anacronismos e erros biológicos.",
    learningObjectives: [
      "Caracterizar as condições ambientais, fauna fóssil e flora predominante de um período geológico específico da história da Terra;",
      "Distinguir factos científicos comprovados por fósseis de interpretações artísticas e alucinações visuais de IA;",
      "Preencher uma ficha de auditoria científica identificando anacronismos evolutivos em representações geradas por computador."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa Paleoambiental no Manual e Fontes Credíveis",
        duration: "20 min",
        description: "Em grupos, os alunos investigam as características do período geológico atribuído (clima, atmosfera, vegetação, animais fósseis) através do manual de Ciências Naturais."
      },
      {
        number: 2,
        title: "Tradução Científica para Prompt Detalhado",
        duration: "25 min",
        description: "Redigem uma descrição rigorosa para o gerador de imagem, excluindo explicitamente espécies anacrónicas (ex.: sem plantas com flor no Carbónico)."
      },
      {
        number: 3,
        title: "Auditoria Científica e Preenchimento da Ficha",
        duration: "25 min",
        description: "Inspecionam a imagem obtida e preenchem a Ficha de Validação Científica, assinalando elementos corretos, dados incertos e anacronismos biológicos produzidos pela IA."
      },
      {
        number: 4,
        title: "Apresentação Comparativa perante a Turma",
        duration: "20 min",
        description: "Apresentam a imagem da IA ao lado de uma reconstituição paleontológica fidedigna, explicando o fenómeno geológico e as limitações científicas da ferramenta."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial dos alunos:",
      studentInitial: "Desenha a Terra no tempo dos primeiros insetos.",
      enrichedLabel: "Prompt científico enriquecido:",
      enriched: "Reconstituição paleoartística realista do Período Carbónico: floresta pantanosa dominada por fetos arborescentes gigantes e cavalinhas (sem relva nem plantas com flor), solo lodoso, atmosfera húmida com nevoeiro e uma libelinha gigante (Meganeura) com 70 cm de envergadura pousada num tronco fossilizado."
    },
    finalProduct: "Ficha de Auditoria Paleoambiental da turma (\"Ciência vs. IA\"), confrontando as imagens geradas com os factos paleontológicos validados no manual escolar.",
    toolKeys: ["mizou", "schoolai", "magicschool", "ideogram", "canva", "leonardo"],
    themeEmoji: "🌋",
    accentColor: "amber",
    teacherPreparation: "Elaborar o modelo da Ficha de Validação Científica (com campos para período, fontes consultadas, elementos confirmados e anacronismos); selecionar períodos geológicos com registo fóssil expressivo.",
    evaluationCriteria: [
      "Rigor científico no levantamento da flora, fauna e clima do período geológico;",
      "Identificação precisa de anacronismos evolutivos na imagem gerada pela IA;",
      "Clareza e fundamentação teórica durante a apresentação comparativa."
    ],
    differentiation: [
      "Apoio: Disponibilização de uma lista de verificação com espécies-guia permitidas e proibidas para a época em estudo;",
      "Extensão: Investigação das razões do gigantismo dos artrópodes no Carbónico (concentração de oxigénio atmosférico)."
    ],
    essentialVsExtension: {
      essential: "Investigação no manual, geração orientada da imagem, preenchimento da ficha de auditoria e apresentação oral na aula.",
      extension: "Construção de uma linha do tempo geológica interativa digital no Genially."
    },
    offlineAlternative: "Auditoria científica de ilustrações históricas e reconstituições antigas de manuais escolares à procura de conceções paleontológicas ultrapassadas.",
    aiPedagogicalRole: "Gerador de representações preliminares suscetíveis a erros, servindo de objeto de análise para treinar o ceticismo metodológico dos alunos."
  },
  {
    id: 8,
    title: "Estratégias Matemáticas com IA",
    disciplines: "Matemática",
    cycle: "1.º e 2.º Ciclos – 4.º e 5.º Anos",
    cycleCategories: ["1.º Ciclo", "2.º Ciclo"],
    duration: "1 aula (50 minutos)",
    modality: "Trabalho individual no caderno diário, seguido de exploração comparativa em grande grupo com chatbot mediado pelo professor.",
    briefDescription: "Os alunos resolvem problemas de cálculo mental mobilizando estratégias próprias e registando o raciocínio no caderno. Em seguida, questionam o chatbot para descobrir caminhos alternativos de cálculo mental, avaliando a correção matemática, a clareza dos passos e a eficiência de cada método face à sua própria estratégia.",
    learningObjectives: [
      "Aplicar com flexibilidade estratégias de cálculo mental (decomposição aditiva/multiplicativa, compensação, arredondamento);",
      "Comunicar raciocínios matemáticos por escrito e oralmente de forma compreensível;",
      "Comparar criticamente diferentes estratégias de resolução, avaliando a sua eficiência e validade para além da mera rapidez."
    ],
    steps: [
      {
        number: 1,
        title: "Resolução Autónoma e Registo no Caderno",
        duration: "10 min",
        description: "Cada aluno resolve o desafio de cálculo mental (ex.: 38 x 5) e regista por extenso no caderno todos os passos que realizou mentalmente."
      },
      {
        number: 2,
        title: "Partilha de Estratégias no Quadro da Sala",
        duration: "15 min",
        description: "Dois ou três alunos com métodos distintos (ex.: decomposição 30x5 + 8x5 vs. compensação 40x5 - 2x5) explicam o seu raciocínio à turma."
      },
      {
        number: 3,
        title: "Interrogação ao Chatbot e Deteção de Métodos",
        duration: "15 min",
        description: "A turma formula um prompt ao chatbot solicitando estratégias alternativas sem recurso a algoritmos verticais, verificando se os passos da máquina estão matematicamente corretos."
      },
      {
        number: 4,
        title: "Debate sobre Eficiência e Escolha Justificada",
        duration: "10 min",
        description: "Os alunos comparam os métodos apresentados, elegem a estratégia mais expedita e justificam a sua preferência segundo o tipo de números envolvidos."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Quanto é 38 x 5?",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Sou aluno do 5.º ano e resolvi mentalmente 38 x 5 fazendo (40 x 5) - (2 x 5) = 200 - 10 = 190. Mostra-me outras duas estratégias fáceis e diferentes de cálculo mental para resolver esta multiplicação passo a passo, sem utilizar o algoritmo das contas armadas."
    },
    finalProduct: "Registo comparativo no caderno diário com a resolução pessoal e as duas estratégias validadas com o apoio da IA, acompanhadas de nota justificativa da escolha pessoal.",
    toolKeys: ["chatgpt", "gemini", "magicschool", "mizou"],
    themeEmoji: "🔢",
    accentColor: "blue",
    teacherPreparation: "Selecionar cálculos numéricos propícios a múltiplas abordagens de cálculo mental (ex.: multiplicações por 5, 9, 11, 25); preparar o projetor da sala.",
    evaluationCriteria: [
      "Exatidão do cálculo efetuado no caderno;",
      "Clareza na explicitação dos passos do raciocínio mental próprio;",
      "Capacidade de analisar criticamente a validade e facilidade das estratégias propostas pela IA."
    ],
    differentiation: [
      "Apoio: Uso da reta numérica ou material multibase para apoiar a visualização da decomposição;",
      "Extensão: Aplicação das estratégias descobertas a números decimais (ex.: 3,8 x 5)."
    ],
    essentialVsExtension: {
      essential: "Resolução individual no caderno, confronto com duas estratégias geradas e registo da justificação na aula de 50 minutos.",
      extension: "Criação de um cartaz para a sala com o «Top 3 de Truques de Cálculo Mental da Turma»."
    },
    offlineAlternative: "Trabalho em pares em que cada aluno ensina a sua estratégia mental ao colega sem recurso a qualquer tecnologia digital.",
    aiPedagogicalRole: "Interlocutor alternativo que apresenta abordagens de cálculo distintas, combatendo a ideia redutora de que existe uma única forma de calcular."
  },
  {
    id: 9,
    title: "Sólidos Geométricos e Simetria",
    disciplines: "Matemática",
    cycle: "2.º Ciclo – 5.º e 6.º Anos",
    cycleCategories: ["2.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos combinando modelos físicos de sólidos geométricos, espelhos planos, GeoGebra e chatbot mediado.",
    briefDescription: "Os alunos investigam as propriedades dos poliedros (faces, vértices, arestas e a Relação de Euler) e os eixos de simetria de reflexão em figuras planas. Recorrem à IA para redigir enigmas matemáticos sobre sólidos e utilizam materiais manipuláveis e software geométrico para validar as propriedades, comprovando onde a IA alucina em raciocínio visual.",
    learningObjectives: [
      "Identificar e relacionar o número de faces, vértices e arestas de poliedros convexos (aplicando a Relação de Euler: F + V = A + 2);",
      "Identificar e traçar eixos de simetria de reflexão em polígonos regulares e figuras planas;",
      "Formular enigmas com vocabulário geométrico rigoroso e comprovar a incapacidade dos modelos puramente textuais de IA para resolver problemas de visualização espacial sem alucinar."
    ],
    steps: [
      {
        number: 1,
        title: "Manipulação Física de Poliedros e Relação de Euler",
        duration: "20 min",
        description: "Os alunos contam faces, vértices e arestas em modelos físicos tridimensionais (prismas, pirâmides, sólidos platónicos) e verificam a fórmula de Euler no caderno."
      },
      {
        number: 2,
        title: "Criação de Enigmas Matemáticos com Chatbot",
        duration: "25 min",
        description: "Com o chatbot mediado, redigem pistas em tom de enigma sobre um sólido secreto sem revelar o nome, garantindo a exatidão matemática de todas as propriedades."
      },
      {
        number: 3,
        title: "Investigação da Simetria no Plano com Espelho e GeoGebra",
        duration: "25 min",
        description: "Passando para as figuras planas das bases, os alunos utilizam espelhos físicos ou o GeoGebra para traçar e contar rigorosamente os eixos de simetria axial."
      },
      {
        number: 4,
        title: "Troca de Desafios e Teste de Alucinação da IA",
        duration: "20 min",
        description: "Os grupos trocam os enigmas e resolvem-nos; de seguida, submetem à IA uma pergunta de rotação ou corte 3D para assinalar como o modelo de linguagem falha na perceção visual."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Faz uma pergunta sobre o prisma hexagonal.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Cria um enigma matemático para o 6.º ano sobre um poliedro com 8 faces e 12 vértices. O enigma deve fornecer pistas sobre a forma geométrica das bases e das faces laterais para que a turma deduza o número exato de arestas e o nome do sólido, sem dizer a resposta no texto."
    },
    finalProduct: "Ficha de Enigmas Geométricos da Turma com chave de resolução analítica verificada através de modelos manipuláveis e eixos de simetria comprovados.",
    toolKeys: ["geogebra", "tinkercad", "chatgpt", "magicschool"],
    themeEmoji: "🔷",
    accentColor: "indigo",
    teacherPreparation: "Disponibilizar modelos físicos tridimensionais de poliedros, espelhos planos pequenos e computadores ou tablets com GeoGebra instalado ou online.",
    evaluationCriteria: [
      "Aplicação correta da Relação de Euler e contagem rigorosa de elementos dos poliedros;",
      "Identificação exata de todos os eixos de simetria das figuras planas analisadas;",
      "Capacidade de fundamentar matematicamente as falhas espaciais detetadas nas respostas da IA."
    ],
    differentiation: [
      "Apoio: Utilização de planificações em papel para contagem dos elementos antes da montagem do sólido;",
      "Extensão: Investigação de sólidos não convexos e demonstração de por que motivo a Relação de Euler não se aplica."
    ],
    essentialVsExtension: {
      essential: "Manipulação física dos poliedros, cálculo da fórmula de Euler, elaboração de 1 enigma com o chatbot e determinação de eixos com espelho.",
      extension: "Construção de construções dinâmicas de rotação de sólidos 3D no GeoGebra ou Tinkercad."
    },
    offlineAlternative: "Atividade desenvolvida exclusivamente com sólidos de madeira/acrílico, espelhos de mão e construções em papel com dobragens para descobrir simetrias.",
    aiPedagogicalRole: "Assistente na redação de enigmas verbais e objeto de auditoria face às suas fragilidades intrínsecas em geometria espacial."
  },
  {
    id: 10,
    title: "Utilização Responsável da IA",
    disciplines: "Português | Cidadania e Desenvolvimento",
    cycle: "2.º Ciclo – 5.º Ano",
    cycleCategories: ["2.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos com pesquisa orientada, confrontação de fontes e debate em plenário da turma.",
    briefDescription: "Os alunos analisam criticamente o impacto, os benefícios e os riscos da Inteligência Artificial. Entrevistam o chatbot sobre o destino dos dados pessoais, cruzam as declarações da IA com diretrizes oficiais da Comissão Nacional de Proteção de Dados (CNPD) e do Centro Internet Segura / SeguraNet, e redigem um código de conduta escolar para um uso ético e seguro.",
    learningObjectives: [
      "Identificar os riscos da cedência de dados pessoais (RGPD), perfilagem comercial, plágio e alucinações de sistemas de IA;",
      "Confrontar criticamente respostas dadas pela IA sobre si própria com orientações institucionais credíveis (SeguraNet / CNPD);",
      "Redigir regras e princípios claros em Português de Portugal para uma utilização responsável das tecnologias no contexto escolar."
    ],
    steps: [
      {
        number: 1,
        title: "Interrogação ao Chatbot sobre Privacidade",
        duration: "20 min",
        description: "Em grupos, os alunos colocam questões ao chatbot sobre o armazenamento de dados, fontes de treino e se ele pode fornecer respostas erradas ou tendenciosas."
      },
      {
        number: 2,
        title: "Confrontação com as Orientações da SeguraNet / CNPD",
        duration: "25 min",
        description: "Os alunos leem um extrato dos guias da SeguraNet/CNPD preparado pelo professor, identificando o que a IA omitiu ou suavizou relativamente à recolha de dados de menores."
      },
      {
        number: 3,
        title: "Redação de Princípios do Aluno Responsável",
        duration: "25 min",
        description: "Cada grupo redige três normas imperativas para o uso da IA na escola (abrangendo honestidade académica, proteção da privacidade e validação factual)."
      },
      {
        number: 4,
        title: "Debate em Plenário e Carta Coletiva de Compromisso",
        duration: "20 min",
        description: "A turma discute as propostas apresentadas e aprova em conjunto a versão final da «Carta de Compromisso Digital da Turma»."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "A IA é perigosa?",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Atua como especialista em segurança digital para alunos do 5.º ano. Explica de forma clara: 1) o que acontece aos dados e textos que os utilizadores escrevem numa conversa contigo; 2) por que motivo os menores não devem partilhar dados pessoais nem fotografias em ferramentas de IA; 3) como os estudantes podem confirmar se a informação que geras é verdadeira ou inventada."
    },
    finalProduct: "«Carta de Princípios para o Uso Ético da IA na Escola», redigida e assinada pelos alunos para afixação na sala de aula e divulgação no jornal escolar.",
    toolKeys: ["duck_ai", "perplexity", "copilot", "chatgpt"],
    themeEmoji: "🛡️",
    accentColor: "teal",
    teacherPreparation: "Selecionar excertos dos folhetos informativos do projeto SeguraNet e da CNPD sobre direitos digitais e proteção da privacidade de menores.",
    evaluationCriteria: [
      "Compreensão do conceito de dados pessoais e dos riscos da sua partilha em plataformas digitais;",
      "Capacidade de questionar as respostas da IA confrontando-as com fontes institucionais;",
      "Clareza e pertinência das regras propostas para a convivência escolar digital."
    ],
    differentiation: [
      "Apoio: Cartões com situações concretas do dia a dia escolar (ex.: «Copiar todo o trabalho de casa do chatbot») para análise em vez de redação abstrata;",
      "Extensão: Elaboração de uma pequena mensagem de sensibilização dirigida aos encarregados de educação."
    ],
    essentialVsExtension: {
      essential: "Confrontação das declarações da IA com o guião da SeguraNet e redação da Carta de Princípios em papel.",
      extension: "Criação de um folheto desdobrável em suporte digital para apresentação a outras turmas do ciclo."
    },
    offlineAlternative: "Análise de estudos de caso reais e dilemas éticos impressos em papel, dispensando qualquer ligação à rede durante a aula.",
    aiPedagogicalRole: "Objeto de inquirição e escrutínio crítico, evidenciando que a máquina não é autoridade neutral sobre as suas próprias condições de serviço."
  },
  {
    id: 11,
    title: "A água está em tudo: ciclo da água",
    disciplines: "Ciências Naturais",
    cycle: "2.º Ciclo – 5.º Ano",
    cycleCategories: ["2.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho colaborativo em pequenos grupos através de ambientes educativos seguros sem necessidade de registo pessoal dos alunos.",
    briefDescription: "Com base nas aprendizagens essenciais sobre os estados físicos da matéria e o ciclo hidrológico, os alunos esquematizam os processos térmicos e biológicos da circulação da água. Recorrem à IA para apoiar a formulação de perguntas científicas com distratores plausíveis e testam as questões entre si num desafio didático, auditando o rigor das respostas geradas.",
    learningObjectives: [
      "Explicar as etapas do ciclo da água (evaporação, transpiração, condensação, precipitação, escoamento, infiltração) e as mudanças de estado físico correspondentes;",
      "Formular e auditar criticamente perguntas científicas de escolha múltipla, assegurando a exatidão dos conceitos e a plausibilidade dos distratores;",
      "Aplicar estratégias de avaliação formativa entre pares através de desafios didáticos."
    ],
    steps: [
      {
        number: 1,
        title: "Esquematização Científica Prévia no Caderno",
        duration: "20 min",
        description: "Os alunos mobilizam os conhecimentos prévios e desenham o ciclo hidrológico no caderno, identificando os termos técnicos e os processos de mudança de estado associados."
      },
      {
        number: 2,
        title: "Geração e Auditoria de Perguntas com IA",
        duration: "30 min",
        description: "Utilizam o chatbot para propor perguntas com situações do quotidiano sobre o ciclo da água; os alunos analisam as respostas e corrigem imprecisões concetuais."
      },
      {
        number: 3,
        title: "Montagem do Desafio Didático",
        duration: "30 min",
        description: "Os grupos selecionam e passam a limpo as 4 melhores questões validadas numa ficha de desafio da equipa (ou plataforma digital simplificada como o Wordwall)."
      },
      {
        number: 4,
        title: "Resolução Cruzada e Avaliação entre Pares",
        duration: "20 min",
        description: "As equipas trocam os desafios entre si, respondem às perguntas dos colegas e fornecem feedback mútuo sobre a clareza e o rigor científico das opções."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Faz perguntas sobre o ciclo da água.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Cria 4 perguntas de escolha múltipla para o 5.º ano sobre o ciclo da água, focadas nas mudanças de estado físico (evaporação, condensação e solidificação) e no impacto da desflorestação na infiltração da água. Fornece 3 opções para cada pergunta, indica a correta e justifica cientificamente por que razão as opções incorretas estão erradas, em Português de Portugal."
    },
    finalProduct: "Ficha de Desafio «Missão: Proteger o Ciclo da Água», com perguntas concebidas, auditadas e resolvidas entre as equipas da turma.",
    toolKeys: ["magicschool", "mizou", "chatgpt", "notebooklm", "genially", "wordwall", "educaplay", "canva"],
    themeEmoji: "💧",
    accentColor: "sky",
    teacherPreparation: "Assegurar a revisão prévia das mudanças de estado físico da água; preparar modelos de fichas de desafio para preenchimento pelos grupos.",
    evaluationCriteria: [
      "Exatidão científica na associação entre os fenómenos do ciclo da água e as mudanças de estado físico;",
      "Qualidade das perguntas formuladas e rigor das justificações dos distratores;",
      "Capacidade de dar e receber feedback construtivo na resolução cruzada entre pares."
    ],
    differentiation: [
      "Apoio: Fornecimento de um esquema com o vocabulário obrigatório e setas de calor/arrefecimento;",
      "Extensão: Formulação de uma questão contextualizada sobre a sobre-exploração dos aquíferos em períodos de seca."
    ],
    essentialVsExtension: {
      essential: "Esquema no caderno, auditoria de 4 perguntas com a IA e troca da ficha de desafio em papel entre pares.",
      extension: "Digitalização do questionário numa plataforma de jogos educativos (Wordwall ou Kahoot) para partilha com outras turmas."
    },
    offlineAlternative: "Construção de um jogo de tabuleiro em cartolina onde o avanço das peças depende de responder a cartas com perguntas elaboradas pelos grupos.",
    aiPedagogicalRole: "Assistente de redação que propõe formulações de problemas e distratores para serem filtrados e corrigidos pelo conhecimento científico dos alunos."
  },
  {
    id: 12,
    title: "Equações em Ação",
    disciplines: "Matemática",
    cycle: "3.º Ciclo – 7.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos em ambientes de IA sem criação de contas individuais pelos alunos.",
    briefDescription: "Os alunos aprofundam a tradução entre linguagem natural e linguagem algébrica através de equações lineares do 1.º grau. Partindo da equação 3x + 15 = 60, usam o chatbot para criar um contexto do quotidiano, realizam a resolução analítica no caderno, interpretam o valor prático da incógnita e desafiam os colegas com o problema concebido.",
    learningObjectives: [
      "Traduzir situações do quotidiano para linguagem algébrica através de equações lineares do 1.º grau a uma incógnita;",
      "Resolver analiticamente equações do 1.º grau aplicando os princípios de equivalência (adição e multiplicação);",
      "Validar criticamente enunciados e soluções gerados com apoio de IA, garantindo a coerência matemática e a verosimilhança do contexto real."
    ],
    steps: [
      {
        number: 1,
        title: "Definição da Equação-Base e Contexto",
        duration: "20 min",
        description: "Os grupos partem da equação-base 3x + 15 = 60 e definem um contexto real verosímil (ex.: taxa de inscrição fixa de 15 € mais 3 € por cada jogo disputado num torneio desportivo da escola)."
      },
      {
        number: 2,
        title: "Criação do Enunciado com Chatbot",
        duration: "25 min",
        description: "Solicitam ao chatbot a elaboração de um problema contextualizado com base estrita na equação 3x + 15 = 60, com instrução expressa para não revelar a equação nem o valor de x no texto."
      },
      {
        number: 3,
        title: "Resolução Analítica e Auditoria Matemática",
        duration: "25 min",
        description: "Os alunos resolvem no caderno a equação passo a passo (3x = 60 - 15 -> 3x = 45 -> x = 15), verificam a solução por substituição e certificam-se de que a resposta de 15 jogos é realista."
      },
      {
        number: 4,
        title: "Desafio Cruzado e Comparação de Resoluções",
        duration: "20 min",
        description: "Os grupos trocam apenas os enunciados entre si, resolvem os problemas dos colegas no quadro e confrontam os métodos analíticos adotados."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Cria um problema com uma equação do 1.º grau.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Cria o enunciado de uma situação-problema cativante para alunos do 7.º ano sobre a participação de uma equipa num torneio escolar. O problema deve corresponder exatamente à equação do 1.º grau 3x + 15 = 60 (onde 15 representa uma taxa fixa de inscrição em euros e 3 representa o custo em euros por cada partida jogada, totalizando 60 euros gastos). NÃO escrevas a equação nem a resposta no enunciado."
    },
    finalProduct: "Ficha «O Desafio das Equações da Turma», reunindo o enunciado contextualizado, a equação 3x + 15 = 60, os passos da resolução analítica (x = 15) e a interpretação prática da solução.",
    toolKeys: ["magicschool", "duck_ai", "chatgpt", "gemini", "geogebra"],
    themeEmoji: "🎮",
    accentColor: "violet",
    teacherPreparation: "Estruturar o protocolo de validação algébrica em 5 passos (identificação da incógnita, equação, resolução, verificação e resposta contextualizada no problema).",
    evaluationCriteria: [
      "Tradução correta e sem ambiguidades entre a situação descrita e a equação 3x + 15 = 60;",
      "Aplicação rigorosa dos princípios de equivalência na resolução analítica até à solução x = 15;",
      "Interpretação e validação do significado prático do resultado no contexto da situação real."
    ],
    differentiation: [
      "Apoio: Representação com o modelo visual da balança de dois pratos para apoiar o isolamento do termo com incógnita;",
      "Extensão: Formulação de uma variante do problema envolvendo coeficientes fracionários ou equações com parênteses."
    ],
    essentialVsExtension: {
      essential: "Tradução do problema da equação 3x + 15 = 60, resolução analítica completa no caderno e desafio entre pares.",
      extension: "Criação de um mural partilhado no Padlet com o banco de problemas algébricos da turma e chaves de resolução."
    },
    offlineAlternative: "Elaboração manual de situações-problema pelos alunos a partir da equação atribuída, sem recorrer a meios informáticos.",
    aiPedagogicalRole: "Gerador de enredos narrativos do quotidiano para testar a destreza dos alunos na modelação algébrica."
  },
  {
    id: 13,
    title: "Mudanças Climáticas e Ciclo da Água",
    disciplines: "Ciências Naturais | Geografia",
    cycle: "3.º Ciclo – 8.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho autónomo de grupo em computadores com ferramentas de pesquisa sem recolha de dados pessoais, focado em dados oficiais abertos.",
    briefDescription: "Os alunos investigam as perturbações provocadas pelas alterações climáticas no regime hidrológico em Portugal. Utilizam a IA para apoiar a síntese de relatórios oficiais (IPMA, Agência Portuguesa do Ambiente), constroem gráficos com dados reais de precipitação e seca, interpretam tendências a longo prazo e propõem medidas fundamentadas de eficiência hídrica para a escola.",
    learningObjectives: [
      "Relacionar o aquecimento global com a intensificação de fenómenos hidrológicos extremos (secas severas e precipitações torrenciais) em Portugal continental;",
      "Construir e analisar criticamente gráficos de evolução temporal a partir de dados meteorológicos reais recolhidos em fontes oficiais;",
      "Distinguir a síntese preliminar de informação executada por IA da interpretação científica humana, propondo planos de mitigação hídrica exequíveis."
    ],
    steps: [
      {
        number: 1,
        title: "Recolha e Síntese de Dados Oficiais (IPMA/APA)",
        duration: "25 min",
        description: "Os alunos acedem a tabelas fornecidas pelo professor com registos de precipitação e índices de seca em Portugal das últimas duas décadas, usando a IA para apoiar o resumo de relatórios técnicos longos."
      },
      {
        number: 2,
        title: "Construção Rigorosa de Gráficos de Evolução",
        duration: "25 min",
        description: "Os grupos introduzem os dados verificados numa folha de cálculo ou papel milimétrico e constroem gráficos de linhas e barras, definindo escalas e unidades adequadas."
      },
      {
        number: 3,
        title: "Interpretação Científica das Tendências Climáticas",
        duration: "25 min",
        description: "Analisam as variações decenais, distinguindo oscilações sazonais de tendências de longo prazo, e debatem o impacto na recarga de aquíferos e na retenção em albufeiras."
      },
      {
        number: 4,
        title: "Elaboração do Plano de Eficiência Hídrica Escolar",
        duration: "25 min",
        description: "Com base nos dados recolhidos, redigem três medidas concretas e quantificadas de poupança e aproveitamento de água no recinto escolar."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Dá-me dados sobre a seca em Portugal.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Com base exclusivamente em relatórios oficiais abertos do IPMA e da APA relativos a Portugal continental entre 2000 e 2023, sintetiza num quadro: 1) a evolução dos períodos de seca severa e extrema no sul do país; 2) as anomalias da precipitação anual média; 3) as fontes oficiais consultadas para que possamos validar os números e construir um gráfico rigoroso."
    },
    finalProduct: "Infografia científica ou relatório analítico da equipa, contendo o gráfico de evolução temporal, a síntese validada e o plano de ação de mitigação hídrica para a escola.",
    toolKeys: ["perplexity", "notebooklm", "chatgpt", "google_sheets", "datawrapper"],
    themeEmoji: "🌍",
    accentColor: "emerald",
    teacherPreparation: "Descarregar e disponibilizar previamente o ficheiro de dados do IPMA/PORDATA sobre precipitação anual e seca meteorológica em Portugal continental.",
    evaluationCriteria: [
      "Rigor na extração, tratamento e representação gráfica de dados numéricos oficiais;",
      "Diferenciação clara entre variabilidade meteorológica pontual e tendência climática;",
      "Pertinência e exequibilidade técnica das medidas propostas no plano de ação escolar."
    ],
    differentiation: [
      "Apoio: Disponibilização de modelo pré-formatado de folha de cálculo com eixos e unidades identificadas;",
      "Extensão: Cálculo da média móvel quinquenal dos valores de precipitação para suavizar anomalias anuais."
    ],
    essentialVsExtension: {
      essential: "Tratamento de dados em tabela, construção de gráfico em papel milimétrico e redação de 3 propostas de mitigação hídrica.",
      extension: "Criação de uma visualização interativa no Datawrapper para publicação no portal da comunidade escolar."
    },
    offlineAlternative: "Análise de boletins climatológicos históricos impressos e construção integral de gráficos com régua e papel milimétrico.",
    aiPedagogicalRole: "Ferramenta de síntese de relatórios técnicos densos, cuja informação deve ser estritamente validada pelo confronto com a tabela de dados brutos."
  },
  {
    id: 14,
    title: "Conversas Iluminadas",
    disciplines: "História | Português | TIC",
    cycle: "3.º Ciclo – 8.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "3 aulas (150 minutos)",
    modality: "Trabalho interdisciplinar em pequenos grupos recorrendo a fontes primárias e secundárias, ferramentas de IA e gravação vocal direta dos alunos.",
    briefDescription: "Os alunos investigam as ideias matrizes do Iluminismo (Voltaire, Montesquieu, Rousseau, John Locke, Marquês de Pombal) através de excertos documentais de época. Recorrem ao chatbot para ensaiar a argumentação de um diálogo dramatizado, validam o texto com o docente para evitar anacronismos e citações apócrifas, e interpretam os papéis com a sua própria voz em dramatização ao vivo ou gravação multimédia.",
    learningObjectives: [
      "Caracterizar os princípios do Iluminismo (razão, progresso, separação dos poderes, soberania popular, tolerância e direito à instrução);",
      "Redigir textos dramáticos com correção terminológica e adequação conceptual ao pensamento do século XVIII;",
      "Validar a autenticidade de citações e posições ideológicas, evitando anacronismos históricos gerados por modelos de linguagem."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa Histórica e Análise de Fontes de Época",
        duration: "40 min",
        description: "Cada grupo escolhe duas personalidades do Iluminismo e estuda as suas ideias centrais a partir dos excertos do manual e fontes históricas fornecidas pelo professor."
      },
      {
        number: 2,
        title: "Estruturação e Simulação do Diálogo com Chatbot",
        duration: "40 min",
        description: "Os alunos solicitam ao chatbot sugestões de réplicas para um debate entre os pensadores, revendo criticamente o guião para assegurar o rigor conceptual e a linguagem de época."
      },
      {
        number: 3,
        title: "Validação Prévia do Guião pelo Professor",
        duration: "40 min",
        description: "O docente revê o guião com os alunos, confirmando que não existem citações falsas e que as teses (ex.: divisão dos poderes vs. contrato social) refletem com fidelidade os autores."
      },
      {
        number: 4,
        title: "Dramatização Oral e Partilha com a Turma",
        duration: "30 min",
        description: "Os alunos realizam a leitura encenada do diálogo perante a turma (a produção de um vídeo com retratos e vozes gravadas no Vocaroo constitui extensão opcional)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Escreve uma conversa entre Montesquieu e Rousseau.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Ajuda-nos a estruturar um diálogo rigoroso (4 réplicas para cada interveniente) ambientado num café parisiense em 1762 entre Montesquieu e Rousseau. O debate deve incidir sobre a melhor forma de garantir a liberdade dos cidadãos face ao absolutismo régio, confrontando a separação tripartida dos poderes do Estado com a soberania popular e o Contrato Social. Usa linguagem formal em Português de Portugal e não inventes citações apócrifas."
    },
    finalProduct: "Guião histórico rigorosamente validado e apresentação em dramatização oral da «Tertúlia dos Filósofos Iluministas» perante a turma.",
    toolKeys: ["chatgpt", "claude", "canva", "adobe_express", "vocaroo", "capcut"],
    themeEmoji: "🕯️",
    accentColor: "amber",
    teacherPreparation: "Disponibilizar uma antologia de pequenos excertos de textos originais de Locke, Montesquieu, Rousseau e Voltaire; preparar matriz de validação histórica.",
    evaluationCriteria: [
      "Fidelidade conceptual aos princípios filosóficos e políticos de cada autor;",
      "Inexistência de anacronismos temporais ou atribuição de citações apócrifas;",
      "Dicção, expressividade e respeito pela convenção do texto dramático na apresentação oral."
    ],
    differentiation: [
      "Apoio: Fornecimento de uma matriz comparativa com as teses de cada filósofo organizadas por temas (poder, religião, educação);",
      "Extensão: Integração da figura do Marquês de Pombal e debate sobre o Despotismo Esclarecido em Portugal."
    ],
    essentialVsExtension: {
      essential: "Investigação documental, redação do guião com apoio do chatbot, validação com o professor e dramatização ao vivo na aula.",
      extension: "Gravação das vozes no Vocaroo e sincronização com retratos históricos animados em aplicações de edição de vídeo."
    },
    offlineAlternative: "Dramatização de época ao vivo na sala com figurinos e adereços simbólicos concebidos pelos alunos a partir de pesquisa em biblioteca.",
    aiPedagogicalRole: "Parceiro de ensaio que simula argumentos e réplicas, exigindo validação rigorosa dos alunos através de fontes históricas primárias."
  },
  {
    id: 15,
    title: "Arte, Criatividade e Tecnologia",
    disciplines: "Educação Visual | Cidadania e Desenvolvimento",
    cycle: "3.º Ciclo – 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho em pares em computadores ou tablets, associando geradores de imagem supervisionados a software de edição gráfica.",
    briefDescription: "Os alunos criam cartazes gráficos de sensibilização social ou ambiental. Utilizam a IA generativa como geradora de elementos visuais de base e exercem o papel de diretores artísticos: aplicam princípios fundamentais de design (hierarquia visual, contraste cromático, regra dos terços e legibilidade tipográfica) num editor de imagem para conceberem uma mensagem de forte impacto cívico.",
    learningObjectives: [
      "Aplicar princípios de comunicação visual e design gráfico (ponto focal, hierarquia, harmonia de cor e legibilidade de tipos);",
      "Utilizar geradores visuais de IA de forma crítica como fornecedores de matérias-primas gráficas;",
      "Compor e editar imagens em software gráfico, assumindo a decisão autoral da mensagem e da integração tipográfica."
    ],
    steps: [
      {
        number: 1,
        title: "Definição do Conceito e Esboço da Composição",
        duration: "20 min",
        description: "Os alunos escolhem a causa (ex.: poluição plástica nos oceanos, pegada carbónica) e desenham no papel a grelha do cartaz, demarcando o ponto focal e o local do slogan."
      },
      {
        number: 2,
        title: "Geração de Fundos e Elementos com IA",
        duration: "30 min",
        description: "Redigem prompts artísticos com termos técnicos de iluminação e perspetiva para gerar uma imagem conceitual sem texto, deixando espaço negativo para a tipografia."
      },
      {
        number: 3,
        title: "Edição, Ajuste Cromático e Tipografia",
        duration: "30 min",
        description: "Importam o elemento visual para um editor gráfico (Photopea, Pixlr ou Canva), calibram o contraste, recortam detalhes e integram o slogan com tipografia adequada."
      },
      {
        number: 4,
        title: "Exposição Crítica e Defesa da Direção Artística",
        duration: "20 min",
        description: "Apresentam o cartaz final à turma, confrontando a imagem bruta gerada pela IA com a peça gráfica editada e justificando as opções de design tomadas."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Faz um cartaz sobre o plástico no mar.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Composição visual conceitual minimalista para cartaz de intervenção ecológica: uma tartaruga marinha a nadar em direção à superfície vista de baixo, cuja carapaça se dissolve gradualmente em garrafas de plástico transparente. Iluminação lateral dramática de oceano profundo, com o terço superior em azul-marinho uniforme e sem texto, deixando espaço livre para a inserção de tipografia."
    },
    finalProduct: "Cartaz digital de sensibilização cívica pronto para impressão, acompanhado de memória descritiva justificando a hierarquia visual e a paleta de cores.",
    toolKeys: ["bing", "ideogram", "fotor", "photopea", "pixlr", "canva"],
    themeEmoji: "🎨",
    accentColor: "teal",
    teacherPreparation: "Preparar uma apresentação breve sobre hierarquia tipográfica e contraste visual; disponibilizar ligações diretas a editores gráficos gratuitos online.",
    evaluationCriteria: [
      "Clareza da mensagem visual e eficácia na transmissão do apelo cívico;",
      "Aplicação coerente dos princípios de hierarquia visual, contraste e legibilidade;",
      "Grau de transformação autoral e edição gráfica demonstrado entre a imagem bruta da IA e o cartaz final."
    ],
    differentiation: [
      "Apoio: Disponibilização de modelos de grelha de composição com proporções modulares pré-definidas;",
      "Extensão: Criação de variantes do cartaz redimensionadas para formatos de histórias ou publicações de redes sociais escolares."
    ],
    essentialVsExtension: {
      essential: "Esboço em papel, geração de 1 imagem base, edição da composição com slogan no editor gráfico e apresentação em sala.",
      extension: "Impressão em grande formato para dinamização de uma campanha de sensibilização na biblioteca ou átrio da escola."
    },
    offlineAlternative: "Realização do cartaz através de técnica mista de colagem manual de recortes de imprensa, estêncil e pintura a guache sobre cartolina.",
    aiPedagogicalRole: "Produtor de texturas e elementos visuais brutos que requerem triagem, tratamento e montagem crítica pelo aluno."
  },
  {
    id: 16,
    title: "Texto de Jornal: Artigo de Opinião",
    disciplines: "Português",
    cycle: "3.º Ciclo – 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho individual de escrita autónoma, apoiado por plataformas de IA sem registo pessoal nas fases de pré-escrita e revisão diagnóstica.",
    briefDescription: "Os alunos exercitam a produção de um artigo de opinião estruturado sobre um tema contemporâneo controverso. A redação é executada integralmente pelo estudante, que recorre ao chatbot exclusivamente como «advogado do diabo» para testar contra-argumentos e detetar fragilidades retóricas ou erros de pontuação, decidindo autonomamente as alterações a introduzir no seu texto.",
    learningObjectives: [
      "Dominar a estrutura retórica do artigo de opinião (introdução com tese, corpo argumentativo com evidências e refutação, e conclusão reiterativa);",
      "Mobilizar conectores discursivos variados e manter a coesão e coerência textual em Português de Portugal;",
      "Utilizar a IA estritamente como consultora de revisão e interlocutora de contra-argumentação, sem delegar a autoria da escrita."
    ],
    steps: [
      {
        number: 1,
        title: "Definição da Tese e Esboço dos Argumentos",
        duration: "20 min",
        description: "O aluno escolhe um tema da atualidade (ex.: sustentabilidade, regulação das redes sociais), formula uma tese clara e esquematiza no caderno dois argumentos fundamentados."
      },
      {
        number: 2,
        title: "Redação Autónoma do Rascunho",
        duration: "30 min",
        description: "O aluno redige o texto completo de forma 100% individual, assegurando a progressão temática e o rigor sintático sem recurso a ferramentas geradoras."
      },
      {
        number: 3,
        title: "Consultoria com a IA como «Advogado do Diabo»",
        duration: "30 min",
        description: "O aluno submete o seu rascunho com instrução rigorosa para a IA não reescrever o texto, mas apenas indicar contra-argumentos possíveis e assinalar repetições ou falhas de coesão."
      },
      {
        number: 4,
        title: "Reescrita Autoral e Registo das Opções de Revisão",
        duration: "20 min",
        description: "O aluno analisa as críticas apontadas, decide quais as que faz sentido acolher, procede à reescrita final e anexa uma breve nota justificando as opções tomadas."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Corrige o meu texto de opinião.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Atua como professor de Português do 9.º ano e especialista em retórica (Português de Portugal). Lê o seguinte rascunho do meu artigo de opinião. NÃO reescrevas nenhuma frase do meu texto. Aponta apenas em três tópicos concisos: 1) se a minha tese está sustentada de forma lógica pelos dois argumentos; 2) qual é o contra-argumento mais forte que a minha tese ainda não respondeu; 3) onde detetas problemas de pontuação ou conectores repetitivos."
    },
    finalProduct: "Artigo de opinião final revisto pelo aluno, acompanhado da folha de rascunho inicial e da justificação das alterações retóricas introduzidas.",
    toolKeys: ["duck_ai", "magicschool", "perplexity", "chatgpt", "claude", "google_docs", "languagetool"],
    themeEmoji: "📰",
    accentColor: "indigo",
    teacherPreparation: "Elaborar folha de apoio com os operadores argumentativos e a estrutura do artigo de opinião; reforçar a proibição de cópia integral da IA.",
    evaluationCriteria: [
      "Clareza e solidez da tese defendida e consistência dos argumentos apresentados;",
      "Correção sintática, riqueza lexical e pontuação correta segundo a norma do Português de Portugal;",
      "Capacidade demonstrada de selecionar criticamente o feedback da máquina e melhorar o próprio texto de forma autónoma."
    ],
    differentiation: [
      "Apoio: Disponibilização de uma grelha orientadora de autorrevisão com perguntas-guia antes da submissão à IA;",
      "Extensão: Defesa oral dos argumentos do artigo perante um painel de colegas da turma."
    ],
    essentialVsExtension: {
      essential: "Redação manuscrita do rascunho, consulta das três perguntas de revisão diagnóstica e entrega do artigo final revisto.",
      extension: "Publicação do artigo no jornal escolar ou na página da biblioteca da escola mediante autorização do aluno e da escola."
    },
    offlineAlternative: "Processo de revisão cruzada entre pares («leitura em espelho») com preenchimento mútuo de uma grelha de avaliação formativa.",
    aiPedagogicalRole: "Crítico textual e adversário de treino que coloca objeções lógicas sem interferir na redação e voz própria do aluno."
  },
  {
    id: 17,
    title: "Música Educativa com IA",
    disciplines: "Português",
    cycle: "2.º e 3.º Ciclos – 5.º ao 9.º Ano",
    cycleCategories: ["2.º Ciclo", "3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho coletivo orientado pelo docente na sala de aula ou em pequenos grupos com recurso a auscultadores.",
    briefDescription: "O professor ou a turma recorre à IA para apoiar a composição de uma canção educativa com métrica e rima regulares, focada na consolidação de conteúdos do Dicionário Terminológico (ex.: classes de palavras, orações coordenadas e subordinadas). A música é explorada em sala como recurso motivacional, seguida imediatamente de exercícios de treino e aplicação prática.",
    learningObjectives: [
      "Consolidar conceitos e regras gramaticais segundo o Dicionário Terminológico (DT) em vigor no currículo de Português;",
      "Desenvolver a sensibilidade rítmica, métrica poética e rima na construção de versos didáticos;",
      "Mobilizar a aprendizagem adquirida na resolução autónoma de exercícios gramaticais aplicados."
    ],
    steps: [
      {
        number: 1,
        title: "Sistematização Curricular e Banco de Termos do DT",
        duration: "20 min",
        description: "Revisão no quadro da regra gramatical em estudo (ex.: distinção entre determinantes e pronomes demonstrativos) e listagem dos conceitos obrigatórios."
      },
      {
        number: 2,
        title: "Redação Rítmica da Letra e Rimas",
        duration: "30 min",
        description: "A turma (ou grupos) redige as estrofes rimadas em redondilha maior, recorrendo ao chatbot apenas para sugerir sinónimos com métrica adequada sem adulterar os conceitos."
      },
      {
        number: 3,
        title: "Geração Musical e Análise Auditiva",
        duration: "30 min",
        description: "Insere-se a letra validada na ferramenta musical (Suno ou similar) definindo o género apropriado; a turma escuta criticamente a dicção e a acentuação tónica das palavras cantadas."
      },
      {
        number: 4,
        title: "Exercícios Práticos de Aplicação Gramatical",
        duration: "20 min",
        description: "Os alunos cantam a música com a letra projetada e resolvem individualmente uma ficha de consolidação gramatical aplicando as regras sistematizadas na canção."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do professor / aluno:",
      studentInitial: "Faz uma música para aprender gramática.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Gera a letra para uma canção educativa em Português de Portugal para o 2.º Ciclo sobre a diferença entre Determinantes e Pronomes Demonstrativos (este, esse, aquele). O refrão deve ser rítmico e deixar claro que o determinante acompanha o nome e o pronome o substitui. Usa estrofes de quatro versos em redondilha maior (7 sílabas métricas) com rimas simples AABB."
    },
    finalProduct: "Faixa musical educativa da turma e ficha de exercícios gramaticais correspondente preenchida pelos alunos.",
    toolKeys: ["chatgpt", "copilot", "suno", "canva", "capcut"],
    themeEmoji: "🎶",
    accentColor: "rose",
    teacherPreparation: "Selecionar o conteúdo gramatical deficitário na turma a partir do Dicionário Terminológico; preparar a ficha de exercícios formativos.",
    evaluationCriteria: [
      "Rigor na aplicação dos conceitos do Dicionário Terminológico na letra e nos exercícios;",
      "Regularidade rítmica e adequação da métrica dos versos criados;",
      "Desempenho na resolução individual da ficha prática de aplicação gramatical."
    ],
    differentiation: [
      "Apoio: Fornecimento de versos pré-estruturados com lacunas para preenchimento dos conceitos-chave;",
      "Extensão: Interpretação instrumental ou canto ao vivo por alunos com formação musical."
    ],
    essentialVsExtension: {
      essential: "Criação da letra, geração da faixa áudio e resolução individual da ficha de exercícios gramaticais.",
      extension: "Criação de um vídeo com a letra da música sincronizada (lyric video) no Canva ou CapCut."
    },
    offlineAlternative: "Adaptação da letra a uma melodia tradicional portuguesa conhecida e canto conjunto em coro na sala de aula sem recurso a tecnologias digitais.",
    aiPedagogicalRole: "Arranjador sonoro que confere dinâmica rítmica e apelo mnésico a conteúdos técnicos e abstratos da gramática escolar."
  },
  {
    id: 18,
    title: "Debate com IA",
    disciplines: "Português | História | Cidadania e Desenvolvimento",
    cycle: "3.º Ciclo – 7.º ao 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "3 aulas (150 minutos)",
    modality: "Trabalho de pesquisa e preparação em grupos em ambiente seguro, culminando em debate formal presencial na sala de aula moderado pelo professor.",
    briefDescription: "Os alunos preparam um debate regrado sobre um tema cívico fraturante. Utilizam um chatbot exclusivamente como «adversário de treino» para identificar falhas nos seus argumentos e antecipar contra-argumentos. No debate presencial, confrontam ideias sem recorrer a ecrãs, sendo avaliados por critérios objetivos de argumentação, refutação e respeito pelo contraditório.",
    learningObjectives: [
      "Construir linhas de argumentação fundamentadas em evidências fidedignas e detetar falácias retóricas;",
      "Desenvolver a comunicação oral, o controlo do tempo e o respeito pelas regras do debate formal;",
      "Compreender que as posições geradas pela IA são sínteses estatísticas de personas virtuais e não opiniões humanas de autoridade."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa Temática e Treino com o Chatbot",
        duration: "40 min",
        description: "Em equipas (pró e contra), os alunos pesquisam dados fidedignos e submetem os seus argumentos ao chatbot, solicitando que aponte fragilidades e simule refutações severas."
      },
      {
        number: 2,
        title: "Construção das Fichas de Intervenção Oral",
        duration: "40 min",
        description: "Os grupos sintetizam os argumentos principais, as evidências factuais e as réplicas preparadas em fichas de papel, estruturando os tempos de abertura, debate livre e conclusão."
      },
      {
        number: 3,
        title: "Realização do Debate Presencial Regrado",
        duration: "40 min",
        description: "Sob a moderação do professor e sem computadores na bancada, as equipas realizam o debate ao vivo, defendendo os seus pontos de vista com clareza, eloquência e escuta ativa."
      },
      {
        number: 4,
        title: "Avaliação Formativa e Balanço Argumentativo",
        duration: "30 min",
        description: "A turma e o professor analisam o desempenho através de uma grelha com critérios objetivos (força dos dados, refutação, ausência de ataques pessoais), evitando votações de mera simpatia."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Dá-me argumentos contra as redes sociais.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Estamos a preparar um debate escolar do 8.º ano sobre: 'Deve ser proibido o acesso a redes sociais a menores de 16 anos?'. A nossa equipa vai defender o NÃO. Atua como o nosso oponente no debate: apresenta dois argumentos muito sólidos e baseados em direitos digitais e educação mediática que rebatam a nossa posição, e coloca-nos uma pergunta difícil para treinarmos a nossa resposta oral."
    },
    finalProduct: "Debate presencial formal regrado na sala de aula, acompanhado das fichas com a síntese de argumentos e evidências organizadas por cada equipa.",
    toolKeys: ["claude", "chatgpt", "duck_ai", "mizou", "canva", "vocaroo", "padlet"],
    themeEmoji: "🎙️",
    accentColor: "purple",
    teacherPreparation: "Definir o regulamento de tempos do debate formal (discursos de abertura, refutação, interpelação cruzada e alegações finais); preparar a grelha de avaliação das intervenções orais.",
    evaluationCriteria: [
      "Pertinência, clareza e sustentação factual dos argumentos apresentados;",
      "Capacidade de escuta ativa e eficácia na refutação direta das ideias do opositor;",
      "Postura cívica, respeito pelas regras protocolares do debate e cumprimento escrupuloso dos tempos de fala."
    ],
    differentiation: [
      "Apoio: Fichas com estruturas de introdução discursiva («Concordamos que..., no entanto os dados mostram...»);",
      "Extensão: Atribuição do papel de juiz de tempo ou moderador assistente do debate."
    ],
    essentialVsExtension: {
      essential: "Pesquisa documental, sessão de treino com a IA, preparação das fichas e realização do debate presencial na aula.",
      extension: "Gravação áudio do debate e compilação de um episódio especial para a rádio escolar."
    },
    offlineAlternative: "Realização integral da pesquisa em publicações periódicas e livros da biblioteca escolar, sem mediação de sistemas de inteligência artificial.",
    aiPedagogicalRole: "Simulador de contra-argumentação rápida para fortalecer o pensamento crítico antes da exposição oral entre pares."
  },
  {
    id: 19,
    title: "Rádio Interativa de Turma com IA",
    disciplines: "Português | História | TIC",
    cycle: "3.º Ciclo e Secundário – 8.º ao 12.º Ano",
    cycleCategories: ["3.º Ciclo", "Secundário"],
    duration: "3 aulas (150 minutos)",
    modality: "Trabalho colaborativo de projeto com computadores na fase de pesquisa e telemóveis/gravadores de sala para captação sonora.",
    briefDescription: "Os alunos concebem um episódio de programa de rádio escolar (3 a 5 minutos) sobre um tema curricular. Carregam fontes históricas e científicas credíveis no NotebookLM para gerar uma síntese inicial, auditam os conteúdos confrontando-os com os textos originais, corrigem expressões para o Português de Portugal e gravam o episódio com as suas próprias vozes.",
    learningObjectives: [
      "Confrontar sínteses geradas por modelos de linguagem com documentos-fonte credíveis, identificando omissões e desvios factuais;",
      "Adequar a linguagem radiofónica à norma do Português de Portugal (eliminando construções típicas do Português do Brasil de ferramentas automáticas);",
      "Escrever guiões de rádio dinâmicos e desenvolver técnicas de locução, colocação de voz e clareza de dicção."
    ],
    steps: [
      {
        number: 1,
        title: "Curadoria Documental e Síntese no NotebookLM",
        duration: "40 min",
        description: "Os grupos selecionam 3 a 5 fontes rigorosas (artigos científicos, documentos históricos em PDF) e utilizam o NotebookLM para gerar uma síntese do material."
      },
      {
        number: 2,
        title: "Auditoria Crítica e Confronto com as Fontes",
        duration: "40 min",
        description: "Os alunos comparam a síntese gerada com os textos originais, verificam se ocorreram alucinações históricas e corrigem os termos lexicais para o Português Europeu."
      },
      {
        number: 3,
        title: "Escrita do Guião Radiofónico com Rubricas",
        duration: "40 min",
        description: "Redigem o guião original do programa (3 a 5 minutos), integrando introdução informativa, debate de pontos controversos e perguntas dos ouvintes."
      },
      {
        number: 4,
        title: "Gravação Vocal e Emissão Escolar",
        duration: "30 min",
        description: "Com o telemóvel ou gravador simples do computador (Vocaroo ou Audacity), os alunos gravam a locução com as suas próprias vozes e partilham a faixa com a turma."
      }
    ],
    promptExample: {
      initialLabel: "Instrução no NotebookLM:",
      studentInitial: "Cria um resumo sobre a Revolução Industrial para o podcast.",
      enrichedLabel: "Instrução enriquecida com a turma:",
      enriched: "Com base estrita nas 4 fontes documentais carregadas sobre o 25 de Abril de 1974, elabora uma síntese em Português de Portugal destacando os três objetivos fundamentais do Movimento das Forças Armadas (Democratizar, Descolonizar, Desenvolver). Sugere duas questões controversas com que os ouvintes da nossa rádio escolar possam debater o impacto na sociedade atual."
    },
    finalProduct: "Episódio de rádio/podcast escolar em formato áudio MP3 (3 a 5 minutos) com guião textual arquivado no portefólio da turma.",
    toolKeys: ["notebooklm", "google_docs", "vocaroo", "audacity", "canva", "padlet"],
    themeEmoji: "📻",
    accentColor: "sky",
    teacherPreparation: "Selecionar os documentos-fonte em PDF a carregar na plataforma; testar o equipamento de captação de áudio e auscultadores.",
    evaluationCriteria: [
      "Fidelidade rigorosa aos documentos-fonte e ausência de distorções históricas/científicas;",
      "Correção linguística segundo a norma do Português de Portugal e adequação ao registo de comunicação radiofónica;",
      "Clareza de dicção, expressividade na locução e respeito pela duração planeada (3 a 5 minutos)."
    ],
    differentiation: [
      "Apoio: Disponibilização de uma matriz estruturada de guião com marcação dos tempos para cada locutor;",
      "Extensão: Montagem e mistura de efeitos sonoros e música de fundo no Audacity."
    ],
    essentialVsExtension: {
      essential: "Síntese dos documentos no NotebookLM, redação do guião e gravação direta com telemóvel ou Vocaroo para audição na sala.",
      extension: "Emissão oficial do episódio na rádio da escola e publicação no portal educativo da instituição."
    },
    offlineAlternative: "Realização do programa de rádio ao vivo na sala de aula através de leitura partilhada e sonoplastia manual perante a turma.",
    aiPedagogicalRole: "Assistente de cruzamento e resumo de documentos densos, exigindo revisão crítica humana rigorosa sobre a autenticidade factual e a norma linguística."
  },
  {
    id: 20,
    title: "Entrevistas Simuladas (Carreiras e Profissões)",
    disciplines: "Cidadania e Desenvolvimento | Inglês | História",
    cycle: "3.º Ciclo e Secundário – 9.º ao 12.º Ano",
    cycleCategories: ["3.º Ciclo", "Secundário"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho em pares em computadores ou tablets, articulado com dramatização orientada.",
    briefDescription: "Os alunos investigam carreiras profissionais reais no âmbito da orientação vocacional. Configuram o chatbot para assumir a persona de um profissional qualificado, realizam uma entrevista simulada conduzida por perguntas abertas e aprofundadas, confrontam as respostas da IA com a realidade das qualificações e do mercado de trabalho em Portugal, e apresentam as conclusões à turma.",
    learningObjectives: [
      "Explorar percursos formativos, perfis de competências e dilemas deontológicos de profissões contemporâneas e emergentes;",
      "Formular perguntas abertas de entrevista que exijam reflexão aprofundada, evitando questões superficiais de resposta fechada;",
      "Avaliar criticamente a verosimilhança das respostas geradas pela IA, distinguindo a simulação ficcional da realidade do sistema educativo e profissional português."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa Vocacional e Elaboração do Guião",
        duration: "20 min",
        description: "Cada par escolhe uma profissão, consulta fontes oficiais sobre o percurso formativo em Portugal (DGES/ANQEP) e redige um guião de 6 perguntas aprofundadas."
      },
      {
        number: 2,
        title: "Simulação da Entrevista com o Chatbot",
        duration: "30 min",
        description: "Os alunos instruem o chatbot para assumir a persona desse profissional experiente e conduzem a entrevista pergunta a pergunta, registando as respostas obtidas."
      },
      {
        number: 3,
        title: "Auditoria e Confronto com a Realidade Nacional",
        duration: "30 min",
        description: "Confrontam as respostas com fontes oficiais (ex.: se os cursos, ordens profissionais ou salários mencionados correspondem à realidade nacional portuguesa)."
      },
      {
        number: 4,
        title: "Dramatização ou Apresentação dos Destaques",
        duration: "20 min",
        description: "Os alunos apresentam um excerto dramatizado de dois minutos da entrevista à turma, destacando as descobertas sobre a profissão e os limites da simulação da IA."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Finge que és um engenheiro de energias renováveis para eu te entrevistar.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Assume a persona de uma Engenheira Eletrotécnica especialista em redes de energia eólica marítima em Portugal, com 10 anos de experiência profissional. Eu sou um estudante do 10.º ano e vou entrevistar-te para a disciplina de Cidadania no âmbito da orientação vocacional. Responde apenas a uma pergunta de cada vez, de forma ponderada e realista, referindo as competências matemáticas, os desafios éticos diários e o percurso universitário necessário em Portugal. Podemos começar com a primeira pergunta?"
    },
    finalProduct: "Ficha de Perfil de Carreira e apresentação oral dos momentos decisivos da entrevista simulada perante os colegas de turma.",
    toolKeys: ["duck_ai", "chatgpt", "perplexity", "bing", "canva", "vocaroo"],
    themeEmoji: "💼",
    accentColor: "blue",
    teacherPreparation: "Reunir hiperligações e materiais da DGES (Acesso ao Ensino Superior) e do Catálogo Nacional de Qualificações da ANQEP; preparar grelha de apoio à formulação de entrevistas.",
    evaluationCriteria: [
      "Pertinência, profundidade e rigor conceptual das perguntas preparadas no guião;",
      "Capacidade crítica de identificar desvios entre a resposta gerada pela IA e o enquadramento profissional português;",
      "Clareza de dicção, postura e síntese na apresentação oral ou dramatização perante a turma."
    ],
    differentiation: [
      "Apoio: Fornecimento de matriz com tópicos essenciais de questionamento (habilitações, rotina diária, desafios éticos, evolução tecnológica);",
      "Extensão: Realização da entrevista e apresentação integral em língua inglesa no quadro da disciplina de Inglês."
    ],
    essentialVsExtension: {
      essential: "Conceção do guião de 6 perguntas, simulação com o chatbot, preenchimento da ficha de carreira e apresentação breve em aula.",
      extension: "Gravação áudio/vídeo da entrevista dramatizada em estúdio multimédia ou convite a um profissional real para validação em sala."
    },
    offlineAlternative: "Realização da entrevista presencial a um profissional real da comunidade escolar ou local (encarregado de educação, técnico ou professor).",
    aiPedagogicalRole: "Emulador de papéis (roleplay) que permite aos alunos testar perguntas e exercitar a postura interrogativa antes de contactos com o mundo profissional real."
  }
];
