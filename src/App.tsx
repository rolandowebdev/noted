import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader, Navbar } from './components'

const Dashboard = lazy(() =>
  import('./pages').then((module) => ({ default: module.Dashboard }))
)
const Todo = lazy(() =>
  import('./pages').then((module) => ({ default: module.Todo }))
)

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity/:id" element={<Todo />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
