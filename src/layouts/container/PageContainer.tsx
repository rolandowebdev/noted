import { Container } from '@chakra-ui/react'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const navHeight = '64px'
  return (
    <Container
      as="main"
      maxW="container.md"
      sx={{ minHeight: `calc(100vh - ${navHeight})` }}>
      {children}
    </Container>
  )
}
