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
    "id": 1,
    "title": "A IA Desenha o que Eu Imagino",
    "disciplines": "Português | Educação Artística",
    "cycle": "1.º Ciclo – 1.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Mediada pelo professor (projetada no ecrã central), salvaguardando a privacidade e a ausência de criação de contas por menores.",
    "briefDescription": "A turma imagina uma personagem ou um objeto e descreve-o oralmente, utilizando palavras relacionadas com a cor, a forma e o tamanho. Com a mediação do professor, observa uma imagem criada por uma ferramenta de Inteligência Artificial a partir dessa descrição. Os alunos comparam a imagem com a ideia inicial e realizam o seu próprio desenho. A atividade permite explorar a relação entre as palavras e a representação visual, reconhecendo que a imagem gerada pode não corresponder exatamente ao que foi imaginado.",
    "learningObjectives": [
      "Descrever oralmente uma personagem ou um objeto, utilizando palavras relacionadas com a cor, a forma e o tamanho.",
      "Identificar semelhanças e diferenças entre a ideia imaginada, a imagem gerada e o próprio desenho.",
      "Reconhecer que uma ferramenta de IA cria uma imagem a partir da descrição fornecida e que o resultado pode não corresponder totalmente à ideia inicial."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Imaginação e vocabulário descritivo",
        "duration": "15 min",
        "description": "Cada aluno imagina uma personagem ou um objeto insólito, por exemplo, um peixe com rodas ou um lápis voador. De seguida, descreve oralmente ou por escrito o que imaginou, identificando características como a cor, o tamanho, a forma e outros pormenores. O professor apoia a utilização de adjetivos adequados e regista no quadro algumas das descrições apresentadas."
      },
      {
        "number": 2,
        "title": "Construção do pedido e geração da imagem",
        "duration": "20 min",
        "description": "Em grande grupo, os alunos selecionam uma das ideias apresentadas e ajudam a construir uma descrição mais completa. O professor introduz o pedido na ferramenta de geração de imagens e projeta o resultado. Os alunos observam a relação entre as palavras utilizadas e a imagem produzida, identificando a influência das instruções no resultado."
      },
      {
        "number": 3,
        "title": "Comparação entre a intenção e o resultado",
        "duration": "20 min",
        "description": "A turma compara a imagem gerada com a descrição inicial. Identifica os elementos que correspondem ao que foi pedido, os pormenores que estão em falta e as características que foram interpretadas de forma diferente. Com a orientação do professor, os alunos sugerem uma alteração à descrição e observam se o resultado se aproxima mais da ideia inicial."
      },
      {
        "number": 4,
        "title": "Criação do desenho individual",
        "duration": "25 min",
        "description": "Cada aluno realiza manualmente, numa folha de papel, a sua própria representação da personagem ou do objeto imaginado. O desenho deve refletir as escolhas criativas do aluno, não sendo necessário reproduzir a imagem gerada pela IA. O professor incentiva a expressão individual e a utilização dos elementos descritivos trabalhados."
      },
      {
        "number": 5,
        "title": "Partilha e reflexão",
        "duration": "10 min",
        "description": "Alguns alunos apresentam os seus desenhos e explicam as diferenças entre a sua representação, a imagem gerada pela IA e a ideia que tinham inicialmente. A turma identifica o papel das palavras na comunicação de uma ideia e reconhece que a decisão criativa e a representação final pertencem ao autor."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Um peixe com rodas.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Ilustração infantil colorida de um peixe azul sorridente com quatro rodas vermelhas de brincar, a deslocar-se numa estrada de areia no fundo do mar, estilo livro de contos."
    },
    "finalProduct": "Mural coletivo «O Nosso Olhar e o Olhar da IA», reunindo os desenhos manuais dos alunos e as respetivas descrições. A imagem gerada é utilizada como elemento de comparação e pode ser incluída no mural através de impressão, caso exista essa possibilidade.",
    "toolKeys": [
      "canva",
      "bing",
      "adobe_express",
      "ideogram",
      "leonardo"
    ],
    "themeEmoji": "🎨",
    "accentColor": "blue",
    "isFirstImageSpecial": true,
    "teacherPreparation": "Preparar o computador docente e o projetor; testar previamente a ferramenta de geração de imagens; verificar que a sua utilização pode ser feita pelo professor, sem exigir a criação de contas pelos alunos; preparar folhas A4, lápis de cor, lápis de cera e marcadores. Não introduzir nomes, fotografias ou outros dados pessoais das crianças na ferramenta.",
    "evaluationCriteria": [
      "Utilização de palavras adequadas para descrever pelo menos duas características da personagem ou do objeto.",
      "Identificação de pelo menos uma semelhança e uma diferença entre a descrição e a imagem gerada.",
      "Representação, no desenho individual, de elementos da ideia que o aluno pretendeu comunicar."
    ],
    "differentiation": [
      "Apoio: Os alunos que apresentam dificuldades na expressão escrita podem ditar a descrição ao professor ou utilizar um conjunto de imagens e palavras de apoio.",
      "Extensão: Os alunos que terminem antecipadamente podem experimentar reformular a descrição, alterando uma característica, e antecipar o que poderá mudar na imagem gerada."
    ],
    "essentialVsExtension": {
      "essential": "Elaboração oral da descrição, observação da geração coletiva e criação do desenho manual individual em papel.",
      "extension": "Reformulação de uma segunda descrição, alterando uma característica da personagem ou do objeto, seguida de uma comparação entre o resultado obtido e a primeira imagem."
    },
    "offlineAlternative": "O professor atua como \"máquina de desenhar\" no quadro de giz, desenhando à risca apenas o que os alunos dizem para demonstrar a necessidade de rigor descritivo.",
    "aiPedagogicalRole": "A IA funciona como um recurso visual que permite comparar a descrição verbal dos alunos com uma representação gerada automaticamente. O resultado serve de estímulo à observação e à reflexão, não constituindo um modelo obrigatório a reproduzir."
  },
  {
    "id": 2,
    "title": "A IA Adivinha o Animal",
    "disciplines": "Estudo do Meio | Português",
    "cycle": "1.º Ciclo – 2.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Mediada pelo professor no ecrã interativo ou em pequenos grupos através de plataformas educativas seguras sem registo pessoal de alunos.",
    "briefDescription": "Os alunos escolhem um animal e constroem três pistas que permitem identificá-lo progressivamente. Com a mediação do professor, apresentam as pistas a um chatbot e observam as respostas dadas. De seguida, confirmam as características do animal através do manual escolar, identificando eventuais erros ou informações que não correspondam à realidade. A atividade desenvolve a capacidade de observar, classificar, descrever e verificar informação.",
    "learningObjectives": [
      "Identificar e descrever características dos animais, como o revestimento, a alimentação, a forma de locomoção e o habitat.",
      "Construir três pistas organizadas do geral para o particular, sem revelar diretamente o nome do animal.",
      "Reconhecer que as respostas de um chatbot podem conter erros e confirmar a informação com apoio do professor e através do manual escolar."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Escolha do animal e preparação das pistas",
        "duration": "15 min",
        "description": "Em pares, os alunos escolhem um animal estudado em Estudo do Meio. Consultam o manual escolar ou os materiais disponibilizados pelo professor para confirmar as suas características. Registam três pistas, começando por uma característica mais geral e avançando para características mais específicas, sem revelar diretamente o nome do animal."
      },
      {
        "number": 2,
        "title": "Construção e organização das pistas",
        "duration": "20 min",
        "description": "Os alunos organizam as pistas de acordo com a seguinte sequência: habitat ou grupo a que pertence; revestimento, alimentação ou forma de locomoção; característica distintiva que permita identificar o animal. Revêm as frases para garantir que são claras, cientificamente corretas e adequadas ao nível de escolaridade."
      },
      {
        "number": 3,
        "title": "Desafio com a IA",
        "duration": "15 min",
        "description": "Com a mediação do professor, cada par apresenta as pistas ao chatbot, uma de cada vez. Os alunos observam as respostas dadas e registam em que momento o sistema identifica o animal. Não devem alterar as pistas apenas para obter uma resposta correta: o objetivo é verificar se a informação fornecida permite chegar à solução."
      },
      {
        "number": 4,
        "title": "Verificação das respostas",
        "duration": "20 min",
        "description": "Os alunos comparam as respostas da IA com a informação do manual escolar. Quando o chatbot apresenta uma resposta incorreta ou uma característica duvidosa, identificam a afirmação e verificam-na nas fontes disponibilizadas. Distinguem uma pista pouco clara de uma resposta incorreta do sistema."
      },
      {
        "number": 5,
        "title": "Produção dos cartões e partilha",
        "duration": "20 min",
        "description": "Cada par prepara um cartão com as três pistas revistas, a resposta correta e uma ilustração do animal. Os cartões são reunidos num baralho coletivo para utilização num jogo de adivinhas entre colegas. Antes de integrar o baralho, os pares confirmam que todas as pistas estão cientificamente corretas."
      }
    ],
    "promptExample": {
      "initialLabel": "Pistas progressivas dos alunos:",
      "studentInitial": "Pista 1: Sou um mamífero terrestre carnívoro. Pista 2: O meu pelo é amarelo com manchas escuras.",
      "enrichedLabel": "Pistas enriquecidas e validadas:",
      "enriched": "Pista 1: Sou um mamífero carnívoro que vive em regiões de savana. Pista 2: Tenho o corpo coberto de pelo amarelado com pintas pretas. Pista 3: Sou conhecido por ser o animal terrestre mais rápido em curtas distâncias. Que animal sou?"
    },
    "finalProduct": "Baralho pedagógico de cartas \"Quem Sou Eu? – Edição Animal\", com pistas científicas rigorosas e ilustrações feitas pelos alunos.",
    "toolKeys": [
      "magicschool",
      "mizou",
      "chatgpt",
      "gemini"
    ],
    "themeEmoji": "🐾",
    "accentColor": "emerald",
    "teacherPreparation": "Selecionar previamente uma lista de animais adequados ao ano de escolaridade e confirmar as respetivas características através do manual escolar ou de fontes científicas fiáveis. Preparar cartões em cartolina, uma grelha simples de características dos animais e o equipamento necessário para apresentar o chatbot à turma. A utilização da ferramenta deve ser mediada pelo professor, sem exigir contas pessoais aos alunos.",
    "evaluationCriteria": [
      "Correção das características do animal utilizadas na elaboração das pistas.",
      "Organização progressiva das três pistas, do geral para o particular.",
      "Capacidade de confirmar as informações apresentadas pelo chatbot através do manual escolar, com apoio do professor quando necessário."
    ],
    "differentiation": [
      "Apoio: Fornecimento de uma grelha orientadora com perguntas de escolha guiada (Como se desloca? Onde vive? Como é a pele?);",
      "Extensão: Investigação de animais autóctones portugueses em perigo de extinção (ex.: lince-ibérico, lobo-ibérico)."
    ],
    "essentialVsExtension": {
      "essential": "Elaboração de 3 pistas no caderno, teste com mediação docente e validação biológica no manual escolar.",
      "extension": "Organização de um torneio de adivinhas entre turmas utilizando o baralho de cartas produzido."
    },
    "offlineAlternative": "Jogo presencial em pares onde um aluno desempenha o papel de \"computador\" e só pode tentar adivinhar quando receber três pistas completas.",
    "aiPedagogicalRole": "Interlocutor de teste para evidenciar a necessidade de precisão conceptual na comunicação científica."
  },
  {
    "id": 3,
    "title": "Criar Sons de um Mundo Imaginário",
    "disciplines": "Educação Artística | Português",
    "cycle": "1.º Ciclo – 3.º ou 4.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Mediada pelo professor através de dispositivo central com sistema de som da sala.",
    "briefDescription": "Os alunos exploram a dimensão expressiva do som concebendo ambientes imaginários (florestas encantadas, cidades submarinas, planetas distantes). Redigem descrições sensoriais ricas para gerar paisagens sonoras através de ferramentas de áudio com apoio do professor, realizam uma audição atenta e partilham as escolhas artísticas através de um mapa ilustrado coletivo.",
    "learningObjectives": [
      "Identificar e distinguir características dos sons, como a intensidade, o timbre e a duração.",
      "Utilizar palavras e expressões adequadas para descrever uma paisagem sonora imaginária.",
      "Relacionar os sons ouvidos com elementos visuais e com o ambiente que os alunos pretendem representar."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Imaginação do ambiente sonoro",
        "duration": "15 min",
        "description": "Em pequenos grupos, os alunos imaginam um lugar que não existe na realidade, como uma floresta encantada, uma cidade submarina ou um planeta distante. Identificam os sons que poderiam existir nesse espaço, registando pelo menos três exemplos e descrevendo as suas características."
      },
      {
        "number": 2,
        "title": "Preparação da descrição e geração do áudio",
        "duration": "20 min",
        "description": "Cada grupo organiza as suas ideias numa descrição que indique o ambiente pretendido, os sons principais e a atmosfera que deseja transmitir. O professor revê o pedido e introdu-lo na ferramenta de geração de áudio. A faixa produzida é reproduzida para o grupo ou para a turma, através do equipamento de som disponível."
      },
      {
        "number": 3,
        "title": "Audição atenta e interpretação",
        "duration": "25 min",
        "description": "Os alunos escutam a faixa e identificam os sons que conseguem reconhecer. Registam se os sons correspondem ao ambiente imaginado, se existem elementos inesperados e que sensações ou emoções a composição transmite. O professor orienta a identificação de características como o timbre, a intensidade e a duração dos sons."
      },
      {
        "number": 4,
        "title": "Representação visual do mundo sonoro",
        "duration": "20 min",
        "description": "Cada grupo desenha o ambiente imaginado, representando os elementos que associa aos sons escutados. Acrescenta uma legenda com a identificação dos principais sons e explica a relação entre a representação visual e a paisagem sonora criada."
      },
      {
        "number": 5,
        "title": "Partilha e síntese",
        "duration": "10 min",
        "description": "Os grupos apresentam os seus desenhos e descrevem os sons que escolheram para representar o ambiente. A turma identifica as diferenças entre as imagens mentais de cada grupo e as interpretações sugeridas pelo áudio."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Sons de uma cidade debaixo de água.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Cria uma paisagem sonora ambiente de uma cidade submarina imaginária, com sons suaves de bolhas de água, ecos de baleias ao longe e movimentos de água. A composição deve transmitir uma atmosfera misteriosa e tranquila, sem letra, sem voz humana e sem ritmo de canção. O objetivo é criar um ambiente sonoro que os alunos possam ouvir e imaginar, não uma música com versos ou refrão."
    },
    "finalProduct": "Mapa visual coletivo \"Mundos Sonoros da Turma\", com ilustrações dos ambientes e legendas descritivas dos elementos sonoros associados.",
    "toolKeys": [
      "suno",
      "elevenlabs",
      "stable_audio",
      "soundful"
    ],
    "themeEmoji": "🎵",
    "accentColor": "indigo",
    "teacherPreparation": "Testar antecipadamente a ferramenta de geração de áudio ou de paisagens sonoras no computador docente com ligação a colunas de som; afixar uma cartolina grande para o mapa coletivo.",
    "evaluationCriteria": [
      "Riqueza e adequação do vocabulário sensorial mobilizado na caracterização do ambiente;",
      "Capacidade de escuta atenta e identificação dos parâmetros sonoros (intensidade, timbre);",
      "Articulação coerente entre a representação visual no mapa e a atmosfera sonora."
    ],
    "differentiation": [
      "Apoio: Disponibilização de um banco de palavras para descrever sons e sensações auditivas, como forte, fraco, agudo, grave, contínuo, abafado e suave.",
      "Extensão: Experimentação de sons produzidos pelos próprios alunos, recorrendo à voz, à percussão corporal e a objetos do quotidiano, para comparar a paisagem sonora criada manualmente com a gerada pela IA."
    ],
    "essentialVsExtension": {
      "essential": "Conceção descritiva, geração mediada com audição em sala e desenho do mundo imaginário no mapa coletivo.",
      "extension": "Criação de códigos QR colados no mapa para audição individual através de tablets da biblioteca."
    },
    "offlineAlternative": "Produção da paisagem sonora exclusivamente através de percussão corporal, sons vocais e manipulação de objetos do quotidiano (folhas, réguas, garrafas).",
    "aiPedagogicalRole": "Instrumento gerador de texturas sonoras complexas que materializa estímulos auditivos para alimentar a criatividade literária e artística."
  },
  {
    "id": 4,
    "title": "O Arquiteto das Formas Geométricas",
    "disciplines": "Matemática | Educação Artística",
    "cycle": "1.º Ciclo – 1.º ou 2.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Mediada pelo professor no ecrã interativo, articulada com blocos e materiais manipuláveis nas mesas.",
    "briefDescription": "Os alunos exploram sólidos geométricos através da observação e manipulação de modelos físicos. Em pequenos grupos, constroem estruturas simples, identificam os sólidos utilizados e descrevem as suas características e posições. Com a mediação do professor, transformam uma das descrições num pedido para gerar uma imagem e comparam o resultado com a construção física, identificando semelhanças e diferenças. A atividade valoriza a manipulação, o vocabulário geométrico e a capacidade de verificar representações visuais.",
    "learningObjectives": [
      "Reconhecer e nomear sólidos geométricos, como o cubo, o paralelepípedo, a esfera, o cilindro, o cone e a pirâmide.",
      "Descrever características observáveis dos sólidos geométricos, distinguindo superfícies planas e curvas e utilizando vocabulário adequado.",
      "Utilizar expressões espaciais para descrever a posição dos sólidos numa construção.",
      "Comparar uma construção física com uma imagem gerada por IA, identificando diferenças entre a descrição fornecida e o resultado obtido."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Construção de estruturas geométricas",
        "duration": "15 min",
        "description": "Em pequenos grupos, os alunos exploram sólidos geométricos de madeira, plástico ou outros materiais manipuláveis. Cada grupo constrói uma pequena estrutura, selecionando os sólidos que pretende utilizar e identificando as suas características."
      },
      {
        "number": 2,
        "title": "Descrição matemática da construção",
        "duration": "20 min",
        "description": "Os alunos descrevem oralmente ou por escrito a estrutura construída, indicando os sólidos utilizados, as respetivas quantidades, as cores e a posição de cada elemento. O professor apoia a utilização correta do vocabulário geométrico e espacial."
      },
      {
        "number": 3,
        "title": "Geração da representação com IA",
        "duration": "20 min",
        "description": "A turma escolhe uma das construções realizadas e transforma a descrição num pedido para um gerador de imagens. O professor introduz o pedido e projeta o resultado. Os alunos comparam a representação produzida com o modelo físico e identificam as diferenças existentes."
      },
      {
        "number": 4,
        "title": "Verificação e representação corrigida",
        "duration": "25 min",
        "description": "Os alunos verificam a quantidade e a identificação dos sólidos representados na imagem. Utilizam os materiais manipuláveis para confirmar as características geométricas e identificam eventuais erros de representação. De seguida, desenham no caderno a estrutura que pretendiam construir, identificando os sólidos utilizados."
      },
      {
        "number": 5,
        "title": "Partilha e sistematização",
        "duration": "10 min",
        "description": "Cada grupo apresenta a sua construção e identifica os sólidos geométricos utilizados. A turma sistematiza as diferenças entre figuras planas e sólidos geométricos e reflete sobre a importância de utilizar instruções matemáticas claras."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Constrói uma estrutura com sólidos geométricos.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Representa uma pequena construção feita exclusivamente com sólidos geométricos: um cubo azul como base, uma pirâmide amarela colocada sobre o cubo e dois cilindros verdes ao lado da estrutura. Apresenta os sólidos de forma simples, com as suas formas bem visíveis e distinguíveis. Não acrescentes outros sólidos nem incluas palavras ou legendas na imagem."
    },
    "finalProduct": "Painel coletivo «As Nossas Construções com Sólidos Geométricos», reunindo os desenhos das estruturas construídas pelos alunos, a identificação dos sólidos utilizados e o registo das diferenças observadas entre a construção física e a imagem gerada.",
    "toolKeys": [
      "ideogram",
      "bing",
      "canva",
      "magicschool"
    ],
    "themeEmoji": "📐",
    "accentColor": "amber",
    "teacherPreparation": "Reunir modelos físicos de sólidos geométricos adequados ao nível de escolaridade, nomeadamente cubos, paralelepípedos, esferas, cilindros, cones e pirâmides. Preparar o computador docente, o projetor e a ferramenta de geração de imagens, testando previamente o seu funcionamento. Disponibilizar folhas e materiais de desenho para o registo das construções.",
    "evaluationCriteria": [
      "Identificação e nomeação correta dos sólidos geométricos utilizados na construção.",
      "Utilização adequada de vocabulário geométrico e espacial na descrição da estrutura.",
      "Identificação de pelo menos uma diferença entre a construção física e a imagem gerada."
    ],
    "differentiation": [
      "Apoio: Disponibilização de modelos físicos e cartões com imagens e nomes dos sólidos geométricos para facilitar a identificação e descrição.",
      "Extensão: Construção de uma segunda estrutura com sólidos diferentes, acompanhada de uma descrição da posição relativa dos elementos, utilizando expressões como acima, abaixo, ao lado e entre."
    ],
    "essentialVsExtension": {
      "essential": "Manipulação dos sólidos geométricos, construção de uma estrutura simples, descrição dos sólidos utilizados, observação da imagem gerada e comparação com a construção física.",
      "extension": "Construção de uma segunda estrutura utilizando outros sólidos geométricos e elaboração de uma descrição espacial mais pormenorizada."
    },
    "offlineAlternative": "Construção de estruturas com sólidos de madeira, plástico ou embalagens do quotidiano, seguida de desenho e identificação dos sólidos utilizados, sem recurso a ferramentas digitais.",
    "aiPedagogicalRole": "A IA fornece uma representação visual baseada na descrição dos alunos. A comparação com os modelos físicos permite observar que uma imagem gerada pode apresentar diferenças e que a validação das características geométricas deve ser feita através da manipulação e do conhecimento matemático."
  },
  {
    "id": 5,
    "title": "A Fábula Interativa: \"E se fosse eu?\"",
    "disciplines": "Português | Cidadania e Desenvolvimento",
    "cycle": "1.º Ciclo – 3.º ou 4.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Mediada pelo professor na geração textual; trabalho em pares para revisão crítica, leitura expressiva e dramatização.",
    "briefDescription": "A partir da leitura de uma fábula clássica (ex.: «A Lebre e a Tartaruga»), os alunos recorrem ao chatbot com apoio do professor para explorar variantes narrativas onde as personagens adotam atitudes de cooperação. Os alunos assumem a autoria plena da revisão textual em Português de Portugal e treinam a leitura expressiva e a dicção através da dramatização dos diálogos.",
    "learningObjectives": [
      "Compreender a estrutura narrativa da fábula (situação inicial, peripécia, desenlace e moral da história);",
      "Rever e melhorar textos em Português de Portugal, eliminando repetições e aperfeiçoando a pontuação do diálogo;",
      "Desenvolver a leitura oral expressiva, a dicção e a capacidade de cooperação interpessoal."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Leitura da fábula e identificação do conflito",
        "duration": "15 min",
        "description": "A turma lê a fábula selecionada e identifica as personagens, a situação inicial, o problema e o desenlace. O professor orienta a discussão sobre as decisões das personagens e apresenta o desafio de imaginar um final alternativo em que a cooperação tenha um papel importante."
      },
      {
        "number": 2,
        "title": "Criação de um final alternativo",
        "duration": "20 min",
        "description": "Em pares, os alunos apresentam ideias para um novo desenlace. Com a mediação do professor, solicitam à IA duas propostas diferentes para o final da história, mantendo as personagens e o conflito central da fábula original."
      },
      {
        "number": 3,
        "title": "Comparação das propostas",
        "duration": "15 min",
        "description": "Os pares leem as duas propostas e comparam-nas com a história original. Identificam qual das propostas apresenta maior coerência com as personagens, melhor desenvolve a cooperação e oferece um desenlace adequado. A IA é utilizada como fonte de ideias, não como autora da versão final."
      },
      {
        "number": 4,
        "title": "Escrita e revisão do final escolhido",
        "duration": "25 min",
        "description": "Cada par escreve o seu próprio final, selecionando e transformando as ideias que considera relevantes. Revê o texto, verificando a sequência dos acontecimentos, a pontuação dos diálogos e a correção linguística em Português de Portugal. No final, escreve uma moral adequada ao novo desenlace."
      },
      {
        "number": 5,
        "title": "Leitura expressiva e partilha",
        "duration": "15 min",
        "description": "Os pares apresentam oralmente o final criado, distribuindo as falas pelas personagens. A turma identifica as diferenças entre a versão original e as versões alternativas e comenta a mensagem transmitida pela nova moral."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Muda o final da história da Lebre e da Tartaruga.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Com base na fábula «A Lebre e a Tartaruga», apresenta duas possibilidades curtas para um final alternativo, a partir do momento em que as duas personagens encontram uma dificuldade que não conseguem ultrapassar individualmente. Nas duas propostas, a Lebre e a Tartaruga devem cooperar para resolver o problema. Utiliza Português de Portugal e linguagem adequada a alunos do 3.º ou 4.º ano. Não reescrevas a história completa. Apresenta finais diferentes que permitam aos alunos escolher, discutir e escrever a sua própria versão."
    },
    "finalProduct": "Texto final de um desfecho alternativo da fábula, revisto pelos alunos e apresentado através de uma leitura dramatizada com distribuição das falas pelas personagens.",
    "toolKeys": [
      "chatgpt",
      "claude",
      "chatterpix",
      "vocaroo"
    ],
    "themeEmoji": "🦊",
    "accentColor": "emerald",
    "teacherPreparation": "Selecionar a versão tradicional da fábula a ler; preparar grelha de observação da leitura oral expressiva (pausas, entoação, volume).",
    "evaluationCriteria": [
      "Adequação da moral criada ao sentido de entreajuda proposto;",
      "Correção linguística segundo a norma do Português de Portugal e pontuação correta do diálogo;",
      "Fluência, entoação e expressividade na dramatização oral."
    ],
    "differentiation": [
      "Apoio: Texto impresso com marcas cromáticas nos travessões de fala para apoiar a leitura dialogada;",
      "Extensão: Os alunos que terminem antecipadamente podem experimentar duas formas diferentes de interpretar uma das falas, alterando a entoação para transmitir emoções distintas."
    ],
    "essentialVsExtension": {
      "essential": "Leitura e compreensão da fábula; identificação das personagens e do conflito; comparação de duas propostas de final geradas com apoio da IA; escrita autónoma de um final alternativo; revisão do texto e leitura expressiva.",
      "extension": "Apresentação dramatizada do final alternativo com recurso a um narrador e à interpretação das personagens por diferentes alunos."
    },
    "offlineAlternative": "Elaboração autónoma dos finais cooperativos no caderno diário, seguida de representação teatral em pequenos grupos sem ecrãs.",
    "aiPedagogicalRole": "Gerador de hipóteses e rascunhos de enredo, cabendo aos alunos o papel soberano de autores, editores e intérpretes."
  },
  {
    "id": 6,
    "title": "Transformar Histórias em Arte com IA",
    "disciplines": "Português | Educação Artística",
    "cycle": "1.º Ciclo – 3.º Ano",
    "cycleCategories": [
      "1.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Trabalho em pequenos grupos com escrita no caderno e geração de ilustrações mediada pelo docente no computador central.",
    "briefDescription": "Os alunos escrevem uma narrativa curta, organizando os acontecimentos em situação inicial, problema e desenlace. Depois de reverem o texto, selecionam uma cena importante e elaboram uma descrição para gerar uma ilustração com apoio do professor. Comparam a imagem obtida com o conteúdo da narrativa e explicam de que forma a imagem representa a cena escolhida. O texto mantém-se da autoria dos alunos e a imagem funciona como complemento visual da história.",
    "learningObjectives": [
      "Escrever uma narrativa curta, organizando os acontecimentos numa situação inicial, num problema e num desenlace.",
      "Utilizar conectores temporais adequados para assegurar a sequência e a coerência dos acontecimentos.",
      "Descrever uma cena da narrativa com pormenores relevantes para orientar a criação de uma ilustração.",
      "Relacionar a ilustração gerada com o texto escrito, identificando semelhanças e diferenças."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Planificação da narrativa",
        "duration": "15 min",
        "description": "Cada aluno ou grupo escolhe uma ideia para uma história e preenche uma planificação simples, identificando as personagens, o espaço, a situação inicial, o problema e o desenlace. A planificação deve permitir organizar a sequência dos acontecimentos antes de iniciar a escrita."
      },
      {
        "number": 2,
        "title": "Escrita da primeira versão",
        "duration": "20 min",
        "description": "Os alunos escrevem a primeira versão da narrativa, respeitando a sequência dos acontecimentos e utilizando conectores temporais adequados. Como referência, o texto deverá ter entre 80 e 120 palavras, podendo o professor ajustar a extensão às características da turma e ao ano de escolaridade."
      },
      {
        "number": 3,
        "title": "Criação de uma ilustração",
        "duration": "15 min",
        "description": "Os alunos selecionam uma cena importante da sua história e descrevem-na com clareza. O professor utiliza essa descrição para gerar uma ilustração. A imagem deve representar uma situação presente no texto e não acrescentar acontecimentos que não tenham sido escritos pelos alunos."
      },
      {
        "number": 4,
        "title": "Revisão do texto e legenda",
        "duration": "25 min",
        "description": "Os alunos relêem a narrativa e verificam a coerência da história, a organização dos parágrafos, a pontuação e a utilização do vocabulário. De seguida, escrevem uma legenda para a ilustração e confirmam se a imagem corresponde à cena descrita no texto. A narrativa mantém-se da autoria dos alunos."
      },
      {
        "number": 5,
        "title": "Partilha das histórias",
        "duration": "15 min",
        "description": "Os alunos apresentam as suas narrativas e respetivas ilustrações. Explicam a cena escolhida e a relação entre o texto e a imagem. Os trabalhos podem ser reunidos num livro coletivo da turma, em papel ou em formato digital, desde que o tempo disponível o permita."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Um rapaz numa floresta com um dragão.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Ilustração em estilo aguarela suave para livro de contos infantis: um rapazinho de casaco amarelo e botas azuis a segurar uma pequena lanterna, olhando com admiração para um dragão verde pequenino e amigável que dorme num tronco coberto de musgo, numa floresta iluminada por vaga-lumes."
    },
    "finalProduct": "Narrativa curta, com aproximadamente 80 a 120 palavras, acompanhada de uma ilustração de uma cena escolhida pelos alunos e de uma breve legenda. Os trabalhos revistos podem ser posteriormente reunidos num livro coletivo da turma.",
    "toolKeys": [
      "canva",
      "bing",
      "ideogram",
      "leonardo",
      "book_creator"
    ],
    "themeEmoji": "📖",
    "accentColor": "sky",
    "teacherPreparation": "Preparar modelo de planificação da narrativa (folha com caixas para personagens, tempo, espaço, ação); testar gerador de imagens.",
    "evaluationCriteria": [
      "Coerência da estrutura narrativa (introdução, desenvolvimento, conclusão);",
      "Riqueza do vocabulário descritivo e emprego correto da pontuação;",
      "Capacidade de explicar a relação intencional entre o texto escrito e a imagem gerada."
    ],
    "differentiation": [
      "Apoio: Disponibilização de conectores temporais (era uma vez, de repente, no dia seguinte, finalmente);",
      "Extensão: Redação de um epílogo descrevendo uma nova aventura das personagens."
    ],
    "essentialVsExtension": {
      "essential": "Escrita do conto no caderno, geração supervisionada da ilustração da cena principal e leitura à turma.",
      "extension": "Compilação de todas as histórias num livro digital interativo na plataforma Book Creator."
    },
    "offlineAlternative": "Ilustração manual das histórias através de técnicas mistas (recorte, colagem de texturas de papel e pintura com lápis de cor).",
    "aiPedagogicalRole": "Estimulador da imaginação plástica que materializa visualmente os detalhes descritos pelos alunos no texto."
  },
  {
    "id": 7,
    "title": "Explorando a História da Terra com Inteligência Artificial",
    "disciplines": "Ciências Naturais | História",
    "cycle": "3.º Ciclo – 7.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Trabalho em pequenos grupos com pesquisa orientada no manual escolar e ferramentas de IA supervisionadas pelo professor.",
    "briefDescription": "Os alunos investigam grandes etapas da história da Terra (ex.: Período Carbónico, Jurássico, Glaciações do Quaternário). Convertem dados científicos em prompts para reconstituir o paleoambiente por IA e preenchem uma ficha de auditoria científica, confrontando as imagens geradas com ilustrações paleontológicas validadas para identificar anacronismos e erros biológicos.",
    "learningObjectives": [
      "Caracterizar as condições ambientais, fauna fóssil e flora predominante de um período geológico específico da história da Terra;",
      "Distinguir factos científicos comprovados por fósseis de interpretações artísticas e alucinações visuais de IA;",
      "Preencher uma ficha de auditoria científica identificando anacronismos evolutivos em representações geradas por computador."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Investigação do período geológico",
        "duration": "20 min",
        "description": "Cada grupo recebe ou escolhe um período geológico. Consulta o manual escolar e as fontes científicas selecionadas pelo professor para identificar as características do clima, da vegetação, dos animais e dos ambientes existentes nesse período. Regista a informação essencial, indicando as fontes consultadas."
      },
      {
        "number": 2,
        "title": "Preparação da descrição científica",
        "duration": "15 min",
        "description": "Com base na informação recolhida, cada grupo redige uma descrição para gerar uma representação visual do ambiente estudado. A descrição deve incluir apenas espécies e características compatíveis com o período geológico em causa. O professor ajuda a transformar a informação científica num pedido claro para a ferramenta de geração de imagens."
      },
      {
        "number": 3,
        "title": "Geração e observação da imagem",
        "duration": "20 min",
        "description": "O professor ou os alunos, de acordo com as condições de utilização da ferramenta, geram a imagem pretendida. Os grupos observam o resultado e identificam os elementos que precisam de ser confirmados, distinguindo aquilo que parece correto daquilo que ainda não foi validado."
      },
      {
        "number": 4,
        "title": "Validação científica",
        "duration": "25 min",
        "description": "Os grupos confrontam a imagem com o manual escolar e com as fontes científicas consultadas. Preenchem a ficha de validação, registando os elementos confirmados, os elementos que não conseguiram confirmar e as afirmações ou representações que identificaram como incorretas ou anacrónicas. Cada conclusão deve ser justificada com base na fonte consultada."
      },
      {
        "number": 5,
        "title": "Apresentação das conclusões",
        "duration": "10 min",
        "description": "Cada grupo apresenta a imagem, identifica o período geológico estudado e explica dois elementos que foram validados ou corrigidos. A turma reflete sobre as limitações da IA na representação de informação científica."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial dos alunos:",
      "studentInitial": "Desenha a Terra no tempo dos primeiros insetos.",
      "enrichedLabel": "Prompt científico enriquecido:",
      "enriched": "Cria uma ilustração paleoartística de uma paisagem do período Carbónico, tendo em conta as seguintes características científicas: ambiente pantanoso, presença de fetos arborescentes e cavalinhas de grande porte e condições ambientais próprias do período. A representação pode incluir um inseto voador de grandes dimensões, como a Meganeura, desde que essa informação esteja confirmada nas fontes fornecidas pelo professor. Não incluas plantas com flor, relva, mamíferos, aves, dinossauros ou elementos atuais. Não acrescentes organismos ou características ambientais que não estejam sustentados pelas informações disponibilizadas. Não incluas texto ou legendas na imagem."
    },
    "finalProduct": "Ficha de Auditoria Paleoambiental da turma (\"Ciência vs. IA\"), confrontando as imagens geradas com os factos paleontológicos validados no manual escolar.",
    "toolKeys": [
      "mizou",
      "schoolai",
      "magicschool",
      "ideogram",
      "canva",
      "leonardo"
    ],
    "themeEmoji": "🌋",
    "accentColor": "amber",
    "teacherPreparation": "Preparar uma seleção de períodos geológicos adequados à atividade e disponibilizar, para cada período, informação científica validada sobre a fauna, a flora e as condições ambientais. Preparar a ficha de validação científica com campos para o período estudado, as fontes consultadas, os elementos confirmados e os elementos incorretos ou não confirmados. Testar previamente a ferramenta de geração de imagens e assegurar que a sua utilização é mediada pelo professor ou realizada em ambiente adequado à idade dos alunos.",
    "evaluationCriteria": [
      "Rigor científico no levantamento da flora, fauna e clima do período geológico;",
      "Identificação precisa de anacronismos evolutivos na imagem gerada pela IA;",
      "Clareza e fundamentação teórica durante a apresentação comparativa."
    ],
    "differentiation": [
      "Apoio: Disponibilização de uma lista de verificação com espécies-guia permitidas e proibidas para a época em estudo;",
      "Extensão: Investigação das razões do gigantismo dos artrópodes no Carbónico (concentração de oxigénio atmosférico)."
    ],
    "essentialVsExtension": {
      "essential": "Investigação no manual, geração orientada da imagem, preenchimento da ficha de auditoria e apresentação oral na aula.",
      "extension": "Construção de uma linha do tempo geológica interativa digital no Genially."
    },
    "offlineAlternative": "Auditoria científica de ilustrações históricas e reconstituições antigas de manuais escolares à procura de conceções paleontológicas ultrapassadas.",
    "aiPedagogicalRole": "Gerador de representações preliminares suscetíveis a erros, servindo de objeto de análise para treinar o ceticismo metodológico dos alunos."
  },
  {
    "id": 8,
    "title": "Estratégias Matemáticas com IA",
    "disciplines": "Matemática",
    "cycle": "1.º e 2.º Ciclos – 4.º e 5.º Anos",
    "cycleCategories": [
      "1.º Ciclo",
      "2.º Ciclo"
    ],
    "duration": "1 aula (50 minutos)",
    "modality": "Trabalho individual no caderno diário, seguido de exploração comparativa em grande grupo com chatbot mediado pelo professor.",
    "briefDescription": "Os alunos resolvem problemas de cálculo mental mobilizando estratégias próprias e registando o raciocínio no caderno. Em seguida, questionam o chatbot para descobrir caminhos alternativos de cálculo mental, avaliando a correção matemática, a clareza dos passos e a eficiência de cada método face à sua própria estratégia.",
    "learningObjectives": [
      "Aplicar com flexibilidade estratégias de cálculo mental (decomposição aditiva/multiplicativa, compensação, arredondamento);",
      "Comunicar raciocínios matemáticos por escrito e oralmente de forma compreensível;",
      "Comparar criticamente diferentes estratégias de resolução, avaliando a sua eficiência e validade para além da mera rapidez."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Resolução individual",
        "duration": "10 min",
        "description": "Cada aluno resolve o desafio de cálculo mental proposto pelo professor e regista no caderno os passos do seu raciocínio. Não deve consultar a IA antes de concluir a sua própria resolução."
      },
      {
        "number": 2,
        "title": "Partilha das estratégias dos alunos",
        "duration": "15 min",
        "description": "Dois ou três alunos apresentam estratégias diferentes para resolver o mesmo cálculo. Explicam cada passo e justificam as escolhas efetuadas. O professor regista no quadro as estratégias, destacando as operações e propriedades matemáticas utilizadas."
      },
      {
        "number": 3,
        "title": "Exploração de estratégias alternativas com IA",
        "duration": "15 min",
        "description": "Com a mediação do professor, a turma solicita à IA duas estratégias diferentes das já apresentadas. Os alunos analisam os passos sugeridos e verificam se os cálculos estão corretos. As estratégias só são consideradas válidas depois de confirmadas matematicamente."
      },
      {
        "number": 4,
        "title": "Comparação e justificação",
        "duration": "10 min",
        "description": "Os alunos comparam a sua estratégia com as alternativas apresentadas pela IA. Identificam semelhanças e diferenças e justificam qual consideram mais adequada para aquele cálculo, tendo em conta a clareza, a validade matemática e a facilidade de execução. Não existe a obrigação de escolher a estratégia mais rápida."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Quanto é 38 x 5?",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Sou aluno do 5.º ano e resolvi mentalmente 38 x 5 fazendo (40 x 5) - (2 x 5) = 200 - 10 = 190. Mostra-me outras duas estratégias fáceis e diferentes de cálculo mental para resolver esta multiplicação passo a passo, sem utilizar o algoritmo das contas armadas."
    },
    "finalProduct": "Registo comparativo no caderno diário com a resolução pessoal e as duas estratégias validadas com o apoio da IA, acompanhadas de nota justificativa da escolha pessoal.",
    "toolKeys": [
      "chatgpt",
      "gemini",
      "magicschool",
      "mizou"
    ],
    "themeEmoji": "🔢",
    "accentColor": "blue",
    "teacherPreparation": "Selecionar cálculos numéricos propícios a múltiplas abordagens de cálculo mental (ex.: multiplicações por 5, 9, 11, 25); preparar o projetor da sala.",
    "evaluationCriteria": [
      "Exatidão do cálculo efetuado no caderno;",
      "Clareza na explicitação dos passos do raciocínio mental próprio;",
      "Capacidade de analisar criticamente a validade e facilidade das estratégias propostas pela IA."
    ],
    "differentiation": [
      "Apoio: Uso da reta numérica ou material multibase para apoiar a visualização da decomposição;",
      "Extensão: Aplicação das estratégias descobertas a números decimais (ex.: 3,8 x 5)."
    ],
    "essentialVsExtension": {
      "essential": "Resolução individual no caderno, confronto com duas estratégias geradas e registo da justificação na aula de 50 minutos.",
      "extension": "Criação de um cartaz para a sala com o «Top 3 de Truques de Cálculo Mental da Turma»."
    },
    "offlineAlternative": "Trabalho em pares em que cada aluno ensina a sua estratégia mental ao colega sem recurso a qualquer tecnologia digital.",
    "aiPedagogicalRole": "Interlocutor alternativo que apresenta abordagens de cálculo distintas, combatendo a ideia redutora de que existe uma única forma de calcular."
  },
  {
    "id": 9,
    "title": "Sólidos Geométricos e Simetria",
    "disciplines": "Matemática",
    "cycle": "2.º Ciclo – 5.º e 6.º Anos",
    "cycleCategories": [
      "2.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Trabalho em pequenos grupos combinando modelos físicos de sólidos geométricos, espelhos planos, GeoGebra e chatbot mediado.",
    "briefDescription": "Os alunos investigam as propriedades dos poliedros (faces, vértices, arestas e a Relação de Euler) e os eixos de simetria de reflexão em figuras planas. Recorrem à IA para redigir enigmas matemáticos sobre sólidos e utilizam materiais manipuláveis e software geométrico para validar as propriedades, identificando eventuais erros ou diferenças entre a representação gerada e as propriedades geométricas dos sólidos.",
    "learningObjectives": [
      "Identificar e contar faces, vértices e arestas em sólidos geométricos, reconhecendo as características dos poliedros estudados.",
      "Verificar a Relação de Euler (F + V = A + 2) em poliedros convexos selecionados.",
      "Identificar e representar eixos de simetria em figuras planas, recorrendo a materiais manipuláveis ou a ferramentas de geometria dinâmica.",
      "Formular e resolver enigmas geométricos com vocabulário matemático correto."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Exploração e identificação dos sólidos",
        "duration": "15 min",
        "description": "Em pequenos grupos, os alunos observam e manipulam modelos físicos de sólidos geométricos. Identificam as faces, os vértices e as arestas e registam as respetivas quantidades numa tabela. O professor seleciona poliedros convexos adequados ao nível de escolaridade para a exploração da Relação de Euler."
      },
      {
        "number": 2,
        "title": "Verificação das propriedades geométricas",
        "duration": "20 min",
        "description": "Os alunos verificam a relação entre o número de faces, vértices e arestas dos sólidos selecionados, aplicando a Relação de Euler (F + V = A + 2). As contagens são confirmadas através da manipulação dos modelos físicos. O professor esclarece que esta relação é explorada, nesta atividade, para os poliedros convexos selecionados."
      },
      {
        "number": 3,
        "title": "Criação de enigmas geométricos",
        "duration": "15 min",
        "description": "Cada grupo escolhe um sólido e prepara um enigma com pistas sobre as suas características, sem revelar o nome. Com o apoio da IA, pode melhorar a clareza da formulação, mas deve verificar todas as propriedades matemáticas antes de concluir o enigma."
      },
      {
        "number": 4,
        "title": "Troca e resolução dos desafios",
        "duration": "25 min",
        "description": "Os grupos trocam os enigmas e tentam identificar os sólidos descritos. Justificam as respostas através das características geométricas e comparam as soluções com os modelos físicos disponíveis. Quando necessário, utilizam o espelho ou o GeoGebra para identificar e confirmar eixos de simetria nas figuras planas selecionadas."
      },
      {
        "number": 5,
        "title": "Sistematização das aprendizagens",
        "duration": "10 min",
        "description": "A turma revê as características dos sólidos estudados, a relação entre faces, vértices e arestas e os eixos de simetria identificados. Cada aluno regista uma conclusão sobre uma propriedade geométrica que conseguiu verificar."
      },
      {
        "number": 6,
        "title": "Transições e organização",
        "duration": "5 min",
        "description": "Tempo de reserva para distribuir e recolher materiais, organizar os grupos e realizar as transições entre tarefas. Não corresponde a uma nova atividade de aprendizagem."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Faz uma pergunta sobre o prisma hexagonal.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Cria um enigma matemático para alunos do 6.º ano sobre um poliedro convexo que tem duas bases hexagonais e seis faces laterais retangulares. O sólido tem 8 faces, 12 vértices e 18 arestas. Apresenta pistas sobre a forma das bases e das faces laterais, mas não reveles o nome do sólido nem a solução. Utiliza vocabulário matemático correto e Português de Portugal."
    },
    "finalProduct": "Ficha de Enigmas Geométricos da Turma com chave de resolução analítica verificada através de modelos manipuláveis e eixos de simetria comprovados.",
    "toolKeys": [
      "geogebra",
      "tinkercad",
      "chatgpt",
      "magicschool"
    ],
    "themeEmoji": "🔷",
    "accentColor": "indigo",
    "teacherPreparation": "Disponibilizar modelos físicos tridimensionais de poliedros, espelhos planos pequenos e computadores ou tablets com GeoGebra instalado ou online.",
    "evaluationCriteria": [
      "Identificação e contagem corretas das faces, dos vértices e das arestas dos sólidos analisados.",
      "Aplicação correta da Relação de Euler nos poliedros convexos selecionados.",
      "Identificação e justificação dos eixos de simetria nas figuras planas trabalhadas.",
      "Clareza e correção matemática dos enigmas construídos pelos grupos."
    ],
    "differentiation": [
      "Apoio: Utilização de planificações em papel para contagem dos elementos antes da montagem do sólido;",
      "Extensão: Exploração de outro poliedro convexo, com identificação do número de faces, vértices e arestas e verificação da Relação de Euler."
    ],
    "essentialVsExtension": {
      "essential": "Manipulação física dos poliedros, cálculo da fórmula de Euler, elaboração de 1 enigma com o chatbot e determinação de eixos com espelho.",
      "extension": "Construção de construções dinâmicas de rotação de sólidos 3D no GeoGebra ou Tinkercad."
    },
    "offlineAlternative": "Atividade desenvolvida exclusivamente com sólidos de madeira/acrílico, espelhos de mão e construções em papel com dobragens para descobrir simetrias.",
    "aiPedagogicalRole": "A IA apoia a formulação de enigmas geométricos, mas as características dos sólidos, as contagens e as relações matemáticas têm de ser verificadas pelos alunos através de modelos físicos e do raciocínio matemático. As respostas da ferramenta não constituem prova da correção das propriedades geométricas."
  },
  {
    "id": 10,
    "title": "Utilização Responsável da IA",
    "disciplines": "Português | Cidadania e Desenvolvimento",
    "cycle": "2.º Ciclo – 5.º Ano",
    "cycleCategories": [
      "2.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Trabalho em pequenos grupos com pesquisa orientada, confrontação de fontes e debate em plenário da turma.",
    "briefDescription": "Os alunos analisam situações de utilização da Inteligência Artificial em contexto escolar e quotidiano, identificando benefícios, riscos e responsabilidades. Através de casos práticos, materiais informativos e orientações institucionais da CNPD e da SeguraNet, discutem a proteção de dados pessoais, a privacidade, a fiabilidade da informação e a honestidade académica. No final, elaboram uma carta de princípios para uma utilização responsável da IA na escola.",
    "learningObjectives": [
      "Identificar dados pessoais e reconhecer os riscos associados à sua partilha em ferramentas digitais e de Inteligência Artificial.",
      "Distinguir informações e recomendações provenientes de fontes institucionais de afirmações apresentadas por ferramentas de IA que não tenham sido verificadas.",
      "Propor regras claras para uma utilização responsável, segura e ética da Inteligência Artificial em contexto escolar."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Análise de situações de utilização da IA",
        "duration": "15 min",
        "description": "O professor apresenta situações concretas de utilização da IA, como pedir ajuda num trabalho escolar, introduzir dados pessoais numa ferramenta ou utilizar uma resposta gerada sem a verificar. Em pequenos grupos, os alunos identificam os benefícios e os possíveis riscos de cada situação."
      },
      {
        "number": 2,
        "title": "Consulta de fontes de informação",
        "duration": "20 min",
        "description": "Os grupos consultam excertos de materiais informativos da SeguraNet e da Comissão Nacional de Proteção de Dados, previamente selecionados pelo professor. Identificam orientações relacionadas com a proteção de dados pessoais, a utilização de imagens, a privacidade e a segurança dos menores. Registam as recomendações relevantes e a respetiva fonte."
      },
      {
        "number": 3,
        "title": "Identificação de riscos e consequências",
        "duration": "20 min",
        "description": "Cada grupo analisa as situações apresentadas inicialmente e identifica os riscos associados a cada comportamento. Discute as consequências da partilha de dados pessoais, da utilização de informação não verificada, da cópia de conteúdos gerados por IA e da dependência excessiva destas ferramentas."
      },
      {
        "number": 4,
        "title": "Elaboração de regras de utilização responsável",
        "duration": "20 min",
        "description": "Cada grupo propõe regras claras para a utilização da IA em contexto escolar. As regras devem abranger a proteção da privacidade, a verificação da informação, a identificação do recurso à IA e o respeito pelo trabalho dos outros. As propostas devem ser fundamentadas nas orientações consultadas."
      },
      {
        "number": 5,
        "title": "Carta de compromisso da turma",
        "duration": "15 min",
        "description": "A turma apresenta e discute as regras propostas pelos grupos. Em conjunto, seleciona as mais relevantes e redige a versão final da Carta de Compromisso Digital da Turma, que estabelece princípios de utilização responsável da Inteligência Artificial na escola."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "O que posso fazer com a inteligência artificial para me ajudar a estudar?",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Apresenta três situações fictícias de utilização da Inteligência Artificial por alunos do 5.º ano. Para cada situação, identifica um possível benefício, um risco e uma forma responsável de agir. Não afirmes que conheces ou controlas o tratamento dos dados pessoais dos utilizadores. Escreve em Português de Portugal, com linguagem adequada à idade dos alunos."
    },
    "finalProduct": "Carta de Princípios para a Utilização Responsável da IA na Escola, elaborada coletivamente, com regras claras sobre privacidade, proteção de dados pessoais, verificação da informação e honestidade académica. A carta destina-se à consulta e discussão no contexto da turma.",
    "toolKeys": [
      "duck_ai",
      "perplexity",
      "copilot",
      "chatgpt"
    ],
    "themeEmoji": "🛡️",
    "accentColor": "teal",
    "teacherPreparation": "Selecionar excertos dos folhetos informativos do projeto SeguraNet e da CNPD sobre direitos digitais e proteção da privacidade de menores.",
    "evaluationCriteria": [
      "Compreensão do conceito de dados pessoais e dos riscos da sua partilha em plataformas digitais;",
      "Capacidade de questionar as respostas da IA confrontando-as com fontes institucionais;",
      "Clareza e pertinência das regras propostas para a convivência escolar digital."
    ],
    "differentiation": [
      "Apoio: Cartões com situações concretas do dia a dia escolar (ex.: «Copiar todo o trabalho de casa do chatbot») para análise em vez de redação abstrata;",
      "Extensão: Elaboração de uma pequena mensagem de sensibilização dirigida aos encarregados de educação."
    ],
    "essentialVsExtension": {
      "essential": "Análise de situações práticas de utilização da IA, consulta de orientações institucionais da CNPD e da SeguraNet, identificação de riscos e elaboração coletiva da Carta de Princípios.",
      "extension": "Criação de um folheto desdobrável em suporte digital para apresentação a outras turmas do ciclo."
    },
    "offlineAlternative": "Análise de estudos de caso reais e dilemas éticos impressos em papel, dispensando qualquer ligação à rede durante a aula.",
    "aiPedagogicalRole": "Objeto de inquirição e escrutínio crítico, evidenciando que a máquina não é autoridade neutral sobre as suas próprias condições de serviço."
  },
  {
    "id": 11,
    "title": "A água está em tudo: ciclo da água",
    "disciplines": "Ciências Naturais",
    "cycle": "2.º Ciclo – 5.º Ano",
    "cycleCategories": [
      "2.º Ciclo"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho colaborativo em pequenos grupos através de ambientes educativos seguros sem necessidade de registo pessoal dos alunos.",
    "briefDescription": "Com base nas aprendizagens essenciais sobre os estados físicos da matéria e o ciclo hidrológico, os alunos esquematizam os processos térmicos e biológicos da circulação da água. Recorrem à IA para apoiar a formulação de perguntas científicas com distratores plausíveis e testam as questões entre si num desafio didático, auditando o rigor das respostas geradas.",
    "learningObjectives": [
      "Explicar as etapas do ciclo da água (evaporação, transpiração, condensação, precipitação, escoamento, infiltração) e as mudanças de estado físico correspondentes;",
      "Formular e auditar criticamente perguntas científicas de escolha múltipla, assegurando a exatidão dos conceitos e a plausibilidade dos distratores;",
      "Aplicar estratégias de avaliação formativa entre pares através de desafios didáticos."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Representação do ciclo da água",
        "duration": "15 min",
        "description": "Individualmente, os alunos representam no caderno o ciclo da água, identificando os principais processos: evaporação, condensação, precipitação, infiltração, escoamento e transpiração. O professor esclarece dúvidas sobre os estados físicos da água e os processos envolvidos."
      },
      {
        "number": 2,
        "title": "Formulação de perguntas científicas",
        "duration": "25 min",
        "description": "Em pequenos grupos, os alunos selecionam dois aspetos do ciclo da água sobre os quais pretendem construir perguntas. Com o apoio da IA, podem obter propostas de formulação para perguntas de escolha múltipla. Cada grupo deve produzir apenas duas perguntas, evitando a criação de um número excessivo de questões."
      },
      {
        "number": 3,
        "title": "Validação e construção do desafio",
        "duration": "25 min",
        "description": "Os alunos verificam cientificamente as duas perguntas, as opções de resposta e as respetivas justificações, consultando o manual escolar e os materiais fornecidos pelo professor. Corrigem eventuais erros, garantem que existe uma única resposta correta e passam as perguntas validadas para a ficha de desafio do grupo."
      },
      {
        "number": 4,
        "title": "Troca e resolução dos desafios",
        "duration": "25 min",
        "description": "Os grupos trocam as fichas e respondem às perguntas dos colegas. Cada grupo deve justificar as respostas escolhidas e assinalar eventuais ambiguidades ou incorreções. No final, os autores das perguntas analisam o feedback recebido e esclarecem as dúvidas identificadas."
      },
      {
        "number": 5,
        "title": "Síntese das aprendizagens",
        "duration": "10 min",
        "description": "A turma revê os principais processos do ciclo da água e as mudanças de estado físico envolvidas. O professor esclarece as dificuldades identificadas durante a resolução dos desafios e sistematiza os conceitos essenciais."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Faz perguntas sobre o ciclo da água.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Cria exatamente duas perguntas de escolha múltipla para alunos do 5.º ano sobre o ciclo da água. As perguntas devem abordar a evaporação, a condensação, a precipitação e as mudanças de estado físico da água, de acordo com os conteúdos fornecidos pelo professor. Para cada pergunta, apresenta três opções de resposta, assinala a resposta correta e explica brevemente a razão. Utiliza Português de Portugal, linguagem adequada ao 5.º ano e informação cientificamente correta. Não acrescentes conteúdos que não tenham sido trabalhados na aula."
    },
    "finalProduct": "Ficha de Desafio «Missão: Proteger o Ciclo da Água», com perguntas concebidas, auditadas e resolvidas entre as equipas da turma.",
    "toolKeys": [
      "magicschool",
      "mizou",
      "chatgpt",
      "notebooklm",
      "genially",
      "wordwall",
      "educaplay",
      "canva"
    ],
    "themeEmoji": "💧",
    "accentColor": "sky",
    "teacherPreparation": "Assegurar a revisão prévia das mudanças de estado físico da água; preparar modelos de fichas de desafio para preenchimento pelos grupos.",
    "evaluationCriteria": [
      "Exatidão científica na associação entre os fenómenos do ciclo da água e as mudanças de estado físico;",
      "Qualidade das perguntas formuladas e rigor das justificações dos distratores;",
      "Capacidade de dar e receber feedback construtivo na resolução cruzada entre pares."
    ],
    "differentiation": [
      "Apoio: Fornecimento de um esquema com o vocabulário obrigatório e setas de calor/arrefecimento;",
      "Extensão: Formulação de uma questão contextualizada sobre a sobre-exploração dos aquíferos em períodos de seca."
    ],
    "essentialVsExtension": {
      "essential": "Representação do ciclo da água no caderno, formulação e validação de duas perguntas de escolha múltipla por grupo e troca das fichas de desafio entre grupos para resolução e correção.",
      "extension": "Criação de um quiz digital interativo (Kahoot! ou Quizizz) com as melhores perguntas de cada equipa para dinamizar entre turmas do mesmo ano de escolaridade."
    },
    "offlineAlternative": "Construção de um jogo de tabuleiro em cartolina onde o avanço das peças depende de responder a cartas com perguntas elaboradas pelos grupos.",
    "aiPedagogicalRole": "Assistente de redação que propõe formulações de problemas e distratores para serem filtrados e corrigidos pelo conhecimento científico dos alunos."
  },
  {
    "id": 12,
    "title": "Equações em Ação",
    "disciplines": "Matemática",
    "cycle": "3.º Ciclo – 7.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "2 aulas (90 minutos)",
    "modality": "Trabalho em pequenos grupos em ambientes de IA sem criação de contas individuais pelos alunos.",
    "briefDescription": "Os alunos aprofundam a tradução entre linguagem natural e linguagem algébrica através de equações lineares do 1.º grau. Partindo da equação 3x + 15 = 60, usam o chatbot para criar um contexto do quotidiano, realizam a resolução analítica no caderno, interpretam o valor prático da incógnita e desafiam os colegas com o problema concebido.",
    "learningObjectives": [
      "Traduzir situações do quotidiano para linguagem algébrica através de equações lineares do 1.º grau a uma incógnita;",
      "Resolver analiticamente equações do 1.º grau aplicando os princípios de equivalência (adição e multiplicação);",
      "Validar criticamente enunciados e soluções gerados com apoio de IA, garantindo a coerência matemática e a verosimilhança do contexto real."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Compreensão da equação e definição do contexto",
        "duration": "15 min",
        "description": "O professor apresenta a equação 3x + 15 = 60 e orienta a identificação dos seus elementos. Os alunos interpretam o significado da incógnita e discutem situações do quotidiano que possam ser representadas por esta expressão, identificando o valor fixo, o custo variável e o total."
      },
      {
        "number": 2,
        "title": "Construção do enunciado do problema",
        "duration": "20 min",
        "description": "Em pequenos grupos, os alunos utilizam a IA para criar um enunciado contextualizado que corresponda à equação apresentada. O texto deve permitir identificar uma quantia fixa de 15 €, um custo de 3 € por cada unidade e um total de 60 €. A equação e a solução não devem aparecer no enunciado destinado aos colegas."
      },
      {
        "number": 3,
        "title": "Resolução e verificação matemática",
        "duration": "25 min",
        "description": "Os alunos resolvem a equação no caderno, aplicando os princípios de equivalência: 3x + 15 = 60; 3x = 60 - 15; 3x = 45; x = 15. Verificam a solução por substituição na equação inicial e interpretam o resultado no contexto do problema. Confirmam também se a situação apresentada é coerente com o resultado obtido."
      },
      {
        "number": 4,
        "title": "Troca e resolução dos problemas",
        "duration": "20 min",
        "description": "Os grupos trocam os enunciados, sem mostrar a equação nem a solução. Cada grupo identifica a incógnita, constrói a equação correspondente e resolve o problema. No final, comparam a resolução obtida com a solução preparada pelo grupo que criou o enunciado."
      },
      {
        "number": 5,
        "title": "Síntese individual",
        "duration": "10 min",
        "description": "Cada aluno regista no caderno a equação trabalhada, os passos essenciais da resolução e o significado da solução no contexto do problema. O professor esclarece dificuldades relacionadas com a tradução entre linguagem natural e linguagem algébrica."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Inventa um problema de matemática com uma equação do 7.º ano.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Cria o enunciado de uma situação-problema para alunos do 7.º ano que corresponda exatamente à equação 3x + 15 = 60. O contexto deve representar uma taxa fixa de inscrição de 15 euros e um custo adicional de 3 euros por cada jogo disputado, sendo o custo total de 60 euros. Não incluas a equação nem a solução no enunciado. Utiliza uma situação plausível e escreve em Português de Portugal."
    },
    "finalProduct": "Ficha «O Desafio das Equações da Turma», contendo o enunciado criado pelo grupo, a equação correspondente, os passos da resolução e a interpretação da solução no contexto apresentado.",
    "toolKeys": [
      "magicschool",
      "duck_ai",
      "chatgpt",
      "gemini",
      "geogebra"
    ],
    "themeEmoji": "🎮",
    "accentColor": "violet",
    "teacherPreparation": "Estruturar o protocolo de validação algébrica em 5 passos (identificação da incógnita, equação, resolução, verificação e resposta contextualizada no problema).",
    "evaluationCriteria": [
      "Tradução correta e sem ambiguidades entre a situação descrita e a equação 3x + 15 = 60;",
      "Aplicação rigorosa dos princípios de equivalência na resolução analítica até à solução x = 15;",
      "Interpretação e validação do significado prático do resultado no contexto da situação real."
    ],
    "differentiation": [
      "Apoio: Representação com o modelo visual da balança de dois pratos para apoiar o isolamento do termo com incógnita;",
      "Extensão: Formulação de uma variante do problema envolvendo coeficientes fracionários ou equações com parênteses."
    ],
    "essentialVsExtension": {
      "essential": "Tradução do problema da equação 3x + 15 = 60, resolução analítica completa no caderno e desafio entre pares.",
      "extension": "Criação de um mural partilhado no Padlet com o banco de problemas algébricos da turma e chaves de resolução."
    },
    "offlineAlternative": "Elaboração manual de situações-problema pelos alunos a partir da equação atribuída, sem recorrer a meios informáticos.",
    "aiPedagogicalRole": "Gerador de enredos narrativos do quotidiano para testar a destreza dos alunos na modelação algébrica."
  },
  {
    "id": 13,
    "title": "Mudanças Climáticas e Ciclo da Água",
    "disciplines": "Ciências Naturais | Geografia",
    "cycle": "3.º Ciclo – 8.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho autónomo de grupo em computadores com ferramentas de pesquisa sem recolha de dados pessoais, focado em dados oficiais abertos.",
    "briefDescription": "Os alunos analisam dados reais de precipitação em Portugal, disponibilizados pelo professor a partir de uma estação meteorológica identificada e de uma fonte verificável. Organizam os valores numa tabela, constroem um gráfico e interpretam a variabilidade observada ao longo dos anos. Com apoio da IA, podem organizar informação proveniente de documentos oficiais, mas verificam os dados nas fontes originais. A partir da análise, propõem medidas concretas de utilização eficiente da água na escola, distinguindo as variações meteorológicas de conclusões sobre tendências climáticas.",
    "learningObjectives": [
      "Ler e interpretar uma série de dados anuais de precipitação proveniente de uma estação meteorológica identificada.",
      "Organizar os dados numa tabela e construir um gráfico com título, eixos, escala e unidades adequadas.",
      "Identificar variações nos valores de precipitação e reconhecer que uma série limitada a uma estação não permite, por si só, demonstrar uma tendência climática nacional.",
      "Apresentar duas medidas exequíveis de utilização eficiente da água na escola, fundamentando a sua pertinência."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Leitura e análise dos dados",
        "duration": "15 min",
        "description": "O professor disponibiliza uma tabela com os valores anuais de precipitação de uma estação meteorológica identificada, indicando a origem dos dados e o período analisado. Em pequenos grupos, os alunos observam os valores, identificam os anos com maior e menor precipitação e registam as primeiras observações."
      },
      {
        "number": 2,
        "title": "Construção do gráfico",
        "duration": "25 min",
        "description": "Os grupos organizam os dados numa folha de cálculo ou em papel milimétrico e constroem um gráfico adequado à representação da precipitação anual. Identificam o título, os eixos, as unidades e a escala utilizada. Antes de prosseguir, confirmam se os valores representados correspondem aos dados fornecidos."
      },
      {
        "number": 3,
        "title": "Interpretação dos resultados",
        "duration": "25 min",
        "description": "Os alunos analisam o gráfico, identificando anos com valores mais elevados ou mais reduzidos e observando as variações ao longo do período. Distinguem oscilações anuais de tendências de longo prazo. Não devem concluir que existe uma tendência de alteração climática apenas com base numa série curta ou numa única estação meteorológica. As conclusões devem limitar-se ao que os dados permitem afirmar."
      },
      {
        "number": 4,
        "title": "Propostas de utilização eficiente da água",
        "duration": "20 min",
        "description": "Com base nos problemas de gestão da água discutidos na aula, cada grupo propõe duas medidas concretas para melhorar a utilização da água na escola. Para cada medida, explica o que deve ser feito, onde pode ser aplicada e que benefício se pretende alcançar. Não devem atribuir valores quantitativos à poupança sem dados que permitam calculá-la."
      },
      {
        "number": 5,
        "title": "Apresentação e síntese",
        "duration": "15 min",
        "description": "Cada grupo apresenta o gráfico, uma conclusão fundamentada nos dados e as duas medidas propostas. A turma compara as conclusões e discute a importância de utilizar dados fiáveis antes de formular afirmações sobre precipitação, seca e alterações climáticas."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Ajuda-me a interpretar esta tabela com valores anuais de precipitação e a identificar os anos com maior e menor precipitação.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Vou apresentar-te uma tabela com os valores anuais de precipitação de uma estação meteorológica identificada, incluindo a localização, o período de observação e a unidade de medida. Analisa exclusivamente os dados que te forneço. Identifica o valor máximo, o valor mínimo e as principais variações observadas. Não inventes, estimes ou completes valores em falta. Não acrescentes dados de outras fontes. Não concluas que existe uma tendência climática com base apenas nesta tabela. Distingue claramente aquilo que os dados permitem afirmar daquilo que não permitem concluir. Escreve em Português de Portugal e apresenta uma interpretação adequada a alunos do 8.º ano."
    },
    "finalProduct": "Gráfico da precipitação anual da estação meteorológica selecionada, acompanhado de uma breve interpretação escrita com duas conclusões fundamentadas nos dados e duas propostas concretas de utilização eficiente da água na escola. O trabalho deve identificar a estação, a localização, o período analisado, a unidade de medida e a fonte original dos dados.",
    "toolKeys": [
      "perplexity",
      "notebooklm",
      "chatgpt",
      "google_sheets",
      "datawrapper"
    ],
    "themeEmoji": "🌍",
    "accentColor": "emerald",
    "teacherPreparation": "Selecionar e descarregar previamente uma série de dados anuais de precipitação proveniente de uma fonte oficial, preferencialmente do IPMA. Identificar a estação meteorológica, a sua localização, o período analisado, a unidade de medida e a origem dos dados. Disponibilizar a mesma tabela a todos os grupos. Verificar que a série contém dados suficientes para a construção de um gráfico e explicar aos alunos os limites das conclusões que podem retirar de uma única série de precipitação.",
    "evaluationCriteria": [
      "Rigor na extração, tratamento e representação gráfica de dados numéricos oficiais;",
      "Diferenciação clara entre variabilidade meteorológica pontual e tendência climática;",
      "Pertinência e exequibilidade técnica das medidas propostas no plano de ação escolar."
    ],
    "differentiation": [
      "Apoio: Disponibilização de modelo pré-formatado de folha de cálculo com eixos e unidades identificadas;",
      "Extensão: Cálculo da média móvel quinquenal dos valores de precipitação para suavizar anomalias anuais."
    ],
    "essentialVsExtension": {
      "essential": "Análise de uma tabela de precipitação anual, construção de um gráfico, interpretação dos dados e apresentação de duas propostas exequíveis de utilização eficiente da água na escola.",
      "extension": "Os alunos podem aprofundar a interpretação dos dados, comparando diferentes intervalos temporais da série de precipitação fornecida pelo professor. Devem identificar semelhanças e diferenças entre os períodos e explicar os limites das conclusões que podem retirar dos dados disponíveis. Não devem estimar poupanças financeiras para a autarquia nem quantificar consumos ou benefícios sem dados específicos que permitam realizar esses cálculos."
    },
    "offlineAlternative": "Análise de boletins climatológicos históricos impressos e construção integral de gráficos com régua e papel milimétrico.",
    "aiPedagogicalRole": "A IA funciona como apoio à organização e interpretação preliminar da tabela fornecida pelo professor. Não deve ser utilizada como fonte dos valores meteorológicos nem para inventar dados. A interpretação final, os cálculos e as conclusões devem ser verificados pelos alunos através da tabela original."
  },
  {
    "id": 14,
    "title": "Conversas Iluminadas",
    "disciplines": "História | Português | TIC",
    "cycle": "3.º Ciclo – 8.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "3 aulas (150 minutos)",
    "modality": "Trabalho interdisciplinar em pequenos grupos recorrendo a fontes primárias e secundárias, ferramentas de IA e gravação vocal direta dos alunos.",
    "briefDescription": "Os alunos investigam as ideias matrizes do Iluminismo (Voltaire, Montesquieu, Rousseau, John Locke, Marquês de Pombal) através de excertos documentais de época. Recorrem ao chatbot para ensaiar a argumentação de um diálogo dramatizado, validam o texto com o docente para evitar anacronismos e citações apócrifas, e interpretam os papéis com a sua própria voz em dramatização ao vivo ou gravação multimédia.",
    "learningObjectives": [
      "Caracterizar os princípios do Iluminismo (razão, progresso, separação dos poderes, soberania popular, tolerância e direito à instrução);",
      "Redigir textos dramáticos com correção terminológica e adequação conceptual ao pensamento do século XVIII;",
      "Validar a autenticidade de citações e posições ideológicas, evitando anacronismos históricos gerados por modelos de linguagem."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Investigação das figuras do Iluminismo",
        "duration": "30 min",
        "description": "Cada grupo seleciona duas figuras do Iluminismo entre as personalidades indicadas pelo professor. Consulta o manual escolar e os excertos documentais disponibilizados para identificar as principais ideias de cada pensador. Regista as posições relativas à liberdade, à organização do poder, à sociedade ou à educação, de acordo com as figuras selecionadas."
      },
      {
        "number": 2,
        "title": "Construção do diálogo",
        "duration": "35 min",
        "description": "Com base na investigação, os alunos elaboram um diálogo curto entre as duas figuras históricas. Podem recorrer à IA para obter sugestões de perguntas, argumentos ou organização das falas. O diálogo deve apresentar ideias historicamente fundamentadas, sem atribuir aos pensadores citações que não estejam documentadas. Os alunos são responsáveis pela seleção e redação da versão final."
      },
      {
        "number": 3,
        "title": "Revisão e validação histórica",
        "duration": "25 min",
        "description": "Os grupos reveem o diálogo com o apoio do professor e confrontam as ideias apresentadas com as fontes consultadas. Corrigem eventuais erros históricos, conceitos inadequados e afirmações anacrónicas. Assinalam no guião as fontes utilizadas para fundamentar as ideias dos intervenientes."
      },
      {
        "number": 4,
        "title": "Preparação da apresentação",
        "duration": "20 min",
        "description": "Os alunos distribuem as personagens e ensaiam a leitura dramatizada. Verificam a sequência das falas, a clareza da comunicação e a duração da apresentação. O professor ajuda a organizar a ordem das apresentações e a assegurar que todos os grupos dispõem de tempo adequado."
      },
      {
        "number": 5,
        "title": "Apresentação dos diálogos",
        "duration": "30 min",
        "description": "Os grupos apresentam os seus diálogos à turma. Cada apresentação deve ter aproximadamente quatro minutos, ajustando-se o número de grupos ao tempo disponível. Os colegas identificam as ideias históricas centrais e registam uma diferença entre as posições dos dois pensadores."
      },
      {
        "number": 6,
        "title": "Síntese",
        "duration": "10 min",
        "description": "A turma identifica as ideias do Iluminismo que surgiram nos diferentes diálogos e retoma os conceitos estudados. O professor esclarece eventuais imprecisões e relaciona as ideias apresentadas com o contexto histórico do século XVIII."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Cria um diálogo didático fictício que compare algumas ideias de Montesquieu e Rousseau.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Com base exclusivamente nos excertos documentais fornecidos pelo professor, ajuda-nos a construir um diálogo didático fictício entre Montesquieu e Rousseau, destinado a alunos do 8.º ano. O diálogo deve comparar as ideias documentadas dos dois pensadores sobre a liberdade, a organização do poder e a participação dos cidadãos. Apresenta quatro intervenções curtas de cada personagem, utilizando Português de Portugal e linguagem adequada ao nível de escolaridade. Não inventes citações nem atribuas frases fictícias como se fossem palavras efetivamente proferidas pelos autores. Não representes o diálogo como um encontro histórico real. Identifica-o como uma reconstrução ficcional com finalidade pedagógica."
    },
    "finalProduct": "Guião de diálogo didático ficcional entre duas figuras do Iluminismo, fundamentado em fontes históricas e validado pelo professor, acompanhado de uma apresentação dramatizada à turma. O guião deve identificar claramente que se trata de uma reconstrução pedagógica e não de uma conversa histórica real.",
    "toolKeys": [
      "chatgpt",
      "claude",
      "canva",
      "adobe_express",
      "vocaroo",
      "capcut"
    ],
    "themeEmoji": "🕯️",
    "accentColor": "amber",
    "teacherPreparation": "Disponibilizar uma antologia de pequenos excertos de textos originais de Locke, Montesquieu, Rousseau e Voltaire; preparar matriz de validação histórica.",
    "evaluationCriteria": [
      "Fidelidade conceptual aos princípios filosóficos e políticos de cada autor;",
      "Inexistência de anacronismos temporais ou atribuição de citações apócrifas;",
      "Dicção, expressividade e respeito pela convenção do texto dramático na apresentação oral."
    ],
    "differentiation": [
      "Apoio: Fornecimento de uma matriz comparativa com as teses de cada filósofo organizadas por temas (poder, religião, educação);",
      "Extensão: Integração da figura do Marquês de Pombal e debate sobre o Despotismo Esclarecido em Portugal."
    ],
    "essentialVsExtension": {
      "essential": "Investigação documental de duas figuras do Iluminismo por grupo, elaboração de um diálogo curto, validação histórica com o professor e apresentação oral à turma.",
      "extension": "Gravação do diálogo em podcast de rádio histórica com banda sonora de música barroca (ex.: Bach, Vivaldi) livre de direitos."
    },
    "offlineAlternative": "Dramatização de época ao vivo na sala com figurinos e adereços simbólicos concebidos pelos alunos a partir de pesquisa em biblioteca.",
    "aiPedagogicalRole": "Parceiro de ensaio que simula argumentos e réplicas, exigindo validação rigorosa dos alunos através de fontes históricas primárias."
  },
  {
    "id": 15,
    "title": "Arte, Criatividade e Tecnologia",
    "disciplines": "Educação Visual | Cidadania e Desenvolvimento",
    "cycle": "3.º Ciclo – 9.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho em pares em computadores ou tablets, associando geradores de imagem supervisionados a software de edição gráfica.",
    "briefDescription": "Os alunos concebem cartazes de sensibilização social ou ambiental, partindo da definição de uma mensagem clara e de um público-alvo. Utilizam uma ferramenta de Inteligência Artificial para gerar uma proposta visual e recorrem a um editor gráfico para selecionar, organizar e editar os elementos do cartaz. A revisão centra-se na legibilidade, no contraste e na relação entre a imagem e a mensagem, valorizando as decisões criativas dos alunos.",
    "learningObjectives": [
      "Definir uma mensagem de sensibilização clara e adequada ao tema e ao público-alvo do cartaz.",
      "Selecionar e editar elementos visuais, garantindo a legibilidade do texto e um contraste adequado.",
      "Articular a imagem e a mensagem escrita de forma coerente.",
      "Justificar as opções tomadas na criação e edição do cartaz, distinguindo a proposta gerada pela IA das decisões finais dos alunos."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Escolha do tema e planeamento do cartaz",
        "duration": "15 min",
        "description": "Em pares, os alunos escolhem um tema de sensibilização social ou ambiental. Definem a mensagem principal que pretendem transmitir e fazem um esboço simples da composição do cartaz, identificando o elemento visual principal e o espaço destinado ao título ou slogan."
      },
      {
        "number": 2,
        "title": "Geração da imagem de apoio",
        "duration": "20 min",
        "description": "Os alunos elaboram uma descrição da imagem que pretendem utilizar no cartaz. Com apoio do professor, utilizam uma ferramenta de geração de imagens para obter uma proposta visual. A imagem gerada deve servir de ponto de partida e pode ser modificada ou substituída pelos alunos."
      },
      {
        "number": 3,
        "title": "Composição e edição do cartaz",
        "duration": "35 min",
        "description": "Os pares integram a imagem selecionada num editor gráfico e constroem o cartaz. Inserem o título ou slogan, organizam os elementos e ajustam o tamanho do texto, as cores e a posição dos componentes. Devem assegurar que a mensagem é legível e que existe uma relação clara entre a imagem e o tema escolhido."
      },
      {
        "number": 4,
        "title": "Análise e partilha",
        "duration": "20 min",
        "description": "Cada par apresenta o cartaz e explica as opções tomadas. A turma observa se a mensagem é percetível, se o texto se lê facilmente e se a imagem contribui para a compreensão do tema. Os alunos identificam uma qualidade do trabalho e uma possível melhoria."
      },
      {
        "number": 5,
        "title": "Reflexão sobre o processo",
        "duration": "10 min",
        "description": "Os alunos comparam a imagem inicialmente gerada com o cartaz final e explicam as alterações que realizaram. Identificam as decisões que foram tomadas por si e refletem sobre o papel da IA como ferramenta de apoio à criação visual."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Faz um cartaz sobre o plástico no mar.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Composição visual conceitual minimalista para cartaz de intervenção ecológica: uma tartaruga marinha a nadar em direção à superfície vista de baixo, cuja carapaça se dissolve gradualmente em garrafas de plástico transparente. Iluminação lateral dramática de oceano profundo, com o terço superior em azul-marinho uniforme e sem texto, deixando espaço livre para a inserção de tipografia."
    },
    "finalProduct": "Cartaz digital de sensibilização social ou ambiental, acompanhado de uma breve apresentação das opções tomadas pelos alunos e da explicação da relação entre a imagem e a mensagem.",
    "toolKeys": [
      "bing",
      "ideogram",
      "fotor",
      "photopea",
      "pixlr",
      "canva"
    ],
    "themeEmoji": "🎨",
    "accentColor": "teal",
    "teacherPreparation": "Preparar uma apresentação breve sobre hierarquia tipográfica e contraste visual; disponibilizar ligações diretas a editores gráficos gratuitos online.",
    "evaluationCriteria": [
      "Clareza e adequação da mensagem ao tema escolhido.",
      "Legibilidade do texto e contraste suficiente entre os elementos.",
      "Relação coerente entre a imagem e a mensagem do cartaz.",
      "Capacidade de justificar as escolhas e alterações realizadas pelos alunos."
    ],
    "differentiation": [
      "Apoio: Disponibilização de modelos de grelha de composição com proporções modulares pré-definidas;",
      "Extensão: Criação de variantes do cartaz redimensionadas para formatos de histórias ou publicações de redes sociais escolares."
    ],
    "essentialVsExtension": {
      "essential": "Esboço em papel, geração de 1 imagem base, edição da composição com slogan no editor gráfico e apresentação em sala.",
      "extension": "Impressão em grande formato para dinamização de uma campanha de sensibilização na biblioteca ou átrio da escola."
    },
    "offlineAlternative": "Realização do cartaz através de técnica mista de colagem manual de recortes de imprensa, estêncil e pintura a guache sobre cartolina.",
    "aiPedagogicalRole": "Produtor de texturas e elementos visuais brutos que requerem triagem, tratamento e montagem crítica pelo aluno."
  },
  {
    "id": 16,
    "title": "Texto de Jornal: Artigo de Opinião",
    "disciplines": "Português",
    "cycle": "3.º Ciclo – 9.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho individual de escrita autónoma, apoiado por plataformas de IA sem registo pessoal nas fases de pré-escrita e revisão diagnóstica.",
    "briefDescription": "Os alunos exercitam a produção de um artigo de opinião estruturado sobre um tema contemporâneo controverso. A redação é executada integralmente pelo estudante. A IA fornece comentários sobre a clareza da tese, a coerência dos argumentos, a existência de repetições e possíveis contra-argumentos, cabendo ao aluno decidir quais as sugestões que considera pertinentes.",
    "learningObjectives": [
      "Dominar a estrutura retórica do artigo de opinião (introdução com tese, corpo argumentativo com evidências e refutação, e conclusão reiterativa);",
      "Mobilizar conectores discursivos variados e manter a coesão e coerência textual em Português de Portugal;",
      "Utilizar a IA estritamente como consultora de revisão e interlocutora de contra-argumentação, sem delegar a autoria da escrita."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Escolha do tema e formulação da tese",
        "duration": "15 min",
        "description": "Cada aluno escolhe um tema proposto pelo professor ou previamente acordado com a turma. Formula uma posição clara sobre o tema e regista dois argumentos que sustentem a sua opinião. Identifica também possíveis evidências ou exemplos que possam apoiar esses argumentos."
      },
      {
        "number": 2,
        "title": "Escrita da primeira versão",
        "duration": "35 min",
        "description": "Cada aluno redige individualmente a primeira versão do artigo de opinião, organizando o texto em introdução, desenvolvimento argumentativo e conclusão. Como referência, o texto deverá ter entre 150 e 200 palavras, podendo o professor ajustar a extensão ao perfil da turma. A primeira versão deve ser escrita pelo aluno, sem recurso a ferramentas de geração automática de texto."
      },
      {
        "number": 3,
        "title": "Consulta da IA para obter feedback",
        "duration": "20 min",
        "description": "O aluno seleciona um excerto do seu texto e solicita à IA comentários sobre a clareza da tese, a coerência dos argumentos, a existência de repetições e possíveis contra-argumentos. A instrução deve indicar expressamente que a ferramenta não pode reescrever o texto nem produzir uma versão alternativa. O objetivo é obter perguntas e observações que ajudem o aluno a rever o seu trabalho."
      },
      {
        "number": 4,
        "title": "Revisão e reescrita autónoma",
        "duration": "20 min",
        "description": "Cada aluno analisa as observações recebidas e decide quais são pertinentes. Revê o seu artigo, melhora as passagens que considerar necessário e confirma a correção linguística, a organização das ideias e a utilização de conectores. A versão final deve manter a autoria e a voz do aluno."
      },
      {
        "number": 5,
        "title": "Registo das alterações",
        "duration": "10 min",
        "description": "Cada aluno regista duas alterações que realizou e justifica por que razão as considerou importantes. Entrega a primeira versão, a versão final e a breve reflexão sobre o processo de revisão."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Vê se este meu texto de opinião sobre telemóveis na escola está bom e corrige os erros.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Lê o seguinte excerto do meu artigo de opinião, escrito em Português de Portugal. Não reescrevas o texto, não acrescentes frases e não produzas uma versão alternativa. Indica apenas: 1) se a minha opinião principal está clara; 2) se os argumentos apresentados são coerentes com essa opinião; 3) se existem repetições ou problemas de ligação entre frases; 4) que contra-argumento relevante poderia ser considerado. Apresenta comentários curtos, sem fazeres alterações ao texto original."
    },
    "finalProduct": "Artigo de opinião final revisto pelo aluno, acompanhado da folha de rascunho inicial e da justificação das alterações retóricas introduzidas.",
    "toolKeys": [
      "duck_ai",
      "magicschool",
      "perplexity",
      "chatgpt",
      "claude",
      "google_docs",
      "languagetool"
    ],
    "themeEmoji": "📰",
    "accentColor": "indigo",
    "teacherPreparation": "Elaborar folha de apoio com os operadores argumentativos e a estrutura do artigo de opinião; reforçar a proibição de cópia integral da IA.",
    "evaluationCriteria": [
      "Clareza e solidez da tese defendida e consistência dos argumentos apresentados;",
      "Correção sintática, riqueza lexical e pontuação correta segundo a norma do Português de Portugal;",
      "Capacidade demonstrada de selecionar criticamente o feedback da máquina e melhorar o próprio texto de forma autónoma."
    ],
    "differentiation": [
      "Apoio: Disponibilização de uma grelha orientadora de autorrevisão com perguntas-guia antes da submissão à IA;",
      "Extensão: Defesa oral dos argumentos do artigo perante um painel de colegas da turma."
    ],
    "essentialVsExtension": {
      "essential": "Redação autónoma da primeira versão do artigo de opinião, consulta do feedback da IA organizado em quatro pontos de revisão, seleção crítica das sugestões consideradas pertinentes, revisão do texto pelo aluno e entrega da versão final acompanhada da justificação das alterações realizadas.",
      "extension": "Publicação do artigo no jornal escolar ou na página da biblioteca da escola mediante autorização do aluno e da escola."
    },
    "offlineAlternative": "Processo de revisão cruzada entre pares («leitura em espelho») com preenchimento mútuo de uma grelha de avaliação formativa.",
    "aiPedagogicalRole": "Crítico textual e adversário de treino que coloca objeções lógicas sem interferir na redação e voz própria do aluno."
  },
  {
    "id": 17,
    "title": "Música Educativa com IA",
    "disciplines": "Português",
    "cycle": "2.º e 3.º Ciclos – 5.º ao 9.º Ano",
    "cycleCategories": [
      "2.º Ciclo",
      "3.º Ciclo"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho coletivo orientado pelo docente na sala de aula ou em pequenos grupos com recurso a auscultadores.",
    "briefDescription": "Os alunos consolidam conteúdos de Português através da criação coletiva de uma canção educativa com apoio de ferramentas de Inteligência Artificial. Partem de conceitos e regras gramaticais previamente trabalhados, elaboram uma letra simples e verificam a correção dos conteúdos antes de gerar a música. Após a audição, realizam exercícios individuais de aplicação para confirmar se compreenderam e conseguem mobilizar os conhecimentos trabalhados.",
    "learningObjectives": [
      "Consolidar conceitos e regras gramaticais previamente trabalhados nas aulas de Português.",
      "Participar na criação de uma letra simples que ajude a recordar e compreender o conteúdo gramatical selecionado.",
      "Verificar a correção dos conceitos e exemplos utilizados na letra.",
      "Aplicar individualmente os conhecimentos gramaticais através da resolução de exercícios."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Seleção e revisão do conteúdo gramatical",
        "duration": "15 min",
        "description": "O professor seleciona um conteúdo gramatical que a turma necessite de consolidar. Apresenta as regras e os exemplos fundamentais e constrói, com os alunos, uma lista de conceitos que devem estar presentes na letra da canção. A turma confirma a correção dos exemplos antes de iniciar a composição."
      },
      {
        "number": 2,
        "title": "Criação da letra",
        "duration": "25 min",
        "description": "Em grande grupo ou em pequenos grupos, os alunos propõem versos e um refrão que ajudem a recordar o conteúdo gramatical. Podem recorrer à IA para obter sugestões de rimas ou de organização dos versos, mas todas as afirmações gramaticais devem ser verificadas. Não é obrigatório utilizar uma métrica poética específica."
      },
      {
        "number": 3,
        "title": "Validação científica e linguística da letra",
        "duration": "20 min",
        "description": "A turma revê a letra, confirmando se as definições, os exemplos e as regras gramaticais estão corretos. Corrige eventuais erros, expressões ambíguas ou formulações que possam induzir em erro. Só depois desta revisão a letra é considerada pronta para a geração musical."
      },
      {
        "number": 4,
        "title": "Geração e audição da música",
        "duration": "20 min",
        "description": "O professor ou os alunos, de acordo com as condições de utilização da ferramenta, introduzem a letra validada no gerador de música. A turma escuta a canção e verifica se as palavras são percetíveis e se a melodia permite acompanhar a letra. Caso necessário, podem ajustar a configuração ou repetir a geração uma vez."
      },
      {
        "number": 5,
        "title": "Aplicação individual das aprendizagens",
        "duration": "15 min",
        "description": "Cada aluno resolve individualmente uma pequena ficha com exercícios relacionados com o conteúdo gramatical trabalhado. A ficha permite verificar se os conceitos foram compreendidos e se podem ser aplicados sem depender da canção ou da ferramenta de IA."
      },
      {
        "number": 6,
        "title": "Síntese",
        "duration": "5 min",
        "description": "O professor retoma as aprendizagens essenciais e esclarece as dúvidas identificadas nas respostas dos alunos. A turma identifica de que forma a canção ajudou a recordar os conteúdos e reconhece que a música constitui um recurso de apoio, não substituindo o estudo e a aplicação individual."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do professor / aluno:",
      "studentInitial": "Faz uma música para aprender gramática.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Ajuda-nos a criar uma letra curta para uma canção educativa em Português de Portugal, destinada a alunos do 2.º Ciclo, sobre a diferença entre determinantes e pronomes demonstrativos (este, esse e aquele). Explica corretamente que o determinante acompanha um nome e que o pronome substitui um nome. Utiliza exemplos gramaticalmente corretos, vocabulário simples e um refrão fácil de memorizar. Podes sugerir rimas simples, mas não imponhas uma métrica poética específica nem a redondilha maior. Não introduzas regras ou conceitos gramaticais que não estejam relacionados com o tema indicado."
    },
    "finalProduct": "Faixa musical educativa da turma e ficha de exercícios gramaticais correspondente preenchida pelos alunos.",
    "toolKeys": [
      "chatgpt",
      "copilot",
      "suno",
      "canva",
      "capcut"
    ],
    "themeEmoji": "🎶",
    "accentColor": "rose",
    "teacherPreparation": "Selecionar o conteúdo gramatical deficitário na turma a partir do Dicionário Terminológico; preparar a ficha de exercícios formativos.",
    "evaluationCriteria": [
      "Correção dos conceitos e exemplos gramaticais utilizados na letra.",
      "Participação na elaboração e revisão da letra coletiva.",
      "Capacidade de aplicar individualmente as aprendizagens nos exercícios propostos."
    ],
    "differentiation": [
      "Apoio: Fornecimento de versos pré-estruturados com lacunas para preenchimento dos conceitos-chave;",
      "Extensão: Interpretação instrumental ou canto ao vivo por alunos com formação musical."
    ],
    "essentialVsExtension": {
      "essential": "Criação da letra, geração da faixa áudio e resolução individual da ficha de exercícios gramaticais.",
      "extension": "Criação de um vídeo com a letra da música sincronizada (lyric video) no Canva ou CapCut."
    },
    "offlineAlternative": "Adaptação da letra a uma melodia tradicional portuguesa conhecida e canto conjunto em coro na sala de aula sem recurso a tecnologias digitais.",
    "aiPedagogicalRole": "Arranjador sonoro que confere dinâmica rítmica e apelo mnésico a conteúdos técnicos e abstratos da gramática escolar."
  },
  {
    "id": 18,
    "title": "Debate com IA",
    "disciplines": "Português | História | Cidadania e Desenvolvimento",
    "cycle": "3.º Ciclo – 7.º ao 9.º Ano",
    "cycleCategories": [
      "3.º Ciclo"
    ],
    "duration": "3 aulas (150 minutos)",
    "modality": "Trabalho de pesquisa e preparação em grupos em ambiente seguro, culminando em debate formal presencial na sala de aula moderado pelo professor.",
    "briefDescription": "Os alunos preparam um debate regrado sobre um tema cívico fraturante. Utilizam um chatbot exclusivamente como «adversário de treino» para identificar falhas nos seus argumentos e antecipar contra-argumentos. No debate presencial, confrontam ideias sem recorrer a ecrãs, sendo avaliados por critérios objetivos de argumentação, refutação e respeito pelo contraditório.",
    "learningObjectives": [
      "Construir linhas de argumentação fundamentadas em evidências fidedignas e detetar falácias retóricas;",
      "Desenvolver a comunicação oral, o controlo do tempo e o respeito pelas regras do debate formal;",
      "Reconhecer que a IA pode apresentar argumentos incompletos, incorretos ou pouco fundamentados e que as suas respostas devem ser confrontadas com fontes de informação fidedignas."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Pesquisa e preparação de argumentos",
        "duration": "25 min",
        "description": "O professor apresenta o tema do debate e define as duas posições a considerar. Os alunos organizam-se em duas equipas, consultam fontes de informação selecionadas ou validadas e registam argumentos e evidências que sustentem a posição atribuída. Com apoio da IA, podem testar a solidez dos argumentos e antecipar possíveis objeções."
      },
      {
        "number": 2,
        "title": "Construção de argumentos e contra-argumentos",
        "duration": "35 min",
        "description": "Cada equipa seleciona os argumentos mais relevantes, identifica possíveis contra-argumentos e prepara respostas fundamentadas. Os alunos verificam os dados e as afirmações utilizadas, recorrendo às fontes consultadas e não apenas às respostas da IA. Organizam as ideias numa ficha de preparação."
      },
      {
        "number": 3,
        "title": "Organização das intervenções",
        "duration": "20 min",
        "description": "As equipas distribuem as intervenções pelos participantes e preparam a abertura, a apresentação dos argumentos, as respostas aos argumentos da equipa contrária e a conclusão. Definem-se os tempos de intervenção e as regras de participação, com a orientação do professor."
      },
      {
        "number": 4,
        "title": "Realização do debate",
        "duration": "50 min",
        "description": "O debate decorre presencialmente, sob a moderação do professor. Cada equipa apresenta os seus argumentos e responde às intervenções da equipa contrária, respeitando os tempos definidos e as regras de comunicação. Os participantes devem utilizar evidências, ouvir as posições diferentes e evitar ataques pessoais. A IA não é utilizada durante o debate."
      },
      {
        "number": 5,
        "title": "Avaliação e reflexão",
        "duration": "20 min",
        "description": "O professor e os alunos analisam o debate com base em critérios de qualidade da argumentação, utilização de evidências, clareza das intervenções, capacidade de resposta e respeito pelo contraditório. Cada aluno regista uma aprendizagem e um aspeto que poderá melhorar numa próxima intervenção. A avaliação não depende da posição defendida, mas da qualidade da argumentação e da participação."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Dá-me argumentos contra as redes sociais.",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Estamos a preparar um debate escolar do 8.º ano sobre: 'Deve ser proibido o acesso a redes sociais a menores de 16 anos?'. A nossa equipa vai defender o NÃO. Atua como o nosso oponente no debate: apresenta dois argumentos muito sólidos e baseados em direitos digitais e educação mediática que rebatam a nossa posição, e coloca-nos uma pergunta difícil para treinarmos a nossa resposta oral."
    },
    "finalProduct": "Debate presencial formal regrado na sala de aula, acompanhado das fichas com a síntese de argumentos e evidências organizadas por cada equipa.",
    "toolKeys": [
      "claude",
      "chatgpt",
      "duck_ai",
      "mizou",
      "canva",
      "vocaroo",
      "padlet"
    ],
    "themeEmoji": "🎙️",
    "accentColor": "purple",
    "teacherPreparation": "Definir o regulamento de tempos do debate formal (discursos de abertura, refutação, interpelação cruzada e alegações finais); preparar a grelha de avaliação das intervenções orais.",
    "evaluationCriteria": [
      "Clareza e coerência dos argumentos apresentados.",
      "Utilização de evidências e fontes adequadas para sustentar as afirmações.",
      "Capacidade de responder a argumentos contrários e de fundamentar as respostas.",
      "Respeito pelas regras do debate, pelos tempos de intervenção e pelos interlocutores."
    ],
    "differentiation": [
      "Apoio: Fichas com estruturas de introdução discursiva («Concordamos que..., no entanto os dados mostram...»);",
      "Extensão: Atribuição do papel de juiz de tempo ou moderador assistente do debate."
    ],
    "essentialVsExtension": {
      "essential": "Pesquisa documental, sessão de treino com a IA, preparação das fichas e realização do debate presencial na aula.",
      "extension": "Gravação áudio do debate e compilação de um episódio especial para a rádio escolar."
    },
    "offlineAlternative": "Realização integral da pesquisa em publicações periódicas e livros da biblioteca escolar, sem mediação de sistemas de inteligência artificial.",
    "aiPedagogicalRole": "Simulador de contra-argumentação rápida para fortalecer o pensamento crítico antes da exposição oral entre pares."
  },
  {
    "id": 19,
    "title": "Rádio Interativa de Turma com IA",
    "disciplines": "Português | História | TIC",
    "cycle": "3.º Ciclo e Secundário – 8.º ao 12.º Ano",
    "cycleCategories": [
      "3.º Ciclo",
      "Secundário"
    ],
    "duration": "3 aulas (150 minutos)",
    "modality": "Trabalho colaborativo de projeto com computadores na fase de pesquisa e telemóveis/gravadores de sala para captação sonora.",
    "briefDescription": "Os alunos concebem um pequeno segmento de rádio escolar, com a duração aproximada de dois a três minutos, sobre um tema curricular. Selecionam documentos de referência e recorrem ao NotebookLM para apoiar a organização e síntese inicial da informação. Confrontam as respostas geradas com os documentos originais, corrigem eventuais imprecisões factuais e linguísticas, escrevem um guião e gravam o segmento com as suas próprias vozes. O trabalho final inclui a identificação das fontes consultadas e a validação da informação apresentada.",
    "learningObjectives": [
      "Confrontar sínteses geradas por modelos de linguagem com documentos-fonte credíveis, identificando omissões e desvios factuais;",
      "Adequar a linguagem radiofónica à norma do Português de Portugal (eliminando construções típicas do Português do Brasil de ferramentas automáticas);",
      "Escrever guiões de rádio dinâmicos e desenvolver técnicas de locução, colocação de voz e clareza de dicção."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Seleção do tema e das fontes",
        "duration": "25 min",
        "description": "Cada grupo seleciona um tema curricular e reúne três a cinco fontes de informação adequadas, previamente disponibilizadas ou validadas pelo professor. Regista o título, a autoria ou entidade responsável e a origem de cada documento. As fontes devem permitir confirmar as informações essenciais a apresentar no programa."
      },
      {
        "number": 2,
        "title": "Leitura e validação da informação",
        "duration": "30 min",
        "description": "Os alunos consultam os documentos e identificam as ideias principais. Podem recorrer ao NotebookLM ou a outra ferramenta de IA para apoiar a síntese, mas confrontam as respostas com os textos originais. Registam as informações confirmadas e corrigem omissões, erros ou expressões que não estejam adequadas ao Português de Portugal."
      },
      {
        "number": 3,
        "title": "Escrita do guião radiofónico",
        "duration": "35 min",
        "description": "Cada grupo escreve um guião para um segmento de rádio com a duração aproximada de dois a três minutos. O guião inclui uma apresentação breve do tema, a exposição das informações essenciais e uma conclusão. Os alunos distribuem as falas pelos participantes e identificam as fontes utilizadas. O texto deve ser claro, rigoroso e adequado à comunicação oral."
      },
      {
        "number": 4,
        "title": "Ensaio e gravação",
        "duration": "35 min",
        "description": "Os alunos ensaiam a leitura do guião, ajustando a dicção, a entoação e o ritmo. Depois de confirmarem que o texto está correto e que respeita a duração prevista, gravam o segmento utilizando o equipamento disponível. O professor apoia a organização da gravação e a resolução de dificuldades técnicas."
      },
      {
        "number": 5,
        "title": "Audição e avaliação",
        "duration": "15 min",
        "description": "Os grupos escutam a gravação e verificam se a informação é compreensível, se a duração é adequada e se a comunicação oral é clara. Registam um aspeto conseguido e uma melhoria possível. Confirmam também se as fontes utilizadas estão devidamente identificadas no guião."
      },
      {
        "number": 6,
        "title": "Síntese",
        "duration": "10 min",
        "description": "Os grupos apresentam o tema do segmento e explicam como verificaram a informação utilizada. O professor retoma a importância da validação das fontes e da revisão do guião antes da gravação."
      }
    ],
    "promptExample": {
      "initialLabel": "Instrução no NotebookLM:",
      "studentInitial": "Cria um resumo sobre o 25 de Abril de 1974 para um pequeno programa de rádio escolar.",
      "enrichedLabel": "Instrução enriquecida com a turma:",
      "enriched": "Com base exclusivamente nas quatro fontes documentais fornecidas sobre o 25 de Abril de 1974, ajuda-nos a organizar a informação para um segmento de rádio escolar com a duração aproximada de dois a três minutos. Identifica as ideias principais, organiza-as numa sequência clara e sugere uma introdução e uma conclusão curtas. Não acrescentes factos que não estejam presentes nas fontes. Não inventes datas, nomes, acontecimentos ou citações. Sempre que apresentares uma afirmação factual, indica em que documento pode ser confirmada. Utiliza Português de Portugal, linguagem adequada ao público escolar e um estilo claro e natural para comunicação oral."
    },
    "finalProduct": "Segmento de rádio escolar com a duração aproximada de dois a três minutos, acompanhado do guião final e da identificação das fontes consultadas.",
    "toolKeys": [
      "notebooklm",
      "google_docs",
      "vocaroo",
      "audacity",
      "canva",
      "padlet"
    ],
    "themeEmoji": "📻",
    "accentColor": "sky",
    "teacherPreparation": "Selecionar previamente quatro documentos credíveis e relacionados com o tema escolhido, garantindo que os conteúdos são adequados ao ano de escolaridade. No caso do exemplo sobre o 25 de Abril de 1974, disponibilizar fontes documentais que permitam confirmar os acontecimentos e as informações a apresentar. Testar o NotebookLM e os equipamentos de gravação, preparar auscultadores e assegurar que os alunos conseguem consultar os documentos originais durante a validação.",
    "evaluationCriteria": [
      "Fidelidade da informação apresentada relativamente aos documentos-fonte consultados.",
      "Correção linguística segundo a norma do Português de Portugal e adequação do texto à comunicação oral.",
      "Clareza da dicção, organização do guião e identificação das fontes utilizadas.",
      "Adequação da duração do segmento áudio ao intervalo previsto de dois a três minutos."
    ],
    "differentiation": [
      "Apoio: Disponibilização de uma matriz estruturada de guião com marcação dos tempos para cada locutor;",
      "Extensão: Montagem e mistura de efeitos sonoros e música de fundo no Audacity."
    ],
    "essentialVsExtension": {
      "essential": "Seleção e validação de fontes, redação do guião, gravação de um segmento áudio de dois a três minutos e identificação das fontes utilizadas.",
      "extension": "Difusão da emissão na rádio escolar da escola ou integração num podcast temático divulgado à comunidade educativa no website do agrupamento."
    },
    "offlineAlternative": "Realização do programa de rádio ao vivo na sala de aula através de leitura partilhada e sonoplastia manual perante a turma.",
    "aiPedagogicalRole": "Assistente de cruzamento e resumo de documentos densos, exigindo revisão crítica humana rigorosa sobre a autenticidade factual e a norma linguística."
  },
  {
    "id": 20,
    "title": "Entrevistas Simuladas (Carreiras e Profissões)",
    "disciplines": "Cidadania e Desenvolvimento | Inglês | História",
    "cycle": "3.º Ciclo e Secundário – 9.º ao 12.º Ano",
    "cycleCategories": [
      "3.º Ciclo",
      "Secundário"
    ],
    "duration": "2 aulas (100 minutos)",
    "modality": "Trabalho em pares em computadores ou tablets, articulado com dramatização orientada.",
    "briefDescription": "Os alunos exploram profissões e percursos de formação através de uma entrevista simulada com recurso à Inteligência Artificial. Em pares, selecionam uma profissão, consultam fontes de informação sobre as qualificações e as funções associadas e preparam perguntas relevantes. A IA assume uma personagem fictícia para responder às perguntas, permitindo aos alunos treinar a entrevista e organizar informação. As respostas são posteriormente confrontadas com fontes credíveis sobre a realidade profissional em Portugal. A atividade distingue explicitamente a simulação gerada por IA de um testemunho real de um profissional.",
    "learningObjectives": [
      "Identificar as funções, as competências e os percursos de formação associados à profissão selecionada, distinguindo informação confirmada de respostas fictícias produzidas pela IA.",
      "Formular perguntas abertas de entrevista que exijam reflexão aprofundada, evitando questões superficiais de resposta fechada;",
      "Avaliar criticamente a verosimilhança das respostas geradas pela IA, distinguindo a simulação ficcional da realidade do sistema educativo e profissional português."
    ],
    "steps": [
      {
        "number": 1,
        "title": "Escolha da profissão e pesquisa",
        "duration": "20 min",
        "description": "Cada par escolhe uma profissão que pretende conhecer melhor. Consulta fontes de informação adequadas, como a DGES, a ANQEP ou páginas institucionais de entidades profissionais, para identificar as funções desempenhadas e os percursos de formação existentes em Portugal. Regista as informações principais e as fontes consultadas."
      },
      {
        "number": 2,
        "title": "Preparação das perguntas",
        "duration": "15 min",
        "description": "Os alunos elaboram cinco perguntas para a entrevista. As perguntas devem abordar aspetos como as funções desempenhadas, a formação necessária, as competências importantes, os desafios da profissão e as possíveis mudanças futuras. O professor ajuda a garantir que as perguntas são claras e permitem obter respostas desenvolvidas."
      },
      {
        "number": 3,
        "title": "Entrevista simulada com IA",
        "duration": "25 min",
        "description": "Os alunos apresentam as cinco perguntas ao chatbot, que assume uma personagem fictícia com a profissão selecionada. Fazem a entrevista uma pergunta de cada vez e registam as respostas. A simulação deve ser identificada como uma representação fictícia criada por IA, não correspondendo ao testemunho de uma pessoa real nem a uma experiência profissional verdadeira."
      },
      {
        "number": 4,
        "title": "Verificação da informação",
        "duration": "25 min",
        "description": "Os alunos comparam as respostas da simulação com as informações recolhidas nas fontes consultadas. Confirmam os percursos de formação, as funções e as competências indicadas e assinalam as informações que não conseguem confirmar. Corrigem ou excluem afirmações incorretas ou não fundamentadas."
      },
      {
        "number": 5,
        "title": "Partilha e reflexão",
        "duration": "15 min",
        "description": "Cada par apresenta a profissão estudada, as informações que conseguiu confirmar e uma limitação identificada na entrevista simulada. A turma reflete sobre a utilidade da IA para preparar perguntas e explorar cenários, reconhecendo que as suas respostas não substituem o contacto com profissionais reais nem a consulta de fontes oficiais."
      }
    ],
    "promptExample": {
      "initialLabel": "Prompt inicial do aluno:",
      "studentInitial": "Vamos realizar uma entrevista fictícia sobre a profissão de engenheiro de energias renováveis. Que perguntas podemos preparar?",
      "enrichedLabel": "Prompt enriquecido com a turma:",
      "enriched": "Vamos realizar uma entrevista simulada para explorar a profissão de engenheiro de energias renováveis em Portugal. Assume o papel de uma personagem profissional fictícia, criada exclusivamente para esta atividade escolar. Identifica claramente que és uma simulação gerada por IA e não uma pessoa real nem um profissional com experiência própria. Responde a uma pergunta de cada vez, utilizando informação geral e verificável sobre as funções, as competências necessárias, os percursos de formação e os desafios desta profissão. Não inventes experiências pessoais, locais de trabalho, histórias profissionais ou testemunhos reais. Não apresentes informações incertas como factos. Quando não tiveres informação suficiente para responder, indica essa limitação. Utiliza Português de Portugal e linguagem adequada a alunos do 3.º Ciclo ou do Ensino Secundário."
    },
    "finalProduct": "Ficha de Perfil Profissional, contendo a identificação da profissão, as cinco perguntas preparadas pelos alunos, uma síntese das respostas obtidas na entrevista simulada e a verificação das informações relevantes através de fontes credíveis. O trabalho termina com uma apresentação oral que identifica claramente a entrevista como uma simulação criada com IA, distinguindo as respostas fictícias dos factos confirmados.",
    "toolKeys": [
      "duck_ai",
      "chatgpt",
      "perplexity",
      "bing",
      "canva",
      "vocaroo"
    ],
    "themeEmoji": "💼",
    "accentColor": "blue",
    "teacherPreparation": "Reunir hiperligações e materiais da DGES (Acesso ao Ensino Superior) e do Catálogo Nacional de Qualificações da ANQEP; preparar grelha de apoio à formulação de entrevistas.",
    "evaluationCriteria": [
      "Pertinência, profundidade e rigor conceptual das perguntas preparadas no guião;",
      "Capacidade crítica de identificar desvios entre a resposta gerada pela IA e o enquadramento profissional português;",
      "Clareza de dicção, postura e síntese na apresentação oral ou dramatização perante a turma."
    ],
    "differentiation": [
      "Apoio: Fornecimento de matriz com tópicos essenciais de questionamento (habilitações, rotina diária, desafios éticos, evolução tecnológica);",
      "Extensão: Realização da entrevista e apresentação integral em língua inglesa no quadro da disciplina de Inglês."
    ],
    "essentialVsExtension": {
      "essential": "Escolha e pesquisa de uma profissão, preparação de cinco perguntas, realização de uma entrevista simulada, verificação das respostas e apresentação das conclusões.",
      "extension": "Contacto real com um profissional da área (presencial ou por videoconferência) para comparar as respostas simuladas com a experiência profissional real."
    },
    "offlineAlternative": "Realização da entrevista presencial a um profissional real da comunidade escolar ou local (encarregado de educação, técnico ou professor).",
    "aiPedagogicalRole": "A IA funciona como uma personagem fictícia para a simulação de uma entrevista. Permite aos alunos treinar a formulação de perguntas e organizar a informação recolhida, mas não representa um profissional real nem constitui uma fonte de testemunhos ou de informação profissional verificada. As informações relevantes devem ser confirmadas através de fontes adequadas."
  }
];
