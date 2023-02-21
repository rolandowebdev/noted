import axios from 'axios'
import { useState } from 'react'
import { todoUrl } from '../../constants/apiUrl'
import { ResponseTodo, Todo } from '../../models/todo'

export const useTodoData = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  const createTodo = async (newTodo: Todo) => {
    try {
      const response = await axios.post<Todo>(todoUrl.POST, newTodo)
      setTodoItems((prevTodo) =>
        [...prevTodo, response.data].sort((a, b) => a.id - b.id)
      )
    } catch (error) {
      throw new Error('Failed to create todo')
    }
  }

  const getAllTodo = async (id: any) => {
    try {
      const response = await axios.get<ResponseTodo>(todoUrl.GET(id))
      setTodoItems(response.data.data)
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
      setTodoItems((prevTodo) =>
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
      setTodoItems((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    } catch (error) {
      throw new Error('Failed to delete todo')
    }
  }

  return {
    todoItems,
    createTodo,
    getAllTodo,
    updateTodo,
    deleteTodo,
  }
}
