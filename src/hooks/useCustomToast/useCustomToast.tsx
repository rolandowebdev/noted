import { Alert, AlertIcon, Text, useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast()
  const TIMER = 15000
  return (title: string, status: 'success') => {
    toast({
      status,
      duration: TIMER,
      render: () => (
        <Alert status="success">
          <AlertIcon />
          <Text as="p">{title}</Text>
        </Alert>
      ),
    })
  }
}
