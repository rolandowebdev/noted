import axios from 'axios'
import { useState } from 'react'
import { BASE_URL, EMAIL } from '../../constants/apiUrl'
import { ResponseTodo, Todo } from '../../models/todo'

export const useTodoData = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  const createTodo = async (newTodo: Todo) => {
    const url = `${BASE_URL}/todo-items`
    try {
      const response = await axios.post<Todo>(url, newTodo)
      setTodoItems((prevTodo) =>
        [...prevTodo, response.data].sort((a, b) => a.id - b.id)
      )
    } catch (error) {
      throw new Error('Failed to create todo')
    }
  }

  const getAllTodo = async (id: any) => {
    const url = `${BASE_URL}/todo-items?activity_group_id=${id}`
    try {
      const response = await axios.get<ResponseTodo>(url)
      setTodoItems(response.data.data)
    } catch (error) {
      throw new Error('Failed to fetch todoItems')
    }
  }

  const updateTodo = async (updateTodo: Todo) => {
    const url = `${BASE_URL}/todo-items/${updateTodo.id}`
    try {
      const response = await axios.patch<Todo>(url, updateTodo)
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
    const url = `${BASE_URL}/todo-items/${id}?email=${EMAIL}`
    try {
      await axios.delete(url)
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
