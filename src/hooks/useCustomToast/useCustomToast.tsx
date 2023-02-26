import { Alert, AlertIcon, Text, useToast } from '@chakra-ui/react'

export const useCustomToast = (): any => {
  const toast = useToast()
  const TIMER = 1500
  return (title: string, status: 'success') => {
    toast({
      status,
      duration: TIMER,
      render: () => (
        <Alert data-cy="modal-information" status="success">
          <AlertIcon data-cy="modal-information-icon" />
          <Text data-cy="modal-information-title" as="p" color="blackAlpha.800">
            {title}
          </Text>
        </Alert>
      ),
    })
  }
}
