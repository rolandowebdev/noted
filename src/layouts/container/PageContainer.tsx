import { Container } from '@chakra-ui/react'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const navHeight = '96px'
  return (
    <Container
      as="main"
      px={[8, 6, 4, 2]}
      maxW="container.md"
      sx={{ minHeight: `calc(100vh - ${navHeight})` }}>
      {children}
    </Container>
  )
}
