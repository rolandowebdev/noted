export interface Activity {
  id: any
  title: string
  created_at?: string
  updated_at?: string
  email?: string
  todo_items?: any[]
}

export interface ResponseActivity {
  data: Activity[]
}
