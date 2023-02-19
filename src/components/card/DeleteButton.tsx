import { DeleteIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useActivityContext } from '../../context'
import { useCustomToast } from '../../hooks'

interface DeleteButtonProps {
  id?: number | any
  title?: string
  type: string
}

const DeleteButton = ({ id, title, type }: DeleteButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { deleteActivity } = useActivityContext()

  const cancelRef = useRef<HTMLButtonElement>(null)
  const showToast = useCustomToast()

  const handleDelete = () => {
    if (type === 'activity') deleteActivity(id)
    onClose()
    showToast(`Successfully deleted ${type}`, 'success')
  }

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
            <AlertDialogBody letterSpacing="unset">
              Are you sure want to delete your {type}
              <Text as="span" display="block" fontWeight="semibold">
                {title}?
              </Text>
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
                onClick={handleDelete}
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
