import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useActivityContext } from '../../context'
import { useCustomToast } from '../../hooks'
import { Activity } from '../../models/activity'
import { formatDate } from '../../utils/formatDate'
import DeleteButton from './DeleteButton'

export const CardActivity = ({ id, title, created_at }: Activity) => {
  const { onClose } = useDisclosure()
  const { deleteActivity } = useActivityContext()
  const showToast = useCustomToast()

  const handleDeleteActivity = () => {
    deleteActivity(id)
    onClose()
    showToast('Activity berhasil dihapus', 'success')
  }

  return (
    <Card
      as={RouterLink}
      to={`/todos/${id}`}
      size="lg"
      transition="box-shadow 200ms ease-in-out"
      _hover={{ boxShadow: '4px 4px 4px 2px rgba(181,181,181,0.23)' }}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text as="time" fontSize="sm" color="gray.500" dateTime={created_at}>
          {formatDate(created_at)}
        </Text>
        <DeleteButton
          type="activity"
          title={title}
          handleDelete={handleDeleteActivity}
        />
      </CardFooter>
    </Card>
  )
}
