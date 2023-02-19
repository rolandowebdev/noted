import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react'
import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'

import {
  CardTodo,
  CustomControls,
  Illustration,
  ModalTodo,
} from '../../components'
import { PageContainer } from '../../layouts'
import { sortOptions } from '../../constants/sortOptions'
import { comment } from '../../constants/todoPriority'

const todos: any[] = [
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
]

export const Todo = () => {
  return (
    <PageContainer>
      <HStack justify="space-between" align="center">
        <HStack alignItems="center">
          <Link
            as={RouterLink}
            to="/"
            size="xs"
            ml="-17px"
            display="flex"
            alignItems="center"
            _hover={{ textDecor: 'underline', color: 'brand.primary' }}>
            <ChevronLeftIcon fontSize="5xl" />
          </Link>
          <CustomControls />
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
        {todos.length < 0 ? (
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
            illustrationGround="/icons/ground.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
