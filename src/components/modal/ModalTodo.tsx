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
import { Todo } from '../../models/todo'

export const ModalTodo = ({ type, title, priority, id }: Todo) => {
  const showToast = useCustomToast()
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
    showToast('Successfully created todo', 'success')
  }

  const handleUpdateTodo = () => {
    updateTodo({
      id,
      title: input,
      priority: selectRef.current?.value,
    })
    onClose()
    showToast('Successfully updated todo', 'success')
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
        <ModalContent>
          <ModalHeader>
            {type === 'update' && 'Update'} {type === 'create' && 'Create'} Todo
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody mt={4}>
            <FormControl>
              <InputGroup display="flex" flexDirection="column" gap={2}>
                <FormLabel
                  textTransform="uppercase"
                  fontWeight="semibold"
                  mb={0}>
                  Nama list item
                </FormLabel>
                <Input
                  ref={initialRef}
                  value={type === 'update' ? input : undefined}
                  onChange={handleChange}
                  placeholder="Tambahkan nama list item"
                />
              </InputGroup>
              <InputGroup display="flex" flexDirection="column" gap={2} mt={6}>
                <FormLabel
                  textTransform="uppercase"
                  fontWeight="semibold"
                  mb={0}>
                  Priority
                </FormLabel>
                <Select
                  ref={selectRef}
                  pos="relative"
                  defaultValue={type === 'update' ? priority : 'normal'}
                  w="max-content">
                  <Box as="option" disabled selected value="">
                    Pilih priority
                  </Box>
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
              onClick={type === 'create' ? handleCreateTodo : handleUpdateTodo}
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
