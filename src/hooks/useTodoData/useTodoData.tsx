import axios from 'axios'
import { useState } from 'react'
import { BASE_URL, EMAIL } from '../../constants/apiUrl'
import { ResponseTodo, Todo } from '../../models/todo'

export const useTodoData = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  const getAllTodo = async (id: any) => {
    const url = `${BASE_URL}/todo-items?activity_group_id=${id}`
    try {
      const response = await axios.get<ResponseTodo>(url)
      setTodoItems(response.data.data)
    } catch (error) {
      throw new Error('Failed to fetch all activity')
    }
  }

  const deleteTodo = async (id: number) => {
    const url = `${BASE_URL}/todo-items/${id}?email=${EMAIL}`
    try {
      await axios.delete(url)
      setTodoItems((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    } catch (error) {
      throw new Error('Failed to delete activity')
    }
  }

  return { todoItems, getAllTodo, deleteTodo }
}
