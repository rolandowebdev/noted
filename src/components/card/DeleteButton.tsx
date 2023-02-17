import { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { DeleteIcon, WarningTwoIcon } from '@chakra-ui/icons'

const DeleteButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button size="xs" variant="unstyled" onClick={onOpen}>
        <DeleteIcon
          color="gray.500"
          fontSize="lg"
          transition="color 150ms ease-in-out"
          _hover={{ color: 'gray.700' }}
        />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent textAlign="center">
            <AlertDialogHeader>
              <WarningTwoIcon fontSize="8xl" color="brand.very-high" />
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure want to delete your todo?
            </AlertDialogBody>
            <AlertDialogFooter mx="auto">
              <Button
                ref={cancelRef}
                px={6}
                rounded="full"
                color="gray.500"
                onClick={onClose}
                _hover={{ bgColor: 'gray.300' }}>
                Cancel
              </Button>
              <Button
                rounded="full"
                px={6}
                bgColor="brand.very-high"
                color="white"
                fontWeight="normal"
                letterSpacing="wider"
                onClick={onClose}
                ml={3}
                _hover={{ bgColor: 'red' }}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteButton
