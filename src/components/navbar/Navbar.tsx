import { Box, Container, Text } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Box
      data-cy="header-background"
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
        <Text
          as="p"
          data-cy="header-title"
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          letterSpacing="wider">
          TO DO LIST APP
        </Text>
      </Container>
    </Box>
  )
}
