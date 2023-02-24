import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Header, NavbarDashboard } from '../../components'

interface PageContainerProps {
  children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const location = useLocation().pathname === '/'
  return (
    <>
      <Header />
      <Container
        data-cy={location ? 'activity-dashboard' : 'todo-page'}
        as="main"
        height="container.sm"
        maxW="container.lg"
        marginBlock={8}
        px={[8, 6, 4]}>
        {location && <NavbarDashboard />}
        {children}
      </Container>
    </>
  )
}
