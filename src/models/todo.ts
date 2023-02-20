export interface Todo {
  id: any
  title?: string
  activity_group_id?: string
  is_active?: number
  priority?: string
  created_at?: string
  updated_at?: string
}

export interface ResponseTodo {
  data: Todo[]
}
