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
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

import { priorities } from '../../constants/todoPriority'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { Todo } from '../../models/todo'

export const ModalTodo = ({ type, title, priority, id }: Todo) => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const initialRef = useRef<HTMLInputElement>(null)
  const finalRef = useRef<HTMLButtonElement>(null)

  const { createTodo, updateTodo } = useTodoContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [input, setInput] = useState<any>(title)

  const handleChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleCreateTodo = () => {
    createTodo({
      title: input,
      activity_group_id: id,
      is_active: 0,
      priority: selectRef.current?.value,
    })
    setInput('')
    onClose()
  }

  const handleUpdateTodo = () => {
    updateTodo({
      id,
      title: input,
      priority: selectRef.current?.value,
    })
    onClose()
  }

  const handleCloseModal = () => {
    setInput('')
    onClose()
  }

  const handleOpenModal = () => {
    setInput(title)
    onOpen()
  }

  useEffect(() => {
    setIsDisabled(!input?.length)
  }, [input])

  return (
    <>
      {type === 'create' && (
        <Button
          data-cy="todo-add-button"
          type="button"
          paddingX="7"
          paddingY="6"
          bgColor="brand.primary"
          color="white"
          letterSpacing="wider"
          fontWeight="semibold"
          borderRadius="full"
          transition="background-color 150ms ease"
          leftIcon={<AddIcon />}
          _hover={{ bgColor: 'brand.lightPrimary' }}
          onClick={onOpen}>
          Tambah
        </Button>
      )}
      {type === 'update' && (
        <Button data-cy="todo-item-edit-button" size="xs" variant="unstyled">
          <EditIcon
            fontSize="lg"
            color="gray.500"
            transition="color 150ms ease-in-out"
            _hover={{ color: 'gray.700' }}
            onClick={handleOpenModal}
          />
        </Button>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleCloseModal}
        motionPreset="slideInBottom"
        isCentered>
        <ModalOverlay />
        <ModalContent data-cy="modal-add">
          <ModalHeader>
            <Text data-cy="modal-add-title">
              {type === 'update' && 'Update'} {type === 'create' && 'Create'}{' '}
              Todo
            </Text>
          </ModalHeader>
          <Divider />
          <ModalCloseButton data-cy="modal-add-close-button" />
          <ModalBody mt={4}>
            <FormControl>
              <InputGroup display="flex" flexDirection="column" gap={2}>
                <FormLabel
                  data-cy="modal-add-name-title"
                  fontWeight="semibold"
                  mb={0}>
                  Nama list item
                </FormLabel>
                <Input
                  data-cy="modal-add-name-input"
                  ref={initialRef}
                  value={type === 'update' ? input : undefined}
                  onChange={handleChange}
                  placeholder="Tambahkan nama list item"
                />
              </InputGroup>
              <InputGroup display="flex" flexDirection="column" gap={2} mt={6}>
                <FormLabel
                  data-cy="modal-add-priority-title"
                  fontWeight="semibold"
                  mb={0}>
                  Priority
                </FormLabel>
                <Select
                  data-cy="modal-add-priority-dropdown"
                  ref={selectRef}
                  pos="relative"
                  defaultValue={type === 'update' ? priority : 'normal'}
                  w="max-content">
                  <Box as="option" disabled selected value="">
                    Pilih priority
                  </Box>
                  {priorities.map((priority) => (
                    <Box
                      data-cy="modal-add-priority-item"
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
              data-cy="modal-add-save-button"
              onClick={type === 'create' ? handleCreateTodo : handleUpdateTodo}
              colorScheme="blue"
              mr={3}
              isDisabled={isDisabled}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
