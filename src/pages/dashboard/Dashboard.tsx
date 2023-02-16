import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { Illustration } from '../../components'

export const Dashboard = () => {
  return (
    <Box as="nav" role="navigation" marginBlock={8}>
      <HStack justify="space-between" align="center">
        <Text as="h1" fontSize="3xl" fontWeight="bold">
          Activity
        </Text>
        <Button
          type="button"
          paddingX="8"
          paddingY="6"
          bgColor="brand.primary"
          color="white"
          letterSpacing="wider"
          fontWeight="medium"
          borderRadius="full"
          transition="background-color 150ms ease"
          _hover={{ bgColor: 'brand.lightPrimary' }}>
          Tambah
        </Button>
      </HStack>
      <Illustration
        desc="Buat activity pertamamu"
        illustrationHuman="/images/human-activity.png"
        illustrationIcon="/images/activity.png"
        illustrationGround="/icons/ground-two.svg"
      />
    </Box>
  )
}
