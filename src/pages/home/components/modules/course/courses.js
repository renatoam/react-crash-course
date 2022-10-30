import { DataDisplay, LatticePattern, Tool, TreeList, TwoEllipses } from "@icon-park/react"

export const courses = [
  {
    id: 1,
    link: '/lesson1',
    icon: TwoEllipses,
    title: 'O que é React?',
    description: 'Afinal, React é uma biblioteca ou um framework? Aliás, qual a diferença entre biblioteca e framework? Descubra agora.'
  },
  {
    id: 2,
    link: '/lesson2',
    icon: Tool,
    title: 'React Básico',
    description: 'Descubra agora as principais features do React e como usá-las no dia-a-dia. JSX, props, hooks e muito mais.'
  },
  {
    id: 3,
    link: '/lesson3',
    icon: TreeList,
    title: 'React Dinâmico',
    description: 'Aprenda sobre gerenciamento de estado, listas dinâmicas e renderização condicional. Técnicas essenciais para o desenvolvimento web.'
  },
  {
    id: 4,
    link: '/lesson4',
    icon: DataDisplay,
    title: 'Manipulando Dados',
    description: 'Aprenda a consumir APIs externas no React, criar rotas para sua aplicação, além de manipular formulários e eventos.'
  },
  {
    id: 5,
    link: '/lesson5',
    icon: LatticePattern,
    title: 'React Patterns',
    description: 'Com grandes poderes vem grandes responsabilidades. Flexibilidade demais pode ser um perigo. Aprenda a organizar seu projeto e prevenir o caos.'
  },
]