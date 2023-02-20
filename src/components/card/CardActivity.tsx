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
    showToast('Successfully deleted activity', 'success')
  }

  return (
    <Card as={RouterLink} to={`/todos/${id}`} size="lg">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text as="time" fontSize="sm" dateTime={created_at}>
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
