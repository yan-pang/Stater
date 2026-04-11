import { AppstoreOutlined, FileTextOutlined } from '@ant-design/icons'
import type { ReactNode } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../../styles/NavigationLayout.scss'

interface MenuItem {
  label: string
  path: string
  icon: ReactNode
  note: string
}

const menuItems: MenuItem[] = [
  {
    label: 'Project Catalog',
    path: '/catalog',
    icon: <AppstoreOutlined />,
    note: 'Sample list page',
  },
  {
    label: 'Workflow Guide',
    path: '/workflow',
    icon: <FileTextOutlined />,
    note: 'How this starter is used',
  },
]

function NavigationLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="starter-layout">
      <header className="starter-layout__header">
        <div>
          <p className="starter-layout__eyebrow">Reusable prototype baseline</p>
          <h1 className="starter-layout__brand">VIP Starter</h1>
        </div>
        <div className="starter-layout__meta">
          <span>Main repo for shared workflow</span>
          <span>Generic sample only</span>
        </div>
      </header>

      <div className="starter-layout__body">
        <aside className="starter-layout__sidebar">
          <div className="starter-layout__sidebar-title">Sample Modules</div>
          {menuItems.map((item) => {
            const active = location.pathname === item.path

            return (
              <button
                key={item.path}
                className={`starter-layout__nav-item ${active ? 'is-active' : ''}`}
                type="button"
                onClick={() => navigate(item.path)}
              >
                <span className="starter-layout__nav-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.note}</small>
                </span>
              </button>
            )
          })}
        </aside>

        <main className="starter-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default NavigationLayout
