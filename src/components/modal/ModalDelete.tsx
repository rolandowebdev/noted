import { DeleteIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

interface ModalDeleteProps {
  type: string
  title: string | undefined
  handleDelete: () => void
}

export const ModalDelete = ({
  title,
  type,
  handleDelete,
}: ModalDeleteProps) => {
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
          e.stopPropagation()
          onOpen()
        }}>
        <DeleteIcon
          color="gray.500"
          fontSize="xl"
          transition="color 150ms ease-in-out"
          _hover={{ color: 'brand.very-high' }}
        />
      </Button>
      <Modal
        blockScrollOnMount={false}
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent data-cy="modal-delete" textAlign="center">
          <ModalHeader>
            <WarningTwoIcon
              data-cy="modal-delete-icon"
              fontSize="8xl"
              color="brand.very-high"
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody data-cy="modal-delete-title" color="blackAlpha.800">
            Apakah anda yakin menghapus {type}
            <Text as="span" display="block" fontWeight="700">
              {`"${title}"`}?
            </Text>
          </ModalBody>
          <ModalFooter mx="auto">
            <Button
              data-cy="modal-delete-cancel-button"
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
