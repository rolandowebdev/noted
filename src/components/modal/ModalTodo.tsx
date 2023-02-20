import { AddIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
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
  Select,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

import { priorities } from '../../constants/todoPriority'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { useCustomToast } from '../../hooks'

interface ModalTodoProps {
  type: string
  id?: string
}

export const ModalTodo = ({ type, id }: ModalTodoProps) => {
  const showToast = useCustomToast()
  const { createTodo } = useTodoContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')

  const selectRef = useRef<HTMLSelectElement>(null)
  const initialRef = useRef<HTMLInputElement>(null)
  const finalRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleCreateTodo = () => {
    createTodo({
      title: input,
      activity_group_id: id,
      priority: selectRef.current?.value,
    })
    setInput('')
    onClose()
    showToast('Successfully created todo', 'success')
  }

  useEffect(() => {
    if (input.trim() === '') setIsDisabled(true)
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
          Add Todo
        </Button>
      )}
      {type === 'update' && (
        <Button size="xs" variant="unstyled">
          <EditIcon
            fontSize="lg"
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
            {type === 'update' && 'Update'} {type === 'create' && 'Create'} Todo
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody mt={4}>
            <FormControl>
              <InputGroup display="flex" flexDirection="column" gap={2}>
                <FormLabel fontWeight="semibold" mb={0}>
                  Todo name
                </FormLabel>
                <Input
                  ref={initialRef}
                  value={input}
                  onChange={handleChange}
                  placeholder="Type your todo name..."
                />
              </InputGroup>
              <InputGroup display="flex" flexDirection="column" gap={2} mt={6}>
                <FormLabel fontWeight="semibold" mb={0}>
                  Priority
                </FormLabel>
                <Select
                  ref={selectRef}
                  pos="relative"
                  defaultValue="very-high"
                  placeholder="Select priority"
                  w="max-content">
                  {priorities.map((priority) => (
                    <Box
                      as="option"
                      key={priority.priority}
                      value={priority.priority}>
                      {priority.name}
                    </Box>
                  ))}
                </Select>
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleCreateTodo}
              colorScheme="blue"
              mr={3}
              isDisabled={isDisabled}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
