import {
  Box,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { useCustomToast } from '../../hooks'
import { Todo } from '../../models/todo'
import { ModalTodo } from '../modal/ModalTodo'
import DeleteButton from './DeleteButton'

export const CardTodo = ({ id, title, priority, is_active }: Todo) => {
  const [isChecked, setIsChecked] = useState<boolean>(Boolean(is_active))
  const { updateTodo, deleteTodo } = useTodoContext()
  const { onClose } = useDisclosure()
  const showToast = useCustomToast()

  const handleDeleteTodo = () => {
    deleteTodo(id)
    onClose()
    showToast('Todo berhasil dihapus', 'success')
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    updateTodo({ id, is_active: isChecked ? 0 : 1 })
  }

  return (
    <Card
      transition="box-shadow 200ms ease-in-out"
      _hover={{ boxShadow: '4px 4px 4px 2px rgba(181,181,181,0.23)' }}>
      <CardBody>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" spacing="20px">
            <Checkbox
              colorScheme="green"
              isChecked={isChecked}
              onChange={handleCheckboxChange}
            />
            <Box
              width={3}
              height={3}
              rounded="full"
              bgColor={`brand.${priority}`}
            />
            <Text
              fontSize="lg"
              decoration={isChecked ? 'line-through' : 'none'}
              color={isChecked ? 'gray.500' : 'black'}>
              {title}
            </Text>
            <ModalTodo
              id={id}
              title={title}
              priority={priority}
              type="update"
            />
          </HStack>
          <DeleteButton
            type="todo"
            title={title}
            handleDelete={handleDeleteTodo}
          />
        </HStack>
      </CardBody>
    </Card>
  )
}
