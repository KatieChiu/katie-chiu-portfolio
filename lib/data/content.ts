export const identity = {
  name: 'Katie Chiu',
  title: 'Ingeniera en Sistemas · Full-Stack Software Developer',
  founder: 'Founder of KA',
  slogan: 'Tecnología que mueve negocios.',
  github: 'https://github.com/KatieChiu',
  githubHandle: 'KatieChiu',
  linkedin: 'https://www.linkedin.com/in/katiechiu',
  email: 'hola@katiechiu.dev',
}

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'KA', href: '#ka' },
  { label: 'Contacto', href: '#contacto' },
]

export interface Specialty {
  id: string
  index: string
  title: string
  description: string
  note?: string
}

export const specialties: Specialty[] = [
  {
    id: 'software',
    index: '01',
    title: 'Software Development',
    description: 'Desarrollo Full-Stack y construcción de aplicaciones web.',
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend & APIs',
    description: 'Desarrollo de servicios y APIs utilizando .NET, Node.js y Python.',
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend',
    description: 'Construcción de interfaces web utilizando React, TypeScript y Blazor.',
  },
  {
    id: 'data',
    index: '04',
    title: 'Data',
    description: 'Diseño y gestión de bases de datos utilizando SQL y PostgreSQL.',
  },
  {
    id: 'cybersecurity',
    index: '05',
    title: 'Cybersecurity',
    description:
      'Actualmente desarrollando formación especializada mediante el Career Path de Cisco para Junior Cybersecurity Analyst.',
    note: 'Área de especialización en desarrollo',
  },
]

export interface StackGroup {
  label: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Blazor', 'DevExtreme', 'HTML', 'CSS'],
  },

  {
    label: 'Backend',
    items: ['C#', '.NET', 'Node.js', 'Python', 'FastAPI'],
  },

  {
    label: 'Data & ORM',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'Prisma', 'Entity Framework'],
  },

  {
    label: 'Development',
    items: ['GitHub', 'Visual Studio', 'VS Code', 'Swagger'],
  },

  {
    label: 'Additional',
    items: ['Odoo'],
  },
]

export interface EducationItem {
  institution: string
  program: string
  detail?: string[]
  status?: string
}

export const education: EducationItem[] = [
  {
    institution: 'Universidad Nacional Autónoma de Honduras — UNAH',
    program: 'Ingeniería en Sistemas',
    status: 'Graduada',
  },
  {
    institution: 'Oracle Academy',
    program: 'Fundamentos y diseño de bases de datos',
    detail: ['Database Foundations', 'Database Design'],
  },
  {
    institution: 'Cisco',
    program: 'Career Path',
    detail: ['Junior Cybersecurity Analyst'],
    status: 'En curso',
  },
]

export const kaServices = [
  'Desarrollo Web',
  'Software Empresarial',
  'E-commerce',
  'Automatización',
  'Integraciones',
  'Soluciones Digitales',
]

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { index: '01', title: 'Entender', description: 'Comprender el problema, contexto y objetivos.' },
  { index: '02', title: 'Diseñar', description: 'Convertir necesidades en una solución clara.' },
  { index: '03', title: 'Construir', description: 'Desarrollar, integrar y probar.' },
  { index: '04', title: 'Lanzar', description: 'Preparar y desplegar el producto.' },
  { index: '05', title: 'Evolucionar', description: 'Medir, aprender y mejorar.' },
]

export const philosophyChain = ['IDEA', 'ARQUITECTURA', 'CÓDIGO', 'PRODUCTO', 'IMPACTO']

export const careerDisciplines = [
  'Ingeniería',
  'Desarrollo de software',
  'Datos',
  'IA',
  'Ciberseguridad',
  'Analista de datos',
]
