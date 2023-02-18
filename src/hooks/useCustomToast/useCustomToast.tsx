import { useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast()
  return (title: string, status: 'success') => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
    })
  }
}
