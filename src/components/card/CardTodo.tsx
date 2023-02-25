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
import { useCustomToast } from '@/hooks'
import { useTodoContext } from '@/context'
import { Todo } from '@/models'

export const CardTodo = ({ id, title, priority, is_active }: Todo) => {
  const [isChecked, setIsChecked] = useState(is_active === 0)
  const { updateTodo, deleteTodo } = useTodoContext()
  const { onClose } = useDisclosure()
  const showToast = useCustomToast()

  const handleDeleteTodo = () => {
    deleteTodo(id)
    onClose()
    showToast('Todo berhasil dihapus', 'success')
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
              color={isChecked ? 'gray.500' : 'black'}>
              {title}
            </Heading>
            <ModalTodo
              todoId={id}
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
