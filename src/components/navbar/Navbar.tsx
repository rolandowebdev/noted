import { Box, Container, Link } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Box
      as="nav"
      role="navigation"
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
          href="/"
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
