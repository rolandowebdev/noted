import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useTodo } from '@/hooks'
import { Todo } from '@/models'

interface TodoContextType {
  todos: Todo[]
  createTodo: (newTodo: Todo) => Promise<void>
  getTodos: (activity_group_id: any) => Promise<void>
  updateTodo: (updateTodo: Todo) => Promise<void>
  deleteTodo: (id: number) => Promise<void>
}

interface TodoProviderProps {
  children: ReactNode
}

const TodoContext = createContext<TodoContextType>({
  todos: [],
  createTodo: async () => {},
  getTodos: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
})

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const { todos, createTodo, getTodos, updateTodo, deleteTodo } = useTodo()

  const values = useMemo(
    () => ({
      todos,
      createTodo,
      getTodos,
      updateTodo,
      deleteTodo,
    }),
    [todos, createTodo, getTodos, updateTodo, deleteTodo]
  )

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
