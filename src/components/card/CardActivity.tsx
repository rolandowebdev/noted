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

interface CardActivityProps {
  title: string
  dateText: string
  dateTime: string
}

export const CardActivity = ({
  title,
  dateText,
  dateTime,
}: CardActivityProps) => {
  return (
    <Card size="lg">
      <CardHeader>
        <Link as={RouterLink} to="/todo">
          <Heading size="md">{title}</Heading>
        </Link>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text as="time" dateTime={dateTime}>
          {dateText}
        </Text>
        <DeleteButton />
      </CardFooter>
    </Card>
  )
}
