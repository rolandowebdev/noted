import { Box } from '@chakra-ui/react'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box as="main" maxW="container.md">
      {children}
    </Box>
  )
}
