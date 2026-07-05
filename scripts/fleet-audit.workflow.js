export const meta = {
  name: 'linkedin-fleet-audit',
  description: 'Modo FLOTA: audita en paralelo N perfiles de portavoces + la Page de empresa y propone la coordinacion de pilares (programa de advocacy)',
  whenToUse: 'Programas enterprise: CEO + portavoces + Page. El material de cada perfil lo aporta el usuario (pegado/export); NUNCA scraping.',
  phases: [
    { title: 'Audit', detail: 'Un agente por perfil + uno por la Page, en paralelo' },
    { title: 'Coordinate', detail: 'Reparto de territorios/pilares sin solapes + acoplamiento con la Page' },
  ],
}

// args esperados:
// {
//   objective: 'lead gen B2B / employer brand / autoridad sectorial...',
//   subjects: [{ name, role, material }],   // material = headline+About+experiencia+ultimos posts, PEGADO por el usuario
//   page: { name, material } | null
// }

const SKILL = '/Users/cop/.claude/skills/linkedin-profile-optimizer'
const REF = `${SKILL}/references`

if (!args || !Array.isArray(args.subjects) || args.subjects.length === 0) {
  throw new Error('args.subjects requerido: [{name, role, material}] — el material lo aporta el usuario, sin scraping')
}
if (args.subjects.length > 12) {
  throw new Error('Maximo 12 portavoces por flota (calidad de coordinacion)')
}

const SCORECARD = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    kind: { type: 'string', enum: ['person', 'page'] },
    score: { type: 'number', description: 'Puntuacion global 0-100 contra el checklist 100% del modo' },
    gaps: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          section: { type: 'string' },
          gap: { type: 'string' },
          priority: { type: 'string', enum: ['P1', 'P2', 'P3'] },
        },
        required: ['section', 'gap', 'priority'],
      },
    },
    quickWins: { type: 'array', items: { type: 'string' }, description: '3 acciones P1 inmediatas' },
    pillarsDetected: { type: 'array', items: { type: 'string' }, description: 'Pilares tematicos que ya publica o que su perfil declara' },
    expertiseKeywords: { type: 'array', items: { type: 'string' } },
  },
  required: ['name', 'kind', 'score', 'gaps', 'quickWins', 'pillarsDetected'],
}

phase('Audit')
log(`Auditando ${args.subjects.length} portavoces${args.page ? ' + Page' : ''} en paralelo...`)

const tasks = args.subjects.map((s) => () =>
  agent(
    `Eres el LinkedIn Specialist senior de Zoopa/498A. Lee ${REF}/03-mode-a-personal-profile.md (playbook MODO A) y ${REF}/07-compliance-guidelines.md.\n\nAudita este perfil de portavoz contra el "Checklist 100% - Perfil Individual" del reference. Rol en la flota: ${s.role}. Objetivo del programa: ${args.objective || 'no especificado'}.\n\nMATERIAL DEL PERFIL (aportado por el usuario; NO busques ni scrapees nada):\n---\n${s.material}\n---\n\nPuntua 0-100, lista gaps con prioridad, 3 quick wins, pilares tematicos detectados y keywords de expertise. Devuelve el objeto del schema.`,
    { label: `audit:${s.name}`, phase: 'Audit', schema: SCORECARD }
  )
)
if (args.page) {
  tasks.push(() =>
    agent(
      `Eres el LinkedIn Specialist senior de Zoopa/498A. Lee ${REF}/04-mode-b-company-page.md (playbook MODO B) y ${REF}/07-compliance-guidelines.md.\n\nAudita esta LinkedIn Page contra el "Checklist 100% - Pagina de Empresa". Objetivo del programa: ${args.objective || 'no especificado'}.\n\nMATERIAL DE LA PAGE (aportado por el usuario; NO busques ni scrapees nada):\n---\n${args.page.material}\n---\n\nPuntua 0-100 (kind: "page"), gaps con prioridad, 3 quick wins y pilares detectados. Devuelve el objeto del schema.`,
      { label: 'audit:page', phase: 'Audit', schema: SCORECARD }
    )
  )
}

// Barrera correcta: la coordinacion necesita TODOS los scorecards a la vez
const audits = (await parallel(tasks)).filter(Boolean)
log(`Auditorias completas: ${audits.length}. Coordinando pilares...`)

phase('Coordinate')
const coordination = await agent(
  `Eres el LinkedIn Specialist senior de Zoopa/498A. Lee ${REF}/00-role-and-discovery.md (acoplamiento persona-Page), ${SKILL}/templates/dual-coupling.md y ${SKILL}/templates/fleet-plan.md.\n\nObjetivo del programa: ${args.objective || 'no especificado'}.\n\nSCORECARDS DE LA FLOTA:\n${JSON.stringify(audits, null, 2)}\n\nPropon el plan de flota rellenando la estructura de fleet-plan.md:\n1. Reparto de territorios/pilares por portavoz SIN solapes (regla: mismo mapa, distinta voz; cada portavoz 1-2 pilares propios + 1 compartido de marca).\n2. Acoplamiento con la Page (la Page amplifica, no lidera; Notify Employees max 1/dia).\n3. Calendario semanal coordinado (quien publica que dia, sin canibalizarse; 3-5 posts/semana por persona max).\n4. Prioridades de remediacion: que perfiles necesitan MODO A completo antes de arrancar (score < 60).\n5. KPIs de flota.\n\nDevuelve SOLO el markdown del plan (es un dato para el orquestador, no un mensaje).`,
  { label: 'coordinate', phase: 'Coordinate', effort: 'high' }
)

return { audits, coordination }
