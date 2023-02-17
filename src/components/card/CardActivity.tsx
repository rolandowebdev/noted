import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

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
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardFooter
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Text as="time" dateTime={dateTime}>
          {dateText}
        </Text>
        <Button size="xs" variant="unstyled">
          <DeleteIcon
            color="gray.500"
            fontSize="xl"
            transition="color 150ms ease-in-out"
            _hover={{ color: 'gray.700' }}
          />
        </Button>
      </CardFooter>
    </Card>
  )
}
