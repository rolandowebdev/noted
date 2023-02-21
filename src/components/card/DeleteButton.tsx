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
          <AlertDialogContent textAlign="center">
            <AlertDialogHeader>
              <WarningTwoIcon fontSize="8xl" color="brand.very-high" />
            </AlertDialogHeader>
            <AlertDialogBody letterSpacing="unset">
              Apakah anda yakin menghapus activity {type}
              <Text as="span" display="block" fontWeight="bold">
                {`"${title}"`}?
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter mx="auto">
              <Button
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
