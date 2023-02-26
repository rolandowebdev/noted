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
import { priorities } from '@/constants'
import { useTodoContext } from '@/context'
import { useCustomToast } from '@/hooks'
import { Todo } from '@/models'

export const ModalTodo = ({
  id,
  activity_group_id,
  type,
  title,
  priority,
}: Todo) => {
  const selectedPriorityUpdate = type === 'update' ? priority : 'normal'
  const showToast = useCustomToast()
  const initialRef = useRef<HTMLInputElement>(null)
  const finalRef = useRef<HTMLButtonElement>(null)

  const { createTodo, updateTodo } = useTodoContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [input, setInput] = useState<any>(title)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [selectedPriority, setSelectedPriority] = useState<any>(
    selectedPriorityUpdate
  )

  const handleChange = (e: { target: { value: string } }) => {
    setInput(e.target.value)
  }

  const handleSelectChange = (value: any) => {
    setSelectedPriority(value)
  }

  const handleCreateTodo = () => {
    createTodo({
      title: input,
      activity_group_id,
      priority: selectedPriority,
    }).then(() => onClose(), showToast('Todo berhasil dibuat', 'success'))
    setInput('')
    setSelectedPriority(selectedPriorityUpdate)
  }

  const handleUpdateTodo = () => {
    updateTodo({
      id,
      title: input,
      priority: selectedPriority,
    }).then(() => onClose(), showToast('Todo berhasil diupdate', 'success'))
  }

  const handleCloseModal = () => {
    setInput('')
    setSelectedPriority(selectedPriorityUpdate)
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
          fontWeight="500"
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
            <Text data-cy="modal-add-title" color="blackAlpha.800">
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
                  fontWeight="500"
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
                  fontWeight="500"
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
                        bgColor={`brand.${selectedPriority}`}
                      />
                      <Text color="blackAlpha.800">{selectedPriority}</Text>
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup
                      type="radio"
                      onChange={handleSelectChange}
                      value={selectedPriority}>
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
                            <Text color="blackAlpha.800">
                              {priority.priority}
                            </Text>
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
