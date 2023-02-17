import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Text,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import DeleteButton from './DeleteButton'

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
              decoration={isChecked ? 'line-through' : 'none'}>
              {title}
            </Text>
            <Button size="xs" variant="unstyled">
              <EditIcon
                fontSize="lg"
                color="gray.500"
                transition="color 150ms ease-in-out"
                _hover={{ color: 'gray.700' }}
              />
            </Button>
          </HStack>
          <DeleteButton />
        </HStack>
      </CardBody>
    </Card>
  )
}
