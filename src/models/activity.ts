export interface Activity {
  id: string
  title?: string | undefined
  created_at?: string
  updated_at?: string
  email?: string
  todo_items?: any[]
}

export interface ResponseActivity {
  data: Activity[]
}
