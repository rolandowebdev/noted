import { Text } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { PageContainer } from './layouts'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <PageContainer>
      <Routes>
        <Route path="/" element={<Text>Activities</Text>} />
        <Route path="/todo" element={<Text>Todo</Text>} />
      </Routes>
    </PageContainer>
  </BrowserRouter>
)
