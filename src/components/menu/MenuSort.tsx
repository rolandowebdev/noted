import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'
import {
  Button,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { sortOptions } from '../../constants/sortOptions'
import { useActivityContext } from '../../context'
import { EditableText } from '../controls/EditableText'
import { ModalTodo } from '../modal/ModalTodo'

interface MenuSortProps {
  sortedTodoItems: any
  selectedOption: any
  setSelectedOption: any
}

export const MenuSort = ({
  sortedTodoItems,
  selectedOption,
  setSelectedOption,
}: MenuSortProps) => {
  const { activityId } = useParams()
  const { setActivity } = useActivityContext()

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  return (
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
        <EditableText id={activityId} onChange={handleInputChange} />
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
        <ModalTodo type="create" id={activityId} />
      </Stack>
    </HStack>
  )
}
