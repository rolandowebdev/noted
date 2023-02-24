import { Image, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardTodo, MenuSort } from '../../components'

import { useActivityContext, useTodoContext } from '../../context'

import { sortData } from '../../utils/sortData'

const Detail = () => {
  const { id } = useParams<string>()
  const { todos, getTodos } = useTodoContext()
  const { setActivity, getActivity } = useActivityContext()

  const [selectedOption, setSelectedOption] = useState<string>('latest')
  const sortedTodoItems = sortData(todos, selectedOption)

  useEffect(() => {
    getActivity(id).then((activity: any) => setActivity(activity))
  }, [id])

  useEffect(() => {
    getTodos(id)
  }, [id])

  return (
    <>
      <MenuSort
        sortedTodoItems={sortedTodoItems}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {sortedTodoItems?.length < 1 && (
        <Image
          data-cy="todo-empty-state"
          loading="lazy"
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
