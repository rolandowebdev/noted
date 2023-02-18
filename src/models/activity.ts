export interface Activity {
  id?: number
  title?: string
  created_at?: string
  updated_at?: string
  email?: string
}

export interface ResponseActivity {
  data: Activity[]
}
