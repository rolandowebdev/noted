import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { CardTodo, EditableText, ModalTodo } from '../../components'
import { sortOptions } from '../../constants/sortOptions'
import { useActivityContext, useTodoContext } from '../../context'
import { sortData } from '../../utils/sortData'

const Detail = () => {
  const { activityId } = useParams<string>()
  const { todos, getTodos } = useTodoContext()
  const { getActivity } = useActivityContext()

  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState<any>('latest')
  const sortedTodoItems = sortData(todos, selectedOption)

  useEffect(() => {
    Promise.all([getActivity(activityId), getTodos(activityId)]).then(() =>
      setLoading(false)
    )
  }, [activityId])

  if (loading) return <Box display="none" />

  return (
    <>
      <HStack as="nav" justify="space-between" align="center" height="50px">
        <HStack alignItems="center">
          <Link
            as={RouterLink}
            to="/"
            sx={{
              size: 'xs',
              ml: '-17px',
              display: 'flex',
              alignItems: 'center',
            }}
            _hover={{ textDecor: 'underline', color: 'brand.primary' }}>
            <ChevronLeftIcon data-cy="todo-back-button" fontSize="5xl" />
          </Link>
          <EditableText activityId={activityId} />
        </HStack>
        <Stack direction="row" alignItems="center" spacing={3}>
          {sortedTodoItems?.length < 1 ? null : (
            <Menu>
              <MenuButton
                data-cy="todo-sort-button"
                as={Button}
                variant="outline"
                rounded="full"
                height={12}
                aria-label="sort todos"
                sx={{ aspectRatio: '1/1' }}>
                <UpDownIcon color="gray.500" />
              </MenuButton>
              <MenuList data-cy="sort-parent">
                <MenuOptionGroup
                  type="radio"
                  onChange={setSelectedOption}
                  value={selectedOption}>
                  {sortOptions.map((sortOption) => (
                    <MenuItemOption
                      data-cy="sort-selection"
                      key={sortOption.text}
                      value={sortOption.value}>
                      <HStack alignItems="center">
                        <Icon as={sortOption.icon} />
                        <Text>{sortOption.text}</Text>
                      </HStack>
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          )}
          <ModalTodo type="create" activityId={activityId} />
        </Stack>
      </HStack>
      {sortedTodoItems?.length < 1 && (
        <Image
          data-cy="todo-empty-state"
          loading="eager"
          mt={12}
          boxSize="sm"
          objectFit="contain"
          mx="auto"
          src="/todo.svg"
          alt="todo illustration"
        />
      )}
      <Stack as="section" spacing={4} mt={[16, 14, 12]}>
        {sortedTodoItems.map((todo: any) => (
          <CardTodo
            key={todo.id}
            id={todo.id}
            is_active={todo.is_active}
            title={todo.title}
            priority={todo.priority}
          />
        ))}
      </Stack>
    </>
  )
}

export default Detail
