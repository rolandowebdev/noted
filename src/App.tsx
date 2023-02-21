import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Dashboard, Todo } from './pages'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/todos/:id" element={<Todo />} />
    </Routes>
  </BrowserRouter>
)
