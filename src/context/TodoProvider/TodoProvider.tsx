import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useTodoData } from '../../hooks/useTodoData/useTodoData'
import { Todo } from '../../models/todo'

interface TodoContextType {
  todoItems: Todo[]
  getAllTodo: (id: any) => Promise<void>
  deleteTodo: (id: number) => Promise<void>
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<TodoContextType>({
  todoItems: [],
  getAllTodo: async () => {},
  deleteTodo: async () => {},
})

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const { todoItems, getAllTodo, deleteTodo } = useTodoData()

  const values = useMemo(
    () => ({ todoItems, getAllTodo, deleteTodo }),
    [todoItems, getAllTodo, deleteTodo]
  )

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
