export interface Todo {
  id: number
  title: string
  activity_group_id?: number
  is_active: number
  priority: string
  created_at?: string
  updated_at?: string
}

export interface ResponseTodo {
  data: Todo[]
}
