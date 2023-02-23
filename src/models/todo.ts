export interface Todo {
  type?: string
  id?: any
  title?: any
  activity_group_id?: any
  is_active?: any
  priority?: string
}

export interface ResponseTodo {
  data: Todo[]
}
