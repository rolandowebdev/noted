import { useEffect, useRef, useState } from 'react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

interface ModalTodoProps {
  type: string
}

export const ModalActivity = ({ type }: ModalTodoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDisabled, setIsDisabled] = useState(false)
  const [input, setInput] = useState('')

  const initialRef = useRef<HTMLInputElement>(null)
  const finalRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (input?.trim() === '') setIsDisabled(true)
    else setIsDisabled(false)
  }, [input])

  return (
    <>
      {type === 'create' && (
        <Button
          type="button"
          paddingX="7"
          paddingY="6"
          bgColor="brand.primary"
          color="white"
          letterSpacing="wider"
          fontWeight="medium"
          borderRadius="full"
          transition="background-color 150ms ease"
          leftIcon={<AddIcon />}
          _hover={{ bgColor: 'brand.lightPrimary' }}
          onClick={onOpen}>
          Tambah
        </Button>
      )}
      {type === 'update' && (
        <Button size="xs" variant="unstyled">
          <EditIcon
            fontSize="2xl"
            color="gray.500"
            transition="color 150ms ease-in-out"
            _hover={{ color: 'gray.700' }}
            onClick={onOpen}
          />
        </Button>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {type === 'update' && 'Update'} {type === 'create' && 'Create'}{' '}
            Activity
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody mt={4}>
            <FormControl>
              <InputGroup display="flex" flexDirection="column" gap={2}>
                <FormLabel fontWeight="semibold" mb={0}>
                  Activity name
                </FormLabel>
                <Input
                  ref={initialRef}
                  value={input}
                  onChange={handleChange}
                  placeholder="Type your activity name..."
                />
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} isDisabled={isDisabled}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}