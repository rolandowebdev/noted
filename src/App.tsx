import { Box } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageContainer } from '@/layouts'

const Dashboard = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Dashboard }))
)

const Detail = lazy(() =>
  import('@/pages').then((module) => ({ default: module.Detail }))
)

export const App = () => (
  <BrowserRouter>
    <PageContainer>
      <Suspense fallback={<Box display="none" />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:activityId" element={<Detail />} />
        </Routes>
      </Suspense>
    </PageContainer>
  </BrowserRouter>
)
