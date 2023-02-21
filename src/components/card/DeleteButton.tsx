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

interface DeleteButtonProps {
  title: string
  type: string
  handleDelete: (e: any) => void
}

const DeleteButton = ({ title, type, handleDelete }: DeleteButtonProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        data-cy={
          type === 'activity'
            ? 'activity-item-delete-button'
            : 'todo-item-delete-button'
        }
        size="xs"
        variant="unstyled"
        onClick={(e) => {
          e.preventDefault()
          onOpen()
        }}>
        <DeleteIcon
          color="gray.500"
          fontSize="xl"
          transition="color 150ms ease-in-out"
          _hover={{ color: 'brand.very-high' }}
        />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent textAlign="center" data-cy="modal-delete">
            <AlertDialogHeader>
              <WarningTwoIcon
                data-cy="modal-delete-icon"
                fontSize="8xl"
                color="brand.very-high"
              />
            </AlertDialogHeader>
            <AlertDialogBody data-cy="modal-delete-title" letterSpacing="unset">
              Apakah anda yakin menghapus activity {type}
              <Text as="span" display="block" fontWeight="bold">
                {`"${title}"`}?
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter mx="auto">
              <Button
                data-cy="modal-delete-cancel-button"
                ref={cancelRef}
                px={6}
                w={28}
                rounded="full"
                color="gray.500"
                onClick={onClose}
                _hover={{ bgColor: 'gray.300' }}>
                Batal
              </Button>
              <Button
                data-cy="modal-delete-confirm-button"
                rounded="full"
                px={6}
                w={28}
                bgColor="brand.very-high"
                color="white"
                fontWeight="normal"
                letterSpacing="wider"
                onClick={handleDelete}
                ml={3}
                _hover={{ bgColor: 'brand.very-high-hover' }}>
                Hapus
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteButton
