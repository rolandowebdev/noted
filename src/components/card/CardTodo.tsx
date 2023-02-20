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
  comment: string
  checked: boolean
}

export const CardTodo = ({ id, title, comment, checked }: CardTodoProps) => {
  const [isChecked, setIsChecked] = useState(checked)
  const { onClose } = useDisclosure()
  const { deleteTodo } = useTodoContext()
  const showToast = useCustomToast()

  const handleDeleteTodo = () => {
    deleteTodo(id)
    onClose()
    showToast('Successfully deleted todo', 'success')
  }

  const handleChange = (e: { target: { checked: boolean } }) => {
    setIsChecked(e.target.checked)
  }
  return (
    <Card>
      <CardBody>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" spacing="20px">
            <Checkbox
              colorScheme="green"
              isChecked={isChecked}
              onChange={handleChange}
            />
            <Box
              width={3}
              height={3}
              rounded="full"
              bgColor={`brand.${comment}`}
            />
            <Text
              fontSize="lg"
              decoration={isChecked ? 'line-through' : 'none'}
              color={isChecked ? 'gray.500' : 'black'}>
              {title}
            </Text>
            <ModalTodo type="update" />
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
