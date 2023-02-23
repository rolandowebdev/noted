import { Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardTodo, Illustration, MenuSort } from '../../components'

import { useActivityContext } from '../../context'
import { useTodoContext } from '../../context/TodoProvider/TodoProvider'
import { sortData } from '../../utils/sortData'

export const Detail = () => {
  const { id } = useParams<string>()
  const { todoItems, getAllTodo } = useTodoContext()
  const { setActivity, getActivity } = useActivityContext()

  const [selectedOption, setSelectedOption] = useState<string>('latest')
  const sortedTodoItems = sortData(todoItems, selectedOption)

  useEffect(() => {
    getActivity(id).then((activity: any) => setActivity(activity))
  }, [id])

  useEffect(() => {
    getAllTodo(id)
  }, [id])

  return (
    <>
      <MenuSort
        sortedTodoItems={sortedTodoItems}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Stack
        as="section"
        spacing={sortedTodoItems?.length > 1 ? 4 : 'initial'}
        mt={[16, 14, 12]}>
        {sortedTodoItems?.length < 1 ? (
          <Illustration
            type="todo"
            illustrationHuman="/images/human-todo.png"
            illustrationIcon="/images/todo.png"
            illustrationGround="/icons/ground.svg"
          />
        ) : (
          <>
            {todoItems.map((todo: any) => (
              <CardTodo
                key={todo.id}
                id={todo.id}
                is_active={todo.is_active}
                title={todo.title}
                priority={todo.priority}
              />
            ))}
          </>
        )}
      </Stack>
    </>
  )
}
