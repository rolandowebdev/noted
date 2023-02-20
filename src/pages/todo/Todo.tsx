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
import { useEffect } from 'react'
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

export const Todo = () => {
  const { id } = useParams()
  const { setActivity, getOneActivity } = useActivityContext()
  const { todoItems, getAllTodo } = useTodoContext()

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
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
            <ChevronLeftIcon fontSize="5xl" />
          </RouterLink>
          <EditableText id={id} onChange={handleInputChange} />
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
      <Box as="section" mt={[16, 14, 12]}>
        {todoItems?.length > 0 ? (
          <Stack spacing="16px">
            {todoItems.map((todo: any) => (
              <CardTodo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                comment={todo.priority}
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
