import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useActivityContext } from '@/context'
import { ModalDelete } from '@/components'
import { useCustomToast } from '@/hooks'
import { formatDate } from '@/utils'
import { Activity } from '@/models'

export const CardActivity = ({ id, title, created_at }: Activity) => {
  const navigate = useNavigate()
  const showToast = useCustomToast()
  const { deleteActivity } = useActivityContext()
  const { onClose } = useDisclosure()

  const handleDeleteActivity = () => {
    deleteActivity(id)
      .then(() => onClose())
      .then(() => showToast('Activity berhasil dihapus', 'success'))
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
        <Heading
          as="h2"
          data-cy="activity-item-title"
          size="md"
          color="brand.primary">
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
