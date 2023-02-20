import { useState } from 'react'
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import DeleteButton from './DeleteButton'
import { ModalTodo } from '../modal/ModalTodo'
import { useCustomToast } from '../../hooks'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'

interface CardTodoProps {
  id: any
  title: string
  priority: string
  isActive: boolean
}

export const CardTodo = ({ id, title, priority, isActive }: CardTodoProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(Boolean(isActive))
  const { updateTodo, deleteTodo } = useTodoContext()
  const { onClose } = useDisclosure()
  const showToast = useCustomToast()

  const handleDeleteTodo = () => {
    deleteTodo(id)
    onClose()
    showToast('Successfully deleted todo', 'success')
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    updateTodo({ id, is_active: isChecked ? 0 : 1 })
  }

  return (
    <Card>
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
            <ModalTodo id={id} title={title} type="update" />
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
