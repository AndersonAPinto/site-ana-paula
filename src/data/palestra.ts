export interface Speaker {
  name: string;
  bio: string;
  image: string;
}

export interface Palestra {
  id: number;
  date: string;
  dateFormatted: string;
  day: number;
  month: number;
  theme: string;
  description: string;
  time: string;
  speakers: Speaker[];
  inscriptionLink: string;
  collabLink: string;
}

export const palestras: Palestra[] = [
  {
    id: 1,
    date: '2025-11-24',
    dateFormatted: '24 de novembro',
    day: 24,
    month: 11,
    theme: 'Cultura de Prevenção e Comportamento Seguro',
    description: 'Nesta palestra exploraremos como desenvolver uma cultura organizacional robusta focada em prevenção de acidentes. Discutiremos as melhores práticas para promover comportamentos seguros entre todos os colaboradores, transformando a segurança em um valor central da empresa.',
    time: '20h às 21h',
    speakers: [
      {
        name: 'Tamara Martinez Schumacher',
        bio: 'Tutora do Senac EAD, técnica em Recursos Humanos, bacharel em Ciências Contábeis, especialista em Gestão de Pessoas e docência para ensino técnico e superior. Com experiência nas áreas administrativa, contábil, departamento pessoal e RH. Mãe de 3 doguinhos e de uma bebê breve, que trouxe um olhar mais humanizado para o tema do luto no ambiente de trabalho.',
        image: '/images/palestrantes/tamara.jpeg'
      },
      {
        name: 'Alini Silva da Veiga Piovesani',
        bio: 'Técnica em Contabilidade (ET José Feijó - Porto Alegre/RS), Bacharel em Secretariado Executivo Trilíngue (ULBRA Canoas - RS). Pós-graduada em Docência da Educação Profissional e Ensino Técnico (Faculdade Anhanguera) e Pós-Graduada em Gestão Estratégica de Pessoas (ULBRA Canoas-RS). Experiência de 18 anos como Secretária Executiva, experiência de 6 anos como professora/palestrante, e, atualmente, tutora do curso técnico em Secretariado do Senac EAD.',
        image: '/images/palestrantes/alini.jpeg'
      },
      {
        name: 'João Augusto Osório Brandão',
        bio: 'Atua como tutor do Senac EAD, no curso Técnico em Segurança do Trabalho. Graduado em Farmácia e em Engenharia Química. É pós-graduado em Engenharia de Segurança do Trabalho e em Docência do Ensino Técnico. Possui mestrado e doutorado na área de Engenharia de Materiais.',
        image: '/images/palestrantes/jose_augusto.jpeg'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example1/viewform',
    collabLink: 'https://ca.bbcollab.com/guest/4f8b369c2da348c9a7b20bf1256e8c47'
  },
  {
    id: 2,
    date: '2025-11-25',
    dateFormatted: '25 de novembro',
    day: 25,
    month: 11,
    theme: 'Inclusão no Ambiente de Trabalho',
    description: 'Descobra como criar um ambiente inclusivo onde todos os colaboradores, incluindo pessoas com deficiência, possam trabalhar com segurança e dignidade. Abordaremos adaptações necessárias, legislação e o impacto positivo da inclusão.',
    time: '20h às 21h',
    speakers: [
      {
        name: 'Jaqueline Patricia Silveira',
        bio: 'Orientadora Educacional do curso técnico em RH do Senac EAD. Graduada em Administração, possui mestrado e doutorado em Desenvolvimento Rural. Há mais de 10 anos atua na Educação a Distância e, ao longo da sua trajetória, trabalhou com estratégia e inovação em gestão de pessoas no serviço público.',
        image: '/images/palestrantes/jaqueline.jpeg'
      },
      {
        name: 'Vinícius Mitto Navarro',
        bio: 'Tutor do Curso Técnico em Secretariado do SENAC RS EAD e arquivista do Arquivo Público do RS. Graduado em Arquivologia pela UFRGS, com pós-graduação em Gestão em Arquivos pela UFSM e Formação Pedagógica pelo IFRS. Possui mais de dez anos de experiência docente, para concursos públicos, tutoria à distância e no ensino de Secretariado. Atua há mais de vinte anos na área dos arquivos, prestando consultoria e atualmente atuando em preservação dos documentos históricos do Poder Executivo gaúcho. Presidiu a Associação dos Arquivistas do RS de 2022 a 2024.s',
        image: '/images/palestrantes/vinicius.jpeg'
      },
      {
        name: 'César Bresolin Salvaro',
        bio: 'Professor/Tutor de Segurança no trabalho; Logística; Administração e Contabilidade. Com experiência em todas estas áreas, seja no ramo da indústria, do comércio e escolar. Doutorando em Educação como aluno especial, Mestrado em Educação, Especialização em Docência na Educação Profissional e Tecnológica; Graduado em Administração e Pedagogia.',
        image: '/images/palestrantes/cesar_bresolin.jpeg'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example2/viewform',
    collabLink: 'https://ca.bbcollab.com/guest/4f8b369c2da348c9a7b20bf1256e8c47'
  },
  {
    id: 3,
    date: '2025-11-26',
    dateFormatted: '26 de novembro',
    day: 26,
    month: 11,
    theme: 'Riscos Psicossociais no Ambiente Corporativo',
    description: 'Entenda os principais riscos psicossociais que afetam a saúde mental dos colaboradores. Analisaremos estresse ocupacional, assédio moral e as estratégias para criar um ambiente saudável e produtivo.',
    time: '20h às 21h',
    speakers: [
      {
        name: 'Kely Cristina dos Santos',
        bio: 'Atua como tutora do SENAC EAD, no curso de Técnico em Recursos Humanos. Graduada em Administração, especialista em Gestão de Pessoas, em Docência do Ensino Técnico e Profissional, Psicopedagoga e Neuropsicopedagoga, Designer Instrucional e Mestranda em Educação Profissional e Tecnológica. Atua há 20 anos na área de RH, com foco nas áreas de Captação, Desenvolvimento e Manutenção de Talentos, experiência de 15 anos na área da docência no ensino técnico e superior.',
        image: '/images/palestrantes/kelly_cristina.jpeg'
      },
      {
        name: 'Lucelia Souza',
        bio: 'Docente dos cursos técnicos de Secretariado e Recursos Humanos no SENAC EAD. Atualmente cursa uma segunda graduação, a faculdade de Psicologia. É Especialista em Gestão de Pessoas e Docência do Ensino Profissional. Possui MBA Executivo Gestão Empresarial. Secretária Executiva Trilíngue de formação, dispõe de qualificações complementares nas áreas de Coaching Profissional, Analista Comportamental (DISC), PNL e Coordenação de Grupos. Coautora do livro “RH e o Novo Normal nas Organizações”.',
        image: '/images/palestrantes/lucelia_souza.jpeg'
      },
      {
        name: 'Marcia Cristiana Closs',
        bio: 'Atua como tutora do Senac EAD, no curso Técnico em Segurança do Trabalho. Graduada em Sociologia e Técnica em Segurança do Trabalho. É pós-graduada e Gestão de Projetos, Instrutora de NR11 Empilhadeiras, NR 35 Trabalho em altura. Atua na segurança do trabalho a 23 anos.',
        image: '/images/palestrantes/marcia_cristiana.jpeg'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example3/viewform',
    collabLink: 'https://ca.bbcollab.com/guest/4f8b369c2da348c9a7b20bf1256e8c47'
  },
  {
    id: 4,
    date: '2025-11-27',
    dateFormatted: '27 de novembro',
    day: 27,
    month: 11,
    theme: 'Postura no Ambiente de Trabalho: Ergonomia e Saúde',
    description: 'Aprenda sobre a importância da postura correta e da ergonomia para prevenir lesões. Discutiremos exercícios preventivos, adaptação de postos de trabalho e o papel da ergonomia na segurança corporativa.',
    time: '20h às 21h',
    speakers: [
      {
        name: 'Kely Cristina dos Santos',
        bio: 'Atua como tutora do SENAC EAD, no curso de Técnico em Recursos Humanos. Graduada em Administração, especialista em Gestão de Pessoas, em Docência do Ensino Técnico e Profissional, Psicopedagoga e Neuropsicopedagoga, Designer Instrucional e Mestranda em Educação Profissional e Tecnológica. Atua há 20 anos na área de RH, com foco nas áreas de Captação, Desenvolvimento e Manutenção de Talentos, experiência de 15 anos na área da docência no ensino técnico e superior.',
        image: '/images/palestrantes/kelly_cristina.jpeg'
      },
      {
        name: 'Camila Gonçalves Rodrigues',
        bio: 'Profissional da área de secretariado com mais de 25 anos de experiência. Atuou em instituições de ensino e em empresas de grande porte.  Bacharel em Secretariado Executivo Bilíngue, com Especialização em Produção e Revisão Textual e Especialização em Docência no Ensino Técnico. Atualmente, é docente do Curso Técnico em Secretariado do Senac EAD.',
        image: '/images/palestrantes/camila_goncalves.png'
      },
      {
        name: 'Roberto Alexandre Pereira Mopert',
        bio: 'Profissional com sólida formação e experiência em Saúde, Segurança do Trabalho e Emergências. Foi Soldado da Força Aérea Brasileira (HACO e Polícia da Aeronáutica). Graduado em Enfermagem (Feevale), possui múltiplas pós-graduações, incluindo Enfermagem do Trabalho, Gestão em Segurança e Urgência/Emergência (SAMU - UTI Móvel, Pediatria e Pré-Hospitalar/Desastres). Atuou como Instrutor/Consultor de Segurança e Bombeiro Civil (Classe III). Atualmente é Tutor do Senac EAD (Téc. Segurança do Trabalho) e acadêmico de Medicina.',
        image: '/images/palestrantes/roberto_alexandre.jpg'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example4/viewform',
    collabLink: 'https://ca.bbcollab.com/guest/4f8b369c2da348c9a7b20bf1256e8c47'
  }
];
