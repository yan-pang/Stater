export type ProjectStatus = 'Discovery' | 'In Build' | 'Ready for Handoff'

export interface ProjectRecord {
  id: string
  name: string
  domain: string
  owner: string
  status: ProjectStatus
  updatedAt: string
  modules: number
}

export const projectStatusOptions: Array<{ label: string; value: ProjectStatus }> = [
  { label: 'Discovery', value: 'Discovery' },
  { label: 'In Build', value: 'In Build' },
  { label: 'Ready for Handoff', value: 'Ready for Handoff' },
]

export const projectCatalogSeed: ProjectRecord[] = [
  {
    id: 'starter-001',
    name: 'Operations Console',
    domain: 'Internal tooling',
    owner: 'Mina',
    status: 'Discovery',
    updatedAt: '2026-04-10',
    modules: 3,
  },
  {
    id: 'starter-002',
    name: 'Partner Portal',
    domain: 'B2B workflow',
    owner: 'Kai',
    status: 'In Build',
    updatedAt: '2026-04-09',
    modules: 6,
  },
  {
    id: 'starter-003',
    name: 'Quality Dashboard',
    domain: 'Reporting',
    owner: 'Luna',
    status: 'Ready for Handoff',
    updatedAt: '2026-04-08',
    modules: 4,
  },
  {
    id: 'starter-004',
    name: 'Campaign Workbench',
    domain: 'Growth operations',
    owner: 'Noah',
    status: 'In Build',
    updatedAt: '2026-04-07',
    modules: 5,
  },
]
