import { Suspense } from 'react'
import { App as AntdApp, ConfigProvider, Spin } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2364aa',
          colorInfo: '#2364aa',
          colorLink: '#2364aa',
          borderRadius: 12,
        },
      }}
    >
      <AntdApp>
        <div id="app">
          <Suspense
            fallback={
              <div className="app-loading">
                <Spin size="large" />
              </div>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
