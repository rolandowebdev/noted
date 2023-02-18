import { Link as RouterLink } from 'react-router-dom'
import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react'
import DeleteButton from './DeleteButton'
import { Activity } from '../../models/activity'

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
          {created_at}
        </Text>
        <DeleteButton />
      </CardFooter>
    </Card>
  )
}
