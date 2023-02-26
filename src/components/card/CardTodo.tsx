import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Heading,
  HStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ModalDelete, ModalTodo } from '@/components'
import { useTodoContext } from '@/context'
import { useCustomToast } from '@/hooks'
import { Todo } from '@/models'

export const CardTodo = ({ id, title, priority, is_active }: Todo) => {
  const showToast = useCustomToast()
  const { onClose } = useDisclosure()
  const { updateTodo, deleteTodo } = useTodoContext()
  const [isChecked, setIsChecked] = useState(is_active === 0)

  const handleDeleteTodo = () => {
    deleteTodo(id)
      .then(() => onClose())
      .then(() => showToast('Todo berhasil dihapus', 'success'))
  }

  const handleCheckboxChange = async () => {
    const newStatus = isChecked ? 1 : 0
    setIsChecked(!isChecked)
    updateTodo({ id, is_active: newStatus })
  }

  return (
    <Card
      data-cy="todo-item"
      transition="box-shadow 200ms ease-in-out"
      _hover={{ boxShadow: '4px 4px 4px 2px rgba(181,181,181,0.23)' }}>
      <CardBody>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" spacing="20px">
            <Checkbox
              data-cy="todo-item-checkbox"
              colorScheme="green"
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            />
            <Box
              data-cy="todo-item-priority-indicator"
              width={3}
              height={3}
              rounded="full"
              bgColor={`brand.${priority}`}
            />
            <Heading
              data-cy="todo-item-title"
              size="md"
              textDecoration={isChecked ? 'line-through' : 'none'}
              color={isChecked ? 'gray.500' : 'blackAlpha.800'}>
              {title}
            </Heading>
            <ModalTodo
              id={id}
              title={title}
              priority={priority}
              type="update"
            />
          </HStack>
          <ModalDelete
            type="todo"
            title={title}
            handleDelete={handleDeleteTodo}
          />
        </HStack>
      </CardBody>
    </Card>
  )
}
