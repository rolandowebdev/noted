import { Container } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { NavbarDashboard, Header } from '../../components'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const location = useLocation().pathname === '/'
  return (
    <>
      <Header />
      <Container
        data-cy="activity-dashboard"
        as="main"
        maxW="container.lg"
        marginBlock={8}
        px={[8, 6, 4]}
        sx={{ minHeight: 'calc(100vh - 128px)' }}>
        {location && <NavbarDashboard />}
        {children}
      </Container>
    </>
  )
}
