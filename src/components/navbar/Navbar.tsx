import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Link } from '@chakra-ui/react'

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
      <Container maxW="container.md">
        <Link
          as={RouterLink}
          to="/"
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          letterSpacing="wider">
          Noted
        </Link>
      </Container>
    </Box>
  )
}
