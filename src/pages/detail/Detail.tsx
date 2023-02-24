import { Box, Image, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardTodo, MenuSort } from '../../components'
import { useActivityContext, useTodoContext } from '../../context'
import { sortData } from '../../utils/sortData'

const Detail = () => {
  const { activityId } = useParams<string>()
  const { todos, getTodos } = useTodoContext()
  const { getActivity } = useActivityContext()

  const [loading, setLoading] = useState(true)
  const [selectedOption, setSelectedOption] = useState<string>('latest')
  const sortedTodoItems = sortData(todos, selectedOption)

  useEffect(() => {
    Promise.all([getActivity(activityId), getTodos(activityId)]).then(() =>
      setLoading(false)
    )
  }, [activityId])

  if (loading) return <Box display="none" />

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
