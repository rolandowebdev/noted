import { Box, Container, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box
      data-cy="header-background"
      as="header"
      pos="sticky"
      top={0}
      zIndex="docked"
      width="full"
      backgroundColor="brand.primary"
      height="105px"
      display="flex"
      alignItems="center">
      <Container maxW="container.lg">
        <Text
          as="span"
          data-cy="header-title"
          aria-label="header-title"
          fontSize="2xl"
          fontWeight="900"
          color="white"
          letterSpacing="wider">
          TO DO LIST APP
        </Text>
      </Container>
    </Box>
  )
}
