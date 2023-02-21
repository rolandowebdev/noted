import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'
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
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  CardTodo,
  EditableText,
  Illustration,
  ModalTodo,
  RouterLink,
} from '../../components'
import { sortOptions } from '../../constants/sortOptions'
import { useActivityContext } from '../../context'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { PageContainer } from '../../layouts'
import { sortData } from '../../utils/sortData'

export const Todo = () => {
  const { id } = useParams<string>()
  const { todoItems, getAllTodo } = useTodoContext()
  const { setActivity, getOneActivity } = useActivityContext()

  const [selectedOption, setSelectedOption] = useState<string>('latest')
  const sortedTodoItems = sortData(todoItems, selectedOption)

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  const handleSelectChange = (value: any) => {
    setSelectedOption(value)
  }

  useEffect(() => {
    getAllTodo(id)
  }, [id])

  useEffect(() => {
    getOneActivity(id)
  }, [id])

  return (
    <PageContainer>
      <HStack as="nav" justify="space-between" align="center" height="50px">
        <HStack alignItems="center">
          <RouterLink
            link="/"
            styles={{
              size: 'xs',
              ml: '-17px',
              display: 'flex',
              alignItems: 'center',
            }}
            hover={{ textDecor: 'underline', color: 'brand.primary' }}>
            <ChevronLeftIcon data-cy="todo-back-button" fontSize="5xl" />
          </RouterLink>
          <EditableText id={id} onChange={handleInputChange} />
        </HStack>
        <Stack direction="row" alignItems="center" spacing="16px">
          {todoItems?.length > 0 ? (
            <Menu isLazy>
              <MenuButton
                data-cy="todo-sort-button"
                as={IconButton}
                variant="outline"
                rounded="full"
                height="48px"
                aria-label="sort todos"
                icon={<UpDownIcon color="gray.500" />}
                sx={{ aspectRatio: '1/1' }}
              />
              <MenuList data-cy="sort-parent">
                <MenuOptionGroup
                  type="radio"
                  onChange={handleSelectChange}
                  value={selectedOption}>
                  {sortOptions.map((sortOption) => (
                    <MenuItemOption
                      data-cy="sort-selection"
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
          ) : null}
          <ModalTodo type="create" id={id} />
        </Stack>
      </HStack>
      <Box as="section" mt={[16, 14, 12]}>
        {sortedTodoItems?.length > 0 ? (
          <Stack spacing="16px">
            {todoItems.map((todo: any) => (
              <CardTodo
                key={todo.id}
                id={todo.id}
                is_active={todo.is_active}
                title={todo.title}
                priority={todo.priority}
              />
            ))}
          </Stack>
        ) : (
          <Illustration
            type="todo"
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
