import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader } from './components'
import { PageContainer } from './layouts'

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Todo = lazy(() => import('./pages/todo/Todo'))

export const App = () => (
  <PageContainer>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </PageContainer>
)
