import { Container } from '@chakra-ui/react'
import { Navbar } from '../../components'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const navHeight = '128px'
  return (
    <>
      <Navbar />
      <Container
        data-cy="activity-dashboard"
        as="main"
        maxW="container.lg"
        marginBlock={8}
        px={[8, 6, 4]}
        sx={{ minHeight: `calc(100vh - ${navHeight})` }}>
        {children}
      </Container>
    </>
  )
}
