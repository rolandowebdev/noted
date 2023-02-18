import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Activity } from '../../models/activity'
import { formatDate } from '../../utils/formatDate'
import DeleteButton from './DeleteButton'

export const CardActivity = ({ id, title, created_at }: Activity) => {
  return (
    <Card size="lg">
      <CardHeader>
        <Link as={RouterLink} to={`/todos/${id}`}>
          <Heading size="md">{title}</Heading>
        </Link>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text as="time" dateTime={created_at}>
          {formatDate(created_at)}
        </Text>
        <DeleteButton type="activity" id={id} title={title} />
      </CardFooter>
    </Card>
  )
}
