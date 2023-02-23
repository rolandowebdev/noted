import { ChevronLeftIcon, UpDownIcon } from '@chakra-ui/icons'
import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { sortOptions } from '../../constants/sortOptions'
import { useActivityContext } from '../../context'
import { EditableText } from '../controls/EditableText'
import { RouterLink } from '../link/RouterLink'
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
  const { id } = useParams()
  const { setActivity } = useActivityContext()

  const handleInputChange = (newValue: string) => {
    setActivity({ title: newValue })
  }

  return (
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
        <ModalTodo type="create" id={id} />
      </Stack>
    </HStack>
  )
}
