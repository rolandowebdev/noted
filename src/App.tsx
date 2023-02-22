import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader } from './components'

const Dashboard = lazy(() =>
  import('./pages').then((module) => ({ default: module.Dashboard }))
)
const Todo = lazy(() =>
  import('./pages').then((module) => ({ default: module.Todo }))
)

const Navbar = lazy(() =>
  import('./components').then((module) => ({ default: module.Navbar }))
)

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:id" element={<Todo />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
