import { useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast()
  const TIMER = 1000
  return (title: string, status: 'success') => {
    toast({
      title,
      status,
      duration: TIMER,
      isClosable: true,
    })
  }
}
