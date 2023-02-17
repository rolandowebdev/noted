import { UpDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { CardTodo, Illustration, ModalTodo } from '../../components'
import { PageContainer } from '../../layouts'
import { sortOptions } from '../../constants/sortOptions'
import { comment } from '../../constants/todoPriority'
import { ModalActivity } from '../../components/modal/ModalActivity'

const todos = [
  {
    id: 1,
    title: 'Steak Food',
    comment: comment.high,
    isChecked: false,
  },
  {
    id: 2,
    title: 'Spagheti Food',
    comment: comment.low,
    isChecked: true,
  },
  {
    id: 3,
    title: 'Chicken Fried Food',
    comment: comment.veryHigh,
    isChecked: false,
  },
  {
    id: 4,
    title: 'Lobster Food',
    comment: comment.veryLow,
    isChecked: false,
  },
  {
    id: 5,
    title: 'Seafood',
    comment: comment.normal,
    isChecked: false,
  },
  {
    id: 6,
    title: 'Vegetables Food',
    comment: comment.veryHigh,
    isChecked: false,
  },
  {
    id: 7,
    title: 'Diet Food',
    comment: comment.high,
    isChecked: false,
  },
]

export const Todo = () => {
  const card = true
  return (
    <PageContainer>
      <HStack justify="space-between" align="center">
        <HStack alignItems="center" spacing="24px">
          <Heading as="h1" size="lg" fontWeight="bold">
            List Food
          </Heading>
          <ModalActivity type="update" />
        </HStack>
        <Stack direction="row" alignItems="center" spacing="16px">
          <Menu strategy="fixed">
            <MenuButton
              as={IconButton}
              variant="outline"
              rounded="full"
              height="48px"
              aria-label="sort todos"
              icon={<UpDownIcon color="gray.500" />}
              sx={{ aspectRatio: '1/1' }}
            />
            <MenuList>
              <MenuOptionGroup defaultValue="terbaru" type="radio">
                {sortOptions.map((sortOption) => (
                  <MenuItemOption
                    key={sortOption.text}
                    value={sortOption.value}>
                    <HStack alignItems="center">
                      <Image src={sortOption.icon} />
                      <Text>{sortOption.text}</Text>
                    </HStack>
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <ModalTodo type="create" />
        </Stack>
      </HStack>
      <Box mt={[16, 14, 12]}>
        {card ? (
          <Stack spacing="16px">
            {todos.map((todo) => (
              <CardTodo
                key={todo.id}
                title={todo.title}
                comment={todo.comment}
                checked={todo.isChecked}
              />
            ))}
          </Stack>
        ) : (
          <Illustration
            desc="Create your todo here"
            illustrationHuman="/images/human-todo.png"
            illustrationIcon="/images/todo.png"
            illustrationGround="/icons/ground-two.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
