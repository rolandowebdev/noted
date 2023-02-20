import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useTodoData } from '../../hooks/useTodoData/useTodoData'
import { Todo } from '../../models/todo'

interface TodoContextType {
  todoItems: Todo[]
  createTodo: (newTodo: Todo) => Promise<void>
  getAllTodo: (id: any) => Promise<void>
  updateTodo: (updateTodo: Todo) => Promise<void>
  deleteTodo: (id: number) => Promise<void>
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<TodoContextType>({
  todoItems: [],
  createTodo: async () => {},
  getAllTodo: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
})

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const { todoItems, createTodo, getAllTodo, updateTodo, deleteTodo } =
    useTodoData()

  const values = useMemo(
    () => ({
      todoItems,
      createTodo,
      getAllTodo,
      updateTodo,
      deleteTodo,
    }),
    [todoItems, createTodo, getAllTodo, updateTodo, deleteTodo]
  )

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
