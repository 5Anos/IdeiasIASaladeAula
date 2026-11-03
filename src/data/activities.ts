export interface ActivityStep {
  number: number;
  title: string;
  description: string;
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
}

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "A IA Desenha o que Eu Imagino",
    disciplines: "Português | Educação Artística",
    cycle: "1.º Ciclo – 1.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "1 aula (45 a 60 minutos)",
    modality: "Mediada pelo professor (projetada no quadro interativo), garantindo a proteção de dados e respeitando a idade mínima de utilização das ferramentas.",
    briefDescription: "Os alunos exploram como a Inteligência Artificial consegue transformar palavras em imagens. A partir da criação de uma frase simples sobre um objeto ou personagem invulgar, a turma assiste à geração da imagem pela IA com o apoio do professor, compara o resultado com a ideia original e cada aluno desenha a sua própria versão no papel, refletindo sobre as diferenças entre a criação da máquina e a imaginação humana.",
    learningObjectives: [
      "Desenvolver a expressão oral e escrita (construção de frases simples e uso de adjetivos);",
      "Estimular a criatividade visual;",
      "Compreender de forma elementar como a Inteligência Artificial interpreta instruções de texto (prompts)."
    ],
    steps: [
      {
        number: 1,
        title: "Imaginação e Escrita",
        description: "Cada aluno imagina um objeto ou personagem invulgar (ex.: um lápis que voa, um peixe com rodas ou uma casa feita de chocolate) e escreve ou dita uma frase simples para o descrever."
      },
      {
        number: 2,
        title: "Geração com IA (Em grande grupo)",
        description: "Com o computador ligado ao projetor, o professor seleciona algumas frases da turma e insere-as na ferramenta de geração de imagem."
      },
      {
        number: 3,
        title: "Refinamento do Prompt",
        description: "A turma observa o resultado e analisa se a imagem corresponde ao que o aluno imaginou. O professor aproveita para mostrar como acrescentar detalhes (cores, estilos, cenários) altera o resultado."
      },
      {
        number: 4,
        title: "Criação Manual e Reflexão",
        description: "Cada aluno desenha a sua própria versão no papel. No final, comparam os desenhos humanos com os da máquina e discutem o que a IA fez bem, o que falhou (ex.: \"esqueceu-se das rodas do peixe\") e por que razão a imaginação humana é única."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Um peixe com rodas.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Ilustração infantil colorida, estilo desenho animado, de um peixe azul sorridente com quatro rodas de carro, a andar numa estrada no fundo do mar."
    },
    finalProduct: "Galeria ou mural na sala de aula (\"Eu vs. IA\") com a frase original, a imagem impressa gerada pela IA e o desenho feito pelo aluno lado a lado.",
    toolKeys: ["canva", "bing", "adobe_express", "ideogram", "leonardo"],
    themeEmoji: "🎨",
    accentColor: "blue",
    isFirstImageSpecial: true
  },
  {
    id: 2,
    title: "A IA Adivinha o Animal",
    disciplines: "Estudo do Meio",
    cycle: "1.º Ciclo",
    cycleCategories: ["1.º Ciclo"],
    duration: "1 aula (45 a 60 minutos)",
    modality: "Mediada pelo professor no quadro interativo ou em pequenos grupos através de ambientes seguros sem registo de dados (ex.: MagicSchool Student / Mizou).",
    briefDescription: "Os alunos escolhem um animal e escrevem pistas sobre as suas características sem revelar o nome, desafiando um chatbot a adivinhar qual é. Ao testarem as pistas, verificam se foram claras, melhoram as descrições e refletem em turma sobre a importância da precisão vocabular e científica para que a IA compreenda a informação.",
    learningObjectives: [
      "Identificar características externas, habitat, locomoção e revestimento dos animais;",
      "Desenvolver a precisão na escrita descritiva;",
      "Perceber como a clareza da informação fornecida condiciona a resposta de um sistema de IA."
    ],
    steps: [
      {
        number: 1,
        title: "Escolha e Escrita de Pistas",
        description: "Em pares, os alunos escolhem um animal secreto e escrevem 3 a 4 pistas sobre o seu habitat, alimentação e revestimento corporal, sem dizer o nome."
      },
      {
        number: 2,
        title: "Desafio ao Chatbot",
        description: "O professor (ou os grupos) insere as pistas no chatbot e pede-lhe para adivinhar o animal."
      },
      {
        number: 3,
        title: "Análise e Melhoria",
        description: "Se a IA acertar logo na primeira pista, discutem se a pista foi demasiado óbvia; se errar, identificam que informação científica faltou e reescrevem as pistas de forma mais rigorosa."
      },
      {
        number: 4,
        title: "Reflexão Final",
        description: "A turma debate que tipo de descrições ajudam a máquina a acertar e como estruturar melhor a informação."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Vamos jogar às adivinhas. Tenho quatro patas, pelo e gosto de correr. Que animal sou?",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Vamos jogar às adivinhas. Sou um mamífero carnívoro da savana africana, tenho o corpo coberto de pelo amarelo com pintas pretas e sou o animal terrestre mais rápido do mundo. Que animal sou?"
    },
    finalProduct: "Baralho de cartas \"Quem sou eu? – Edição Animal\" ilustrado pelos alunos, contendo as pistas validadas e aperfeiçoadas após o teste com a IA.",
    toolKeys: ["magicschool", "mizou", "chatgpt", "gemini"],
    themeEmoji: "🐾",
    accentColor: "emerald"
  },
  {
    id: 3,
    title: "Criar Sons de um Mundo Imaginário",
    disciplines: "Expressões Artísticas | Português",
    cycle: "1.º Ciclo",
    cycleCategories: ["1.º Ciclo"],
    duration: "1 a 2 aulas (60 a 90 minutos)",
    modality: "Mediada pelo professor (em grande grupo ou por estações com apoio docente).",
    briefDescription: "Os alunos inventam um lugar imaginário (floresta mágica, planeta gelado, cidade submarina) e utilizam ferramentas de IA para gerar efeitos sonoros ou músicas que representem esse ambiente. A turma ouve as criações de olhos fechados para tentar adivinhar o cenário, e cada grupo explica como escolheu os sons e que emoções pretendia transmitir.",
    learningObjectives: [
      "Explorar a paisagem sonora e a relação entre som, espaço e emoção;",
      "Desenvolver o vocabulário expressivo e sensorial;",
      "Utilizar a IA como ferramenta de composição artística e sonora."
    ],
    steps: [
      {
        number: 1,
        title: "Concepção do Cenário",
        description: "Em pequenos grupos, os alunos inventam um lugar fantástico e listam os sons que lá existiriam (ex.: vento suave, passos na neve, bolhas de água, música misteriosa)."
      },
      {
        number: 2,
        title: "Geração Sonora com IA",
        description: "Com a ajuda do professor, transformam essas descrições em prompts nas ferramentas de geração de áudio ou música."
      },
      {
        number: 3,
        title: "Audição Cega",
        description: "Os restantes colegas fecham os olhos, ouvem a faixa gerada e tentam descrever o ambiente imaginado."
      },
      {
        number: 4,
        title: "Partilha e Justificação",
        description: "Cada grupo revela o seu mundo imaginário e explica as escolhas sonoras e as emoções associadas."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Sons de uma cidade debaixo de água.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Música instrumental calma e mágica com sons de bolhas de água suaves, canto de baleias ao longe e sinos de cristal, transmitindo paz e mistério numa cidade submarina."
    },
    finalProduct: "Mapa ilustrado dos \"Mundos Imaginários da Turma\" com códigos QR colados, permitindo ouvir a paisagem sonora de cada mundo através de um telemóvel ou tablet.",
    toolKeys: ["suno", "elevenlabs", "stable_audio", "soundful"],
    themeEmoji: "🎵",
    accentColor: "indigo"
  },
  {
    id: 4,
    title: "O Arquiteto das Formas Geométricas",
    disciplines: "Matemática | Expressão Plástica",
    cycle: "1.º Ciclo – 1.º ou 2.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "1 aula (60 minutos)",
    modality: "Mediada pelo professor (projetada no quadro interativo).",
    briefDescription: "Os alunos aplicam os seus conhecimentos sobre figuras planas e sólidos geométricos para construir uma \"Cidade do Futuro\" com recurso à IA. Em vez de pedirem diretamente uma cidade, dão instruções puramente matemáticas sobre a posição das formas, promovendo o pensamento computacional e verificando no final se a máquina respeitou as regras geométricas.",
    learningObjectives: [
      "Identificar e distinguir figuras geométricas (quadrados, triângulos, círculos) e sólidos (cubos, pirâmides, esferas, cilindros);",
      "Desenvolver o vocabulário espacial e o pensamento computacional (decomposição de objetos complexos em formas simples)."
    ],
    steps: [
      {
        number: 1,
        title: "Planeamento Geométrico",
        description: "Os alunos pensam num edifício ou veículo para a \"Cidade do Futuro\", mas decompõem-no apenas em sólidos e figuras geométricas."
      },
      {
        number: 2,
        title: "Formulação do Prompt Matemático",
        description: "Os alunos ditam ao professor instruções precisas usando linguagem matemática (sem usar palavras como \"telhado\" ou \"parede\")."
      },
      {
        number: 3,
        title: "Verificação e Contagem",
        description: "Após a IA gerar a imagem, os alunos projetam-na no quadro, contam quantas figuras de cada tipo conseguem identificar e avaliam se a IA cumpriu as instruções ou se cometeu erros geométricos."
      },
      {
        number: 4,
        title: "Recriação Plástica",
        description: "Os alunos constroem ou desenham o seu edifício corrigindo eventuais falhas da IA."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Gera uma casa moderna com formas geométricas.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Gera uma construção em 3D feita apenas de blocos geométricos coloridos: tem um cubo azul grande em baixo, uma pirâmide amarela em cima do cubo e dois cilindros verdes de cada lado, ladeada por árvores em forma de esfera."
    },
    finalProduct: "Painel coletivo da \"Cidade Geométrica do Futuro\", combinando as imagens geradas pela IA com uma tabela de contagem de sólidos e figuras identificados pela turma.",
    toolKeys: ["ideogram", "bing", "canva", "magicschool"],
    themeEmoji: "📐",
    accentColor: "amber"
  },
  {
    id: 5,
    title: "A Fábula Interativa: \"E se fosse eu?\"",
    disciplines: "Português | Cidadania e Desenvolvimento",
    cycle: "1.º Ciclo – 3.º ou 4.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos no total)",
    modality: "Mediada pelo professor (geração de texto) e trabalho em pares em tablets/computadores (gravação de voz).",
    briefDescription: "Partindo da leitura de uma fábula clássica (ex.: \"A Lebre e a Tartaruga\"), os alunos recorrem a um chatbot para criar uma variante da história onde as personagens tomam decisões cooperativas. Depois de analisarem criticamente se o tom da fábula e a moral se mantêm adequados, dão voz às personagens gravando os diálogos para treinar a leitura expressiva e a oralidade.",
    learningObjectives: [
      "Compreender a estrutura narrativa da fábula e a função da moralidade;",
      "Promover valores de cooperação e empatia;",
      "Desenvolver a leitura expressiva, a dicção e a expressão oral."
    ],
    steps: [
      {
        number: 1,
        title: "Leitura e Brainstorming",
        description: "A turma lê a fábula original e discute: \"E se as personagens resolvessem o problema de outra forma?\"."
      },
      {
        number: 2,
        title: "Coautoria com o Chatbot",
        description: "Com orientação do professor, os alunos pedem à IA para reescrever o desfecho da história com uma mudança de atitude das personagens."
      },
      {
        number: 3,
        title: "Análise Crítica do Texto",
        description: "Os alunos leem o texto gerado, verificam se a linguagem é adequada, corrigem expressões se necessário e debatem se a nova lição de moral faz sentido."
      },
      {
        number: 4,
        title: "Dar Vida e Voz às Personagens",
        description: "Em pares, os alunos treinam a leitura expressiva dos diálogos gerados e gravam as suas vozes (ou animam ilustrações das personagens)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Muda o final da história da Lebre e da Tartaruga.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Atua como um escritor de histórias infantis em Português de Portugal. Reescreve o final da fábula 'A Lebre e a Tartaruga', mas desta vez elas encontram um rio no caminho e decidem trabalhar em equipa para o atravessar. Inclui diálogos curtos entre as duas e termina com uma nova lição de moral sobre entreajuda."
    },
    finalProduct: "Audiolivro ou pequenos vídeos animados com as ilustrações das personagens a falarem com as vozes gravadas pelos alunos.",
    toolKeys: ["chatgpt", "claude", "chatterpix", "vocaroo"],
    themeEmoji: "🦊",
    accentColor: "emerald"
  },
  {
    id: 6,
    title: "Transformando Histórias em Arte com IA",
    disciplines: "Português | Educação Artística",
    cycle: "1.º Ciclo – 3.º Ano",
    cycleCategories: ["1.º Ciclo"],
    duration: "2 aulas (90 minutos)",
    modality: "Trabalho em pequenos grupos com mediação do professor na estação de geração de imagens.",
    briefDescription: "Os alunos aprendem a escrever descrições claras e detalhadas (prompts) para gerar imagens com IA, percebendo como a escolha de palavras influencia o resultado visual. A partir das imagens selecionadas, criam uma pequena narrativa que articula o texto escrito com os elementos visuais produzidos, discutindo como aperfeiçoar os prompts ao longo do processo.",
    learningObjectives: [
      "Produzir textos narrativos coerentes (introdução, desenvolvimento e conclusão);",
      "Enriquecer o vocabulário descritivo (adjetivos, expressões de tempo e lugar);",
      "Compreender a relação causa-efeito na engenharia de prompts."
    ],
    steps: [
      {
        number: 1,
        title: "Criação e Teste de Prompts",
        description: "Os alunos idealizam uma cena ou personagem e escrevem descrições detalhadas para orientar a IA."
      },
      {
        number: 2,
        title: "Aperfeiçoamento Visual",
        description: "Ao observarem as primeiras imagens geradas, identificam o que falta e ajustam as palavras do prompt (estilo artístico, iluminação, emoções das personagens) até ficarem satisfeitos."
      },
      {
        number: 3,
        title: "Escrita Criativa",
        description: "Cada aluno ou par seleciona 1 a 3 imagens geradas e escreve uma pequena história inspirada nos detalhes visuais dessas ilustrações."
      },
      {
        number: 4,
        title: "Partilha e Reflexão",
        description: "Apresentam as histórias à turma e explicam como tiveram de alterar as palavras do prompt para chegar à imagem desejada."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial do aluno:",
      studentInitial: "Um rapaz numa floresta com um dragão.",
      enrichedLabel: "Prompt enriquecido com a turma:",
      enriched: "Ilustração estilo aguarela para livro de contos infantis: um rapaz curioso de capa vermelha a segurar uma lanterna brilhante numa floresta encantada ao anoitecer, olhando para um pequeno dragão verde amigável pousado num tronco."
    },
    finalProduct: "Livro digital ilustrado da turma (e-book), reunindo os contos escritos pelos alunos e as respetivas ilustrações geradas por IA.",
    toolKeys: ["canva", "bing", "ideogram", "leonardo", "book_creator"],
    themeEmoji: "📖",
    accentColor: "sky"
  },
  {
    id: 7,
    title: "Explorando a História da Terra com Inteligência Artificial",
    disciplines: "Ciências Naturais | História",
    cycle: "3.º Ciclo – 7.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (90 a 100 minutos)",
    modality: "Trabalho autónomo em pequenos grupos (usando chatbots educativos configurados pelo professor e geradores de imagem).",
    briefDescription: "Os alunos investigam um marco da história da Terra (ex.: formação do planeta, extinção dos dinossauros) apoiados por um chatbot educativo criado pelo professor, validando a fiabilidade dos dados recolhidos. Depois, usam essa informação científica para redigir prompts e gerar imagens do acontecimento, apresentando-as à turma e analisando criticamente as imprecisões científicas da IA face a representações científicas reais.",
    learningObjectives: [
      "Compreender grandes etapas da história geológica e biológica da Terra;",
      "Desenvolver competências de pesquisa e verificação de factos científicos;",
      "Avaliar criticamente o rigor científico de imagens geradas por IA (identificando anacronismos ou \"alucinações\" visuais)."
    ],
    steps: [
      {
        number: 1,
        title: "Investigação Guiada",
        description: "Em grupos, os alunos interagem com o chatbot criado pelo professor para recolher dados sobre a época geológica atribuída (clima, flora, fauna, fenómenos geológicos), cruzando os dados com o manual escolar."
      },
      {
        number: 2,
        title: "Tradução Científica para Prompt",
        description: "Redigem descrições detalhadas com rigor científico para gerar uma imagem representativa desse período."
      },
      {
        number: 3,
        title: "Auditoria Científica da Imagem",
        description: "Os alunos analisam as imagens geradas e procuram erros da IA (ex.: colocar plantas com flor num período em que ainda não existiam, ou juntar espécies de períodos diferentes)."
      },
      {
        number: 4,
        title: "Apresentação Comparativa",
        description: "Apresentam à turma a imagem da IA ao lado de uma ilustração científica real, explicando o fenómeno e apontando os acertos e limitações da tecnologia."
      }
    ],
    promptExample: {
      initialLabel: "Prompt para o Chatbot:",
      studentInitial: "Explicas-me como era a paisagem terrestre e que tipo de plantas e animais existiam durante o Período Carbónico? Responde de forma clara para alunos do 7.º ano.",
      enrichedLabel: "Prompt para Gerador de Imagem:",
      enriched: "Imagem realista do Período Carbónico na Terra: uma floresta pantanosa densa apenas com fetos gigantes e cavalinhas (sem flores), ambiente húmido com nevoeiro e uma libelinha gigante (Meganeura) a voar no primeiro plano."
    },
    finalProduct: "Exposição ou friso cronológico interativo (\"IA vs. Ciência: A História da Terra\") onde cada imagem gerada pela IA é acompanhada por uma ficha de validação científica feita pelos alunos.",
    toolKeys: ["mizou", "schoolai", "magicschool", "ideogram", "canva", "leonardo"],
    themeEmoji: "🌋",
    accentColor: "amber"
  },
  {
    id: 8,
    title: "Estratégias Matemáticas com IA",
    disciplines: "Matemática",
    cycle: "1.º e 2.º Ciclos – 4.º e 5.º Anos",
    cycleCategories: ["1.º Ciclo", "2.º Ciclo"],
    duration: "1 aula (50 a 60 minutos)",
    modality: "Trabalho individual/pares no caderno, seguido de exploração com IA mediada pelo professor ou em ambiente educativo seguro.",
    briefDescription: "Os alunos começam por resolver problemas matemáticos recorrendo às suas próprias estratégias de cálculo mental. Só depois de apresentarem as soluções é que interrogam um chatbot de IA para descobrir caminhos alternativos de resolução, comparando a eficiência dos diferentes métodos, identificando possíveis erros da máquina e validando os resultados.",
    learningObjectives: [
      "Desenvolver a flexibilidade de cálculo mental e a resolução de problemas;",
      "Comunicar raciocínios matemáticos;",
      "Analisar criticamente respostas geradas por IA, compreendendo que existem várias estratégias válidas para chegar ao mesmo resultado."
    ],
    steps: [
      {
        number: 1,
        title: "Resolução Autónoma",
        description: "Os alunos resolvem um problema matemático usando cálculo mental e registam no caderno como pensaram (ex.: decomposição, compensação)."
      },
      {
        number: 2,
        title: "Partilha na Turma",
        description: "Alguns alunos explicam no quadro as suas estratégias à turma."
      },
      {
        number: 3,
        title: "Consulta à IA",
        description: "Questionam o chatbot sobre outras formas possíveis de pensar o mesmo cálculo mentalmente."
      },
      {
        number: 4,
        title: "Comparação e Validação",
        description: "A turma analisa os métodos propostos pela IA, verifica se o resultado está correto e debate qual das estratégias (a dos alunos ou a da IA) é mais rápida e eficiente para aquele caso."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Quanto é 38 x 5?",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Sou aluno do 5.º ano e calculei mentalmente 38 x 5 fazendo (30 x 5) + (8 x 5). Mostra-me mais duas estratégias diferentes e fáceis de cálculo mental para chegar ao resultado, explicando passo a passo sem usar o algoritmo vertical."
    },
    finalProduct: "Cartaz ou portefólio \"Mural de Estratégias de Cálculo\", onde um mesmo problema aparece resolvido pelo método dos alunos e pelos métodos alternativos descobertos e validados com a IA.",
    toolKeys: ["chatgpt", "gemini", "magicschool", "khanmigo"],
    themeEmoji: "🔢",
    accentColor: "blue"
  },
  {
    id: 9,
    title: "Sólidos Geométricos e Simetria",
    disciplines: "Matemática",
    cycle: "2.º Ciclo – 5.º Ano",
    cycleCategories: ["2.º Ciclo"],
    duration: "1 a 2 aulas (50 a 100 minutos)",
    modality: "Trabalho em pequenos grupos combinando materiais manipuláveis (sólidos/tangram), software de geometria dinâmica e chatbot de IA.",
    briefDescription: "Os alunos exploram as propriedades dos sólidos geométricos (faces, vértices e arestas) e conceitos de simetria combinando experimentação prática e IA. Com o apoio de um chatbot, criam desafios e enigmas matemáticos sobre poliedros e, de seguida, utilizam o tangram ou ferramentas digitais para construir figuras, testar hipóteses de simetria e validar os resultados.",
    learningObjectives: [
      "Classificar sólidos geométricos e relacionar o número de faces, vértices e arestas (Relação de Euler);",
      "Identificar e construir figuras com simetria de reflexão;",
      "Formular questões matemáticas rigorosas com o apoio crítico da IA."
    ],
    steps: [
      {
        number: 1,
        title: "Exploração e Criação de Desafios",
        description: "Observando modelos físicos ou digitais de sólidos, os alunos usam a IA para os ajudar a formular enigmas matemáticos sobre faces, arestas e vértices (sem erros concetuais)."
      },
      {
        number: 2,
        title: "Troca de Enigmas",
        description: "Os grupos trocam as questões entre si e tentam adivinhar os sólidos, verificando se a informação gerada pela IA estava matematicamente correta."
      },
      {
        number: 3,
        title: "Investigação de Simetria",
        description: "Utilizando peças físicas do Tangram ou o GeoGebra, os alunos constroem figuras e testam diferentes eixos de simetria."
      },
      {
        number: 4,
        title: "Validação",
        description: "Confrontam as suas hipóteses com a IA e discutem em turma eventuais falhas que os modelos de linguagem costumam ter em visualização espacial."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Faz uma pergunta sobre o prisma hexagonal.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Ajuda-me a criar um desafio em forma de enigma para os meus colegas do 5.º ano adivinharem o 'Prisma Hexagonal'. Usa pistas sobre o número de faces, vértices, arestas e a forma das suas bases, mas não reveles a resposta no texto do enigma."
    },
    finalProduct: "Quiz interativo ou conjunto de fichas de desafios geométricos e de simetria criados pelas equipas para um campeonato matemático interturmas.",
    toolKeys: ["geogebra", "tinkercad", "chatgpt", "magicschool"],
    themeEmoji: "🔷",
    accentColor: "indigo"
  },
  {
    id: 10,
    title: "Utilização Responsável da IA",
    disciplines: "Português | Cidadania e Desenvolvimento",
    cycle: "2.º Ciclo – 5.º Ano",
    cycleCategories: ["2.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho em pequenos grupos (pesquisa guiada) e debate em plenário.",
    briefDescription: "Os alunos investigam o funcionamento, as vantagens e os riscos da Inteligência Artificial através da interação direta com um chatbot, do debate e da produção textual. Após analisarem criticamente questões como a fiabilidade da informação (\"alucinações\") e a privacidade de dados, redigem textos argumentativos e reflexivos sobre as boas práticas no uso da IA na escola e no dia a dia.",
    learningObjectives: [
      "Compreender o que é a IA, os seus benefícios e riscos (plágio, desinformação, privacidade de dados);",
      "Desenvolver o pensamento crítico e a literacia mediática;",
      "Produzir textos informativos e argumentativos estruturados."
    ],
    steps: [
      {
        number: 1,
        title: "Entrevista à Própria IA",
        description: "Em grupos, os alunos fazem perguntas a um chatbot sobre como ele funciona, se pode errar e que dados nunca devemos partilhar com ele."
      },
      {
        number: 2,
        title: "Análise e Debate",
        description: "A turma compara as respostas da IA com os seus próprios conhecimentos e debate casos práticos (ex.: \"Devo copiar o trabalho de casa todo do ChatGPT?\", \"Posso pôr a minha morada ou foto num site de IA?\")."
      },
      {
        number: 3,
        title: "Produção Textual",
        description: "Cada grupo redige um texto informativo e reflexivo defendendo regras para uma utilização consciente e ética na escola."
      },
      {
        number: 4,
        title: "Revisão e Partilha",
        description: "Os textos são lidos à turma e sintetizados num código de conduta comum."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "A IA é perigosa?",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Explica a um aluno do 5.º ano, em linguagem simples, três grandes vantagens de usar a Inteligência Artificial para estudar, três riscos a que devemos ter atenção (como erros ou privacidade) e dá exemplos do que nunca devemos partilhar contigo."
    },
    finalProduct: "\"Carta de Princípios / Guia do Aluno para o Uso Ético da IA na Escola\", afixada na sala de aula e partilhada com a comunidade escolar.",
    toolKeys: ["duck_ai", "perplexity", "copilot", "chatgpt"],
    themeEmoji: "🛡️",
    accentColor: "teal"
  },
  {
    id: 11,
    title: "A água está em tudo: ciclo da água",
    disciplines: "Ciências Naturais",
    cycle: "2.º Ciclo – 5.º e 6.º Anos",
    cycleCategories: ["2.º Ciclo"],
    duration: "2 a 3 aulas (100 a 150 minutos)",
    modality: "Trabalho colaborativo em pequenos grupos.",
    briefDescription: "Os alunos exploram o ciclo da água e a sua relação com as alterações climáticas, organizando primeiro os conceitos num mapa visual. De seguida, recorrem à IA para os apoiar na criação de perguntas, pistas e desafios sobre as etapas do ciclo (evaporação, condensação, precipitação), integrando-os num pequeno jogo digital (\"Missão: salvar o ciclo da água\") que é partilhado e jogado pelos outros grupos.",
    learningObjectives: [
      "Compreender as etapas do ciclo hidrológico e o impacto das alterações climáticas;",
      "Organizar informação científica em mapas de conceitos;",
      "Aplicar a gamificação como estratégia de revisão e aprendizagem ativa entre pares."
    ],
    steps: [
      {
        number: 1,
        title: "Mapeamento Concetual",
        description: "Em grupos, os alunos sintetizam as etapas do ciclo da água num mapa visual."
      },
      {
        number: 2,
        title: "Geração de Desafios com IA",
        description: "Utilizam um chatbot para gerar ideias de perguntas de escolha múltipla, adivinhas e cenários-problema sobre o ciclo da água, validando o rigor científico das respostas."
      },
      {
        number: 3,
        title: "Construção do Jogo Digital",
        description: "Passam as perguntas validadas para uma plataforma de criação de jogos educativos com o tema \"Missão: salvar o ciclo da água\"."
      },
      {
        number: 4,
        title: "Experimentação Cruzada",
        description: "Os grupos trocam de jogos entre si, resolvem as missões dos colegas e dão feedback sobre a clareza científica das questões."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Faz perguntas sobre o ciclo da água.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Estamos a criar um jogo chamado 'Missão: salvar o ciclo da água' para o 5.º ano. Cria 5 perguntas de escolha múltipla em formato de desafio sobre evaporação, condensação, precipitação e escoamento, explicando de forma curta por que razão a opção certa é a correta."
    },
    finalProduct: "Jogo digital interativo (\"Missão: salvar o ciclo da água\") pronto a jogar em computador ou quadro interativo.",
    toolKeys: ["chatgpt", "notebooklm", "genially", "wordwall", "educaplay", "canva"],
    themeEmoji: "💧",
    accentColor: "sky"
  },
  {
    id: 12,
    title: "Equações em Ação",
    disciplines: "Matemática",
    cycle: "3.º Ciclo – 7.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "1 a 2 aulas (50 a 100 minutos)",
    modality: "Trabalho em pequenos grupos.",
    briefDescription: "Os alunos criam situações-problema originais do quotidiano que envolvam equações do 1.º grau, utilizando a IA como parceira de brainstorming para contextualizar os enunciados. Posteriormente, os grupos trocam os problemas entre si, resolvem os desafios criados pelos colegas analiticamente e validam as estratégias e soluções.",
    learningObjectives: [
      "Traduzir situações em contextos reais para linguagem algébrica (equações do 1.º grau a uma incógnita);",
      "Resolver equações e interpretar a solução no contexto do problema;",
      "Avaliar a coerência matemática de enunciados gerados por IA."
    ],
    steps: [
      {
        number: 1,
        title: "Definição da Equação-Base",
        description: "Cada grupo define uma equação do 1.º grau (ex.: 3x + 15 = 60) e escolhe um tema do seu interesse (desporto, videojogos, música, compras)."
      },
      {
        number: 2,
        title: "Criação do Contexto com IA",
        description: "Pedem ao chatbot para inventar uma história ou situação-problema baseada nesse tema que seja traduzida exatamente por essa equação."
      },
      {
        number: 3,
        title: "Verificação Prévia",
        description: "O grupo resolve o problema antes de o partilhar, garantindo que o enunciado da IA não tem ambiguidades e que a solução faz sentido no mundo real (ex.: não dar \"meia pessoa\")."
      },
      {
        number: 4,
        title: "Desafio entre Grupos",
        description: "Os grupos trocam os problemas, resolvem as equações no caderno e discutem as estratégias utilizadas."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Cria um problema com uma equação do 1.º grau.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Cria o enunciado de um problema matemático divertido para alunos do 7.º ano sobre a organização de um torneio de videojogos na escola, cuja resolução corresponda exatamente à equação 4x + 12 = 60. Não mostres a equação nem a resposta no enunciado."
    },
    finalProduct: "Banco de problemas \"Equações da Nossa Turma\" (em formato ficha ou mural digital Padlet) com os enunciados contextualizados e a respetiva chave de resolução algébrica.",
    toolKeys: ["chatgpt", "gemini", "geogebra", "khanmigo"],
    themeEmoji: "🎮",
    accentColor: "violet"
  },
  {
    id: 13,
    title: "Mudanças Climáticas e Ciclo da Água",
    disciplines: "Ciências Naturais",
    cycle: "3.º Ciclo – 8.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho autónomo de grupo em computadores.",
    briefDescription: "Os alunos utilizam a IA para apoiar a pesquisa e a síntese de dados reais sobre fenómenos extremos (secas, cheias, alteração da precipitação em Portugal), assumindo a responsabilidade de interpretar os valores, construir gráficos rigorosos e propor medidas concretas de mitigação.",
    learningObjectives: [
      "Relacionar as alterações climáticas com perturbações no ciclo hidrológico e na gestão sustentável da água;",
      "Recolher, organizar e representar dados reais em gráficos;",
      "Distinguir síntese automática de informação da interpretação científica humana."
    ],
    steps: [
      {
        number: 1,
        title: "Recolha e Síntese de Dados",
        description: "Os alunos recolhem dados reais (ex.: relatórios do IPMA ou PORDATA sobre precipitação e secas em Portugal) e usam a IA para ajudar a resumir relatórios longos ou organizar tabelas de valores."
      },
      {
        number: 2,
        title: "Construção de Gráficos",
        description: "Inserem os dados verificados numa folha de cálculo ou plataforma de visualização para construir gráficos de evolução temporal."
      },
      {
        number: 3,
        title: "Interpretação Científica",
        description: "Em grupo, analisam as tendências dos gráficos e explicam o impacto nos ecossistemas e nas reservas de água doce."
      },
      {
        number: 4,
        title: "Proposta de Mitigação",
        description: "Elaboram e debatem medidas práticas de mitigação e poupança hídrica a nível local/escolar."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Dá-me dados sobre a seca em Portugal.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Com base em fontes oficiais (como o IPMA), sintetiza numa tabela a evolução da precipitação média anual e dos períodos de seca severa no sul de Portugal nas últimas duas décadas, indicando as fontes para eu poder verificar os valores e construir um gráfico."
    },
    finalProduct: "Infografia científica ou relatório visual contendo os gráficos construídos pelos alunos, a análise crítica dos dados e um plano de ação para a escola.",
    toolKeys: ["perplexity", "notebooklm", "chatgpt", "google_sheets", "datawrapper"],
    themeEmoji: "🌍",
    accentColor: "emerald"
  },
  {
    id: 14,
    title: "Conversas Iluminadas",
    disciplines: "História | Português | TIC",
    cycle: "3.º Ciclo – 8.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 a 3 aulas (100 a 150 minutos)",
    modality: "Trabalho interdisciplinar em pequenos grupos.",
    briefDescription: "Os alunos investigam os pensadores do Iluminismo (Voltaire, Montesquieu, Rousseau, John Locke, Marquês de Pombal) e usam a IA como apoio para redigir diálogos históricos entre estas figuras. Posteriormente, transformam os textos em vídeos com avatares falantes, articulando o rigor histórico com a criatividade e a comunicação oral.",
    learningObjectives: [
      "Compreender os princípios do Iluminismo (separação de poderes, soberania popular, tolerância, progresso e ensino);",
      "Produzir textos dramáticos/dialogados sem anacronismos históricos;",
      "Utilizar ferramentas multimédia de IA para dar vida a personagens históricas."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa Histórica",
        description: "Cada grupo escolhe duas personalidades iluministas e identifica as suas principais ideias e obras."
      },
      {
        number: 2,
        title: "Escrita e Simulação do Diálogo",
        description: "Usam um chatbot para ensaiar um diálogo entre os dois filósofos, revendo e reescrevendo o guião para garantir que o vocabulário é adequado ao século XVIII e historicamente rigoroso."
      },
      {
        number: 3,
        title: "Criação dos Avatares",
        description: "Geram o retrato das figuras históricas e utilizam uma ferramenta de vídeo com IA para animar os avatares com o áudio do diálogo (preferencialmente gravado com a voz dos próprios alunos ou gerado por voz sintética)."
      },
      {
        number: 4,
        title: "Exibição na Aula",
        description: "Os vídeos são apresentados à turma, seguidos de questões aos \"filósofos\"."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Escreve uma conversa entre Montesquieu e Rousseau.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Ajuda-nos a estruturar um diálogo curto (4 intervenções para cada um) num salão parisiense do século XVIII entre Montesquieu e Rousseau. Eles devem debater a melhor forma de evitar a tirania do rei absolutista, defendendo respetivamente a separação dos três poderes e o contrato social/soberania popular. Usa Português de Portugal formal."
    },
    finalProduct: "Vídeo curto (1 a 2 minutos) de uma \"Tertúlia Iluminista\" protagonizada por avatares falantes das personagens históricas.",
    toolKeys: ["chatgpt", "claude", "canva", "vidnoz", "hedra", "capcut"],
    themeEmoji: "🕯️",
    accentColor: "amber"
  },
  {
    id: 15,
    title: "Arte, Criatividade e Tecnologia",
    disciplines: "Educação Artística",
    cycle: "3.º Ciclo – 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (90 a 100 minutos)",
    modality: "Trabalho individual ou em pares em computadores/tablets.",
    briefDescription: "A atividade propõe a criação de cartazes de sensibilização ambiental, nos quais a IA é utilizada de forma intencional como assistente de design visual, geração de elementos gráficos e exploração estética, cabendo aos alunos a direção artística, a edição de imagem, a tipografia e a mensagem final.",
    learningObjectives: [
      "Dominar princípios de comunicação visual e design gráfico (hierarquia visual, contraste, cor e tipografia);",
      "Utilizar ferramentas de IA generativa e de edição de imagem de forma integrada e ética;",
      "Criar campanhas visuais com impacto social e ambiental."
    ],
    steps: [
      {
        number: 1,
        title: "Conceito e Slogan",
        description: "Os alunos definem a causa ambiental do seu cartaz (ex.: poluição por plásticos nos oceanos, desflorestação) e criam um slogan original em português."
      },
      {
        number: 2,
        title: "Geração da Base Visual",
        description: "Escrevem prompts artísticos detalhados para gerar uma imagem conceptual forte sem texto."
      },
      {
        number: 3,
        title: "Edição e Composição Gráfica",
        description: "Importam a imagem para um editor gráfico (Photopea, Pixlr ou Canva) para corrigir imperfeições da IA, ajustar cores, recortar elementos e aplicar a tipografia do slogan respeitando a leitura visual."
      },
      {
        number: 4,
        title: "Exposição e Crítica Artística",
        description: "Apresentam o processo criativo (mostrando a imagem bruta da IA vs. o cartaz final editado pelo aluno)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Faz um cartaz sobre o plástico no mar.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Imagem conceptual minimalista e impactante para um cartaz ambiental: uma tartaruga marinha vista de baixo a nadar em direção à superfície, mas metade da sua carapaça está a transformar-se em garrafas de plástico transparente. Iluminação dramática subaquática, espaço livre em fundo azul escuro no topo para colocar texto depois."
    },
    finalProduct: "Exposição escolar (física ou virtual) de cartazes de sensibilização ambiental, acompanhada de uma ficha técnica sobre o processo de coautoria humano-IA.",
    toolKeys: ["bing", "ideogram", "fotor", "photopea", "pixlr", "canva"],
    themeEmoji: "🎨",
    accentColor: "teal"
  },
  {
    id: 16,
    title: "Texto de Jornal: Artigo de Opinião",
    disciplines: "Português",
    cycle: "3.º Ciclo – 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho individual (escrita autónoma apoiada por IA nas fases de pré-escrita e revisão).",
    briefDescription: "Os alunos utilizam a IA como parceira para pesquisar temas da atualidade, planificar argumentos e rever os seus próprios textos. O foco pedagógico garante que a escrita do artigo de opinião é inteiramente feita pelo aluno, usando a IA apenas para testar contra-argumentos e melhorar a estrutura, a clareza e a correção linguística.",
    learningObjectives: [
      "Dominar a estrutura do artigo de opinião (tese, argumentos, exemplos e conclusão);",
      "Desenvolver a capacidade de argumentação e contra-argumentação;",
      "Aperfeiçoar a revisão textual (coesão, coerência, pontuação e vocabulário) sem recorrer ao plágio."
    ],
    steps: [
      {
        number: 1,
        title: "Pesquisa e Planificação",
        description: "O aluno escolhe um tema atual e usa a IA para recolher dados factuais e explorar diferentes pontos de vista antes de definir a sua tese."
      },
      {
        number: 2,
        title: "Redação Autónoma",
        description: "O aluno escreve o primeiro rascunho completo do seu artigo de opinião (sem pedir à IA para redigir o texto por si)."
      },
      {
        number: 3,
        title: "Consultoria de Revisão com IA",
        description: "O aluno submete o seu rascunho a um chatbot ou corretor pedindo feedback específico sobre a força dos argumentos, conectores discursivos e eventuais erros gramaticais, mas proibindo a IA de reescrever o texto."
      },
      {
        number: 4,
        title: "Reescrita Final",
        description: "O aluno analisa as sugestões, decide quais aceita e redige a versão final melhorada."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Corrige o meu texto de opinião.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Atua como um professor de Português do 9.º ano (Português de Portugal). Vou colar abaixo o rascunho do meu artigo de opinião. NÃO reescrevas o meu texto. Aponta apenas em tópicos: 1) se a minha tese e argumentos estão claros; 2) que contra-argumento eu poderia acrescentar; 3) onde posso usar melhores conectores ou corrigir erros de pontuação."
    },
    finalProduct: "Caderno de Opinião ou Jornal Escolar com os artigos finais dos alunos (podendo anexar no portefólio a comparação entre a 1.ª versão e a versão revista).",
    toolKeys: ["perplexity", "chatgpt", "claude", "google_docs", "languagetool"],
    themeEmoji: "📰",
    accentColor: "indigo"
  },
  {
    id: 17,
    title: "Música Educativa com IA",
    disciplines: "Português",
    cycle: "2.º e 3.º Ciclos – 5.º ao 9.º Ano",
    cycleCategories: ["2.º Ciclo", "3.º Ciclo"],
    duration: "1 aula (50 minutos)",
    modality: "Criada previamente pela professora como recurso motivacional, ou construída em aula em cocriação com a turma.",
    briefDescription: "A professora (ou a turma em conjunto) recorre à Inteligência Artificial para compor uma música educativa focada na aprendizagem de conteúdos gramaticais (ex.: classes de palavras, funções sintáticas, tempos verbais). A canção é depois explorada na sala de aula como estratégia lúdica de motivação, análise e memorização de regras gramaticais.",
    learningObjectives: [
      "Consolidar e memorizar regras e conceitos gramaticais de forma lúdica;",
      "Desenvolver a consciência fonológica, o ritmo e a rima;",
      "Aumentar o envolvimento e a motivação dos alunos nas aulas de gramática."
    ],
    steps: [
      {
        number: 1,
        title: "Redação e Validação da Letra",
        description: "A professora (ou os alunos em grupo) escreve uma letra rimada que explique uma regra gramatical com exemplos concretos, usando um chatbot apenas para ajudar nas rimas e métrica (revendo sempre o rigor terminológico do Dicionário Terminológico)."
      },
      {
        number: 2,
        title: "Geração Musical",
        description: "Insere-se a letra validada numa ferramenta de geração musical (como o Suno), escolhendo um estilo musical apelativo para a faixa etária (pop, hip-hop, rock acústico)."
      },
      {
        number: 3,
        title: "Exploração em Sala de Aula",
        description: "Os alunos ouvem a música acompanhando a letra projetada, sublinham os conceitos gramaticais presentes nos versos e resolvem exercícios práticos aplicando a regra cantada."
      },
      {
        number: 4,
        title: "Desafio Extra",
        description: "Os alunos podem criar uma nova estrofe com novos exemplos da mesma regra."
      }
    ],
    promptExample: {
      initialLabel: "Prompt para o Chatbot (Letra):",
      studentInitial: "Ajuda-me a escrever uma letra de música curta em Português de Portugal (2 estrofes e 1 refrão orelhudo) para alunos do 2.º ciclo memorizarem a diferença entre Determinantes e Pronomes, dando exemplos claros de cada um em frases.",
      enrichedLabel: "Prompt de Estilo no Suno AI:",
      enriched: "Upbeat acoustic pop, catchy chorus, clear vocals, European Portuguese."
    },
    finalProduct: "Faixa musical ou videoclipe com legenda sincronizada (lyric video feito no CapCut ou Canva) para a Playlist de Gramática da turma.",
    toolKeys: ["chatgpt", "copilot", "suno", "capcut"],
    themeEmoji: "🎶",
    accentColor: "rose"
  },
  {
    id: 18,
    title: "Debate com IA",
    disciplines: "Língua Portuguesa | História | Cidadania",
    cycle: "3.º Ciclo – 7.º ao 9.º Ano",
    cycleCategories: ["3.º Ciclo"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho preparatório em pequenos grupos com IA, seguido de debate presencial na sala de aula.",
    briefDescription: "Os alunos escolhem um tema polémico (ex.: redes sociais e privacidade) e utilizam inicialmente um chatbot como \"adversário de treino\" para explorar argumentos, contra-argumentos e múltiplas perspetivas. De seguida, criam avatares com perfis distintos (ex.: especialista em privacidade, criador de conteúdos, crítico) para sintetizar posições antes de realizarem o debate ao vivo moderado pelo professor.",
    learningObjectives: [
      "Desenvolver a expressão oral, a escuta ativa e a capacidade de argumentação/refutação;",
      "Analisar um problema complexo sob múltiplas perspetivas (empatia cognitiva);",
      "Estruturar discursos persuasivos fundamentados em factos."
    ],
    steps: [
      {
        number: 1,
        title: "Treino de Argumentação com Chatbot",
        description: "Em grupos, os alunos debatem por escrito com um chatbot sobre o tema escolhido, pedindo-lhe que aponte pontos fracos nos seus argumentos e apresente perspetivas opostas."
      },
      {
        number: 2,
        title: "Criação de Perfis com Avatares",
        description: "Os alunos sintetizam 3 visões distintas sobre o tema e criam breves intervenções em vídeo/áudio com avatares gerados por IA (ex.: um psicólogo, um jovem utilizador, um especialista em cibersegurança) para abrir a discussão."
      },
      {
        number: 3,
        title: "Debate Presencial na Turma",
        description: "Após a visualização dos avatares de abertura, o professor modera o debate presencial entre os alunos, onde estes defendem e refutam ideias sem ler guiões."
      },
      {
        number: 4,
        title: "Síntese Final",
        description: "A turma vota nos argumentos mais sólidos e regista as conclusões num mural."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Dá-me argumentos contra as redes sociais.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Estamos a preparar um debate escolar sobre 'As redes sociais devem ser proibidas até aos 16 anos?'. Nós vamos defender que SIM. Atua como o nosso adversário de debate: apresenta um argumento forte contra a proibição e faz-nos uma pergunta difícil para nós treinarmos a nossa resposta."
    },
    finalProduct: "Debate presencial em sala de aula introduzido por vídeos curtos de especialistas virtuais (avatares) e sistematizado num mural colaborativo (Padlet).",
    toolKeys: ["claude", "chatgpt", "veed", "vidnoz", "elevenlabs", "padlet"],
    themeEmoji: "🎙️",
    accentColor: "purple"
  },
  {
    id: 19,
    title: "Rádio Interativa de Turma com IA",
    disciplines: "TIC | Português / Línguas | História",
    cycle: "3.º Ciclo e Secundário – 8.º ao 12.º Ano",
    cycleCategories: ["3.º Ciclo", "Secundário"],
    duration: "2 a 3 aulas (100 a 150 minutos)",
    modality: "Trabalho colaborativo de projeto em grupos.",
    briefDescription: "Os alunos selecionam fontes fidedignas sobre um tema curricular (textos, artigos, vídeos, notícias) e inserem-nas no NotebookLM para gerar uma síntese inicial estilo podcast/rádio. A partir da análise crítica desse resumo, estruturam e gravam o seu próprio programa de rádio da turma, enriquecendo-o com rubricas originais, perguntas de ouvintes, entrevistas simuladas e reflexões.",
    learningObjectives: [
      "Selecionar, cruzar e sintetizar fontes de informação variadas;",
      "Analisar como a IA transforma texto escrito em comunicação oral dinâmica;",
      "Produzir um guião radiofónico e desenvolver a comunicação oral e técnica de locução."
    ],
    steps: [
      {
        number: 1,
        title: "Curadoria de Fontes",
        description: "Os grupos pesquisam e reúnem 3 a 5 fontes fidedignas (PDFs, notícias, textos históricos ou científicos) sobre o tema em estudo."
      },
      {
        number: 2,
        title: "Geração e Análise no NotebookLM",
        description: "Carregam os documentos no NotebookLM, geram um resumo áudio (Audio Overview configurado para Português de Portugal) e analisam como os anfitriões virtuais ligam as ideias e que informações importantes deixaram de fora."
      },
      {
        number: 3,
        title: "Guião da Rádio de Turma",
        description: "Usando o NotebookLM para apoiar na estrutura, escrevem o seu próprio guião de rádio, acrescentando perguntas dos \"ouvintes\", entrevistas fictícias a figuras históricas/especialistas e momentos de reflexão crítica."
      },
      {
        number: 4,
        title: "Gravação e Emissão",
        description: "Os alunos gravam o episódio com as suas próprias vozes (podendo incluir pequenos excertos ou jingles criados com IA) e publicam no mural da turma."
      }
    ],
    promptExample: {
      initialLabel: "Instrução de personalização do Audio Overview / Chat do NotebookLM:",
      studentInitial: "Cria um resumo sobre a Revolução Industrial para o podcast da turma.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Cria um resumo em Português de Portugal (sotaque europeu) focado exclusivamente nas fontes fornecidas sobre a Revolução Industrial. Destaca as condições de vida dos operários e sugere 3 perguntas polémicas que os ouvintes da nossa rádio escolar poderiam fazer sobre este tema."
    },
    finalProduct: "Episódio de Podcast / Programa de Rádio da Turma (em formato áudio MP3) publicado num mural Padlet com espaço para comentários dos colegas.",
    toolKeys: ["notebooklm", "google_docs", "vocaroo", "audacity", "canva", "padlet"],
    themeEmoji: "📻",
    accentColor: "sky"
  },
  {
    id: 20,
    title: "Entrevistas Simuladas (Carreiras e Profissões)",
    disciplines: "Cidadania e Desenvolvimento | Inglês | História",
    cycle: "3.º Ciclo e Secundário – 9.º ao 12.º Ano",
    cycleCategories: ["3.º Ciclo", "Secundário"],
    duration: "2 aulas (100 minutos)",
    modality: "Trabalho individual ou em pares em computadores/tablets.",
    briefDescription: "Os alunos simulam entrevistas a profissionais de diversas áreas (ou figuras históricas) recorrendo à IA para preparar guiões de perguntas, simular respostas em tempo real e criar avatares profissionais, desenvolvendo competências de comunicação oral, orientação vocacional, língua estrangeira (no caso de Inglês) e pensamento crítico.",
    learningObjectives: [
      "Explorar percursos académicos e profissões futuras (orientação vocacional);",
      "Desenvolver a expressão oral formal e técnicas de entrevista (em Português ou Inglês);",
      "Formular perguntas pertinentes e avaliar criticamente as respostas simuladas pela IA."
    ],
    steps: [
      {
        number: 1,
        title: "Escolha da Profissão e Pesquisa",
        description: "Cada aluno ou par escolhe uma carreira que gostaria de explorar (ex.: Engenheiro Aeroespacial, Biólogo Marinho, Jornalista, Designer de Videojogos) e pesquisa o perfil da profissão."
      },
      {
        number: 2,
        title: "Simulação de Entrevista (Roleplay)",
        description: "Os alunos configuram um chatbot para assumir o papel de um profissional experiente nessa área e conduzem uma entrevista de 6 a 8 perguntas sobre o dia a dia, desafios éticos, formação necessária e impacto da tecnologia na profissão."
      },
      {
        number: 3,
        title: "Verificação da Realidade",
        description: "Os alunos validam se os dados indicados pelo chatbot (ex.: cursos universitários em Portugal, saídas profissionais) correspondem à realidade nacional."
      },
      {
        number: 4,
        title: "Produção Multimédia / Apresentação",
        description: "Selecionam os melhores momentos da entrevista e apresentam-nos à turma (em dramatização ao vivo a pares ou através de um vídeo curto com um avatar do profissional entrevistado)."
      }
    ],
    promptExample: {
      initialLabel: "Prompt inicial:",
      studentInitial: "Finge que és um biólogo marinho para eu te entrevistar.",
      enrichedLabel: "Prompt enriquecido:",
      enriched: "Atua como um Biólogo Marinho português com 10 anos de investigação nos Açores. Eu sou um aluno do 9.º ano e vou fazer-te uma entrevista para a aula de Cidadania sobre orientação vocacional. Responde apenas a uma pergunta de cada vez, de forma realista e natural, esperando sempre pela minha próxima questão. Podemos começar?"
    },
    finalProduct: "Mostruário Digital \"Feira Virtual de Profissões\", com vídeos curtos das entrevistas simuladas ou apresentações orais em roleplay perante a turma.",
    toolKeys: ["duck_ai", "chatgpt", "perplexity", "bing", "vidnoz", "veed"],
    themeEmoji: "💼",
    accentColor: "blue"
  }
];
