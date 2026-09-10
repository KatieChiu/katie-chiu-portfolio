export type ProjectKind =
  | 'PROYECTO PROFESIONAL'
  | 'PROYECTO × KA'
  | 'EMPRENDIMIENTO'
  | 'PROYECTO ACADÉMICO'

export interface FeaturedProject {
  id: string
  index: string
  name: string
  kind: ProjectKind
  description: string
  role: string
  contributions: string[]
  technologies: string[]
  image?: string
  imageAlt?: string
  video?: string
  link?: string
}

export interface AcademicProject {
  id: string
  name: string
  description: string
  objective: string
  technologies: string[]
  github?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'mkonecta',
    index: '01',
    name: 'MKonecta',
    kind: 'PROYECTO PROFESIONAL',
    description:
  'Plataforma centralizada de comunicaciones digitales desarrollada para Grupo Mey-Ko S.A., diseñada para conectar sistemas internos con múltiples proveedores, unificando y automatizando la gestión de mensajes desde un solo sistema.',
    role: 'Full-Stack Developer',
    contributions: [
      'Arquitectura de software',
      'Backend',
      'Frontend',
      'Integraciones',
      'Bases de datos',
      'Procesamiento de mensajes',
      'Automatización',
      'Despliegue',
    ],
    technologies: ['C#', '.NET', 'Blazor', 'PostgreSQL', 'Docker'],
    video: '/videos/mokupmkonecta.mp4',
  },

  {
    id: 'firma-legal',
    index: '02',
    name: 'Discua y Asociados',
    kind: 'PROYECTO × KA',
    description:
      'Sitio web corporativo desarrollado para una firma legal, enfocado en fortalecer su presencia digital, comunicar sus servicios y facilitar el contacto con potenciales clientes.',
    role: 'Full-Stack Developer',
    contributions: [
      'Diseño web',
      'Desarrollo frontend',
      'Diseño responsive',
      'Experiencia de usuario',
      'Formulario de contacto',
      'Integración con WhatsApp',
      'Despliegue',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    video: '/videos/mokupfirma.mp4',
  },

]

export const academicProjects: AcademicProject[] = [
{
  id: 'academic-1',
  name: 'Sistema de Gestión de Permisos',
  description:
    'Sistema desarrollado para automatizar la gestión de solicitudes de permisos de empleados en la UNAH-Comayagua, digitalizando el proceso burocrático y facilitando el seguimiento de las solicitudes por las partes involucradas.',
  objective:
    'Optimizar el proceso de gestión de permisos mediante la digitalización y automatización de los procedimientos administrativos.',
  technologies: ['Python', 'Odoo'],
  github: 'https://github.com/Jafetsantos/permisosempleados',
},

  {
  id: 'academic-2',
  name: 'Sistema de Gestión de Horas VOAE',
  description:
    'Aplicación web desarrollada como asignación de la clase de Programación Orientada a Objetos para gestionar y controlar las horas VOAE en la UNAH, centralizando el registro, seguimiento y administración de las horas.',
  objective:
    'Aplicar principios de Programación Orientada a Objetos en el desarrollo de una solución web para digitalizar y facilitar la gestión de horas VOAE.',
  technologies: ['C#', '.NET Core', 'DevExtreme', 'SQL Server'],
  github: 'https://github.com/KatieChiu/Gestion-Horas-VOAE',
},
{
  id: 'academic-3',
  name: 'Vectorización semantica para la evaluación del riesgo de alucinaciones en diagnósticos médicos asistidos por el uso de inteligencia artificial',
   description:
    'Investigación desarrollada como tesis de pregrado en Ingeniería en Sistemas, enfocada en el uso de embeddings semánticos para evaluar la discrepancia y el riesgo de respuestas generadas por modelos de lenguaje en casos de diagnóstico médico.',
  objective:
    'Desarrollar un método basado en similitud semántica para identificar y cuantificar el riesgo asociado a discrepancias en diagnóstico y tratamiento mediante embeddings generados con SBERT.',
  technologies: ['Python', 'MATLAB', 'SBERT', 'Embeddings', 'FAISS', 'LaTeX'],
  github:  'https://github.com/KatieChiu/Prototipo-V1',
},
 
]