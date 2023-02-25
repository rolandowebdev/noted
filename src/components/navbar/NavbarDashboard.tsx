import { AddIcon } from '@chakra-ui/icons'
import { Button, Heading, HStack } from '@chakra-ui/react'
import { useActivityContext } from '@/context'
import { useCustomToast } from '@/hooks'

export const NavbarDashboard = () => {
  const showToast = useCustomToast()
  const { createActivity } = useActivityContext()

  const handleCreateActivity = () => {
    createActivity().then(() =>
      showToast('Activity berhasil dibuat', 'success')
    )
  }

  return (
    <HStack
      as="nav"
      role="navigation"
      justify="space-between"
      align="center"
      height="50px">
      <Heading data-cy="activity-title" as="h1" fontSize="4xl" fontWeight="700">
        Activity
      </Heading>
      <Button
        data-cy="activity-add-button"
        type="button"
        paddingX="7"
        paddingY="6"
        bgColor="brand.primary"
        color="white"
        letterSpacing="wider"
        fontWeight="500"
        borderRadius="full"
        transition="background-color 150ms ease"
        leftIcon={<AddIcon />}
        _hover={{ bgColor: 'brand.lightPrimary' }}
        onClick={handleCreateActivity}>
        Tambah
      </Button>
    </HStack>
  )
}
