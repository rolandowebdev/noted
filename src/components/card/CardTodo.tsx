import { useState } from 'react'
import { Box, Card, CardBody, Checkbox, HStack, Text } from '@chakra-ui/react'
import DeleteButton from './DeleteButton'
import { ModalTodo } from '../modal/ModalTodo'

interface CardTodoProps {
  title: string
  comment: string
  checked: boolean
}

export const CardTodo = ({ title, comment, checked }: CardTodoProps) => {
  const [isChecked, setIsChecked] = useState(checked)
  const handleChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) }
  }) => {
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
          <DeleteButton type="todo" />
        </HStack>
      </CardBody>
    </Card>
  )
}
