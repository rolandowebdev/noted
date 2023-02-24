import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useActivityContext } from '../../context'
import { useCustomToast } from '../../hooks'
import { Activity } from '../../models/activity'
import { formatDate } from '../../utils/formatDate'
import { ModalDelete } from '../modal/ModalDelete'

export const CardActivity = ({ id, title, created_at }: Activity) => {
  const { deleteActivity } = useActivityContext()
  const { onClose } = useDisclosure()
  const navigate = useNavigate()
  const showToast = useCustomToast()

  const handleDeleteActivity = () => {
    deleteActivity(id)
    onClose()
    showToast('Activity berhasil dihapus', 'success')
  }

  return (
    <Card
      data-cy="activity-item"
      size="lg"
      height="234px"
      transition="box-shadow 200ms ease-in-out"
      _hover={{ boxShadow: '4px 4px 4px 2px rgba(181,181,181,0.23)' }}
      onClick={() => navigate(`/detail/${id}`)}>
      <CardHeader height="full">
        <Heading as="h2" data-cy="activity-item-title" size="md">
          {title}
        </Heading>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text
          as="time"
          data-cy="activity-item-date"
          fontSize="sm"
          color="gray.700"
          dateTime={created_at}>
          {formatDate(created_at)}
        </Text>
        <ModalDelete
          type="activity"
          title={title}
          handleDelete={handleDeleteActivity}
        />
      </CardFooter>
    </Card>
  )
}
