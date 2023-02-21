import { AddIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
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
import { useEffect, useRef, useState } from 'react'

import { priorities } from '../../constants/todoPriority'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { Todo } from '../../models/todo'

export const ModalTodo = ({ type, title, priority, id }: Todo) => {
  const initialRef = useRef<HTMLInputElement>(null)
  const finalRef = useRef<HTMLButtonElement>(null)
  const selectedPriorityUpdate = type === 'update' ? priority : 'normal'

  const { createTodo, updateTodo } = useTodoContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState<any>(title)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [selectedOption, setSelectedOption] = useState<any>(
    selectedPriorityUpdate
  )

  const handleChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleSelectChange = (value: any) => {
    setSelectedOption(value)
  }

  const handleCreateTodo = () => {
    createTodo({
      title: input,
      activity_group_id: id,
      is_active: 0,
      priority: selectedOption,
    })
    setInput('')
    onClose()
  }

  const handleUpdateTodo = () => {
    updateTodo({
      id,
      title: input,
      priority: selectedOption,
    })
    onClose()
  }

  const handleCloseModal = () => {
    setInput('')
    setSelectedOption(selectedPriorityUpdate)
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
                <Menu>
                  <MenuButton
                    data-cy="modal-add-priority-dropdown"
                    as={Button}
                    variant="outline"
                    width={36}
                    aria-label="sort todos"
                    sx={{ aspectRatio: '1/1' }}>
                    <HStack align="center">
                      <Box
                        width={3}
                        height={3}
                        rounded="full"
                        bgColor={`brand.${selectedOption}`}
                      />
                      <Text>{selectedOption}</Text>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup
                      type="radio"
                      onChange={handleSelectChange}
                      value={selectedOption}>
                      {priorities.map((priority) => (
                        <MenuItemOption
                          data-cy="modal-add-priority-item"
                          key={priority.priority}
                          value={priority.priority}>
                          <HStack alignItems="center">
                            <Box
                              width={3}
                              height={3}
                              rounded="full"
                              bgColor={`brand.${priority.priority}`}
                            />
                            <Text>{priority.priority}</Text>
                          </HStack>
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
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
