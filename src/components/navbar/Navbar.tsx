import { Box, Container } from '@chakra-ui/react'
import { RouterLink } from '../link/RouterLink'

export const Navbar = () => {
  return (
    <Box
      as="header"
      pos="sticky"
      top={0}
      zIndex="docked"
      width="full"
      backgroundColor="brand.primary"
      minHeight="16"
      display="flex"
      alignItems="center">
      <Container maxW="container.lg">
        <RouterLink
          link="/"
          styles={{
            fontSize: '3xl',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: 'wider',
          }}
          hover={{ textDecor: 'underline' }}>
          Noted
        </RouterLink>
      </Container>
    </Box>
  )
}
