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
  zoomLink: string;
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
    time: '19h às 20h',
    speakers: [
      {
        name: 'Ana Paula Viana',
        bio: 'Especialista em Segurança do Trabalho com 15 anos de experiência. Certificada em Programas de Gestão de Segurança e consultora em Cultura de Prevenção.',
        image: 'https://images.pexels.com/photos/36745/activity-beautiful-blonde-blur.jpg?w=400&h=400&fit=crop'
      },
      {
        name: 'Roberto Silva',
        bio: 'Engenheiro de Segurança com pós-graduação em Gestão de Riscos. Responsável por implementação de programas preventivos em multinacionais.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Carla Mendes',
        bio: 'Psicóloga organizacional especializada em comportamento seguro. Desenvolvedora de treinamentos corporativos inovadores.',
        image: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?w=400&h=400&fit=crop'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example1/viewform',
    zoomLink: 'https://zoom.us/j/example1'
  },
  {
    id: 2,
    date: '2025-11-25',
    dateFormatted: '25 de novembro',
    day: 25,
    month: 11,
    theme: 'Inclusão no Ambiente de Trabalho',
    description: 'Descobra como criar um ambiente inclusivo onde todos os colaboradores, incluindo pessoas com deficiência, possam trabalhar com segurança e dignidade. Abordaremos adaptações necessárias, legislação e o impacto positivo da inclusão.',
    time: '19h às 20h',
    speakers: [
      {
        name: 'Caroline Fraga',
        bio: 'Consultora em Inclusão e Acessibilidade com expertise em adaptação de espaços laborais. Autora de publicações sobre inclusão no mercado de trabalho.',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Marcus Oliveira',
        bio: 'Profissional em Recursos Humanos especializado em políticas inclusivas. Certificado em Gestão da Diversidade e Inclusão.',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Juliana Costa',
        bio: 'Especialista em Acessibilidade com formação em Segurança do Trabalho. Responsável por auditorias de acessibilidade em empresas.',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400&h=400&fit=crop'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example2/viewform',
    zoomLink: 'https://zoom.us/j/example2'
  },
  {
    id: 3,
    date: '2025-11-26',
    dateFormatted: '26 de novembro',
    day: 26,
    month: 11,
    theme: 'Riscos Psicossociais no Ambiente Corporativo',
    description: 'Entenda os principais riscos psicossociais que afetam a saúde mental dos colaboradores. Analisaremos estresse ocupacional, assédio moral e as estratégias para criar um ambiente saudável e produtivo.',
    time: '19h às 20h',
    speakers: [
      {
        name: 'Denise Serqueira',
        bio: 'Psicóloga clínica com especialização em Saúde Mental Ocupacional. Pesquisadora sobre Síndrome de Burnout e qualidade de vida no trabalho.',
        image: 'https://images.pexels.com/photos/1181387/pexels-photo-1181387.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Felipe Ribeiro',
        bio: 'Médico do Trabalho especializado em Saúde Mental Ocupacional. Responsável por programas de bem-estar em grandes corporações.',
        image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Beatriz Alves',
        bio: 'Especialista em Gestão de Recursos Humanos com focus em cultura organizacional. Consultora em programas de bem-estar corporativo.',
        image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?w=400&h=400&fit=crop'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example3/viewform',
    zoomLink: 'https://zoom.us/j/example3'
  },
  {
    id: 4,
    date: '2025-11-27',
    dateFormatted: '27 de novembro',
    day: 27,
    month: 11,
    theme: 'Postura no Ambiente de Trabalho: Ergonomia e Saúde',
    description: 'Aprenda sobre a importância da postura correta e da ergonomia para prevenir lesões. Discutiremos exercícios preventivos, adaptação de postos de trabalho e o papel da ergonomia na segurança corporativa.',
    time: '19h às 20h',
    speakers: [
      {
        name: 'Gabriela Teixeira',
        bio: 'Fisioterapeuta especializada em Ergonomia e Prevenção de Lesões. Desenvolvimento de programas de ginástica laboral e postura.',
        image: 'https://images.pexels.com/photos/4872548/pexels-photo-4872548.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Thiago Martins',
        bio: 'Engenheiro de Saúde e Segurança especialista em Ergonomia. Consultor em design de postos de trabalho.',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400&h=400&fit=crop'
      },
      {
        name: 'Amanda Souza',
        bio: 'Técnica em Segurança do Trabalho especializada em Ergonomia e Ginástica Laboral. Certificada em ISO 11228.',
        image: 'https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?w=400&h=400&fit=crop'
      }
    ],
    inscriptionLink: 'https://docs.google.com/forms/d/1example4/viewform',
    zoomLink: 'https://zoom.us/j/example4'
  }
];
