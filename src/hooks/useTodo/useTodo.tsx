import axios from 'axios'
import { useState } from 'react'
import { todoUrl } from '../../constants/apiUrl'
import { ResponseTodo, Todo } from '../../models/todo'

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = async (newTodo: Todo) => {
    try {
      const response = await axios.post<Todo>(todoUrl.POST, newTodo)
      setTodos((prevTodo) => [...prevTodo, response.data])
    } catch (error) {
      throw new Error('Failed to create todo')
    }
  }

  const getTodos = async (id: any) => {
    try {
      const response = await axios.get<ResponseTodo>(todoUrl.GET(id))
      setTodos(response.data.data)
    } catch (error) {
      throw new Error('Failed to fetch todoItems')
    }
  }

  const updateTodo = async (updateTodo: Todo) => {
    try {
      const response = await axios.patch<Todo>(
        todoUrl.UPDATE(updateTodo),
        updateTodo
      )
      setTodos((prevTodo) =>
        prevTodo.map((todo) =>
          todo.id === response.data.id ? response.data : todo
        )
      )
    } catch (error) {
      throw new Error('Failed to update fetch todo')
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(todoUrl.DELETE(id))
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    } catch (error) {
      throw new Error('Failed to delete todo')
    }
  }

  return {
    todos,
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
  }
}
