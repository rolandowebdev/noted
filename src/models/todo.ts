export interface Todo {
  type?: string
  id?: any
  title?: string
  activity_group_id?: any
  is_active?: number
  priority?: string
}

export interface ResponseTodo {
  data: Todo[]
}
