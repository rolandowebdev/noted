export interface Activity {
  id: number | any
  title: string
  created_at?: string
  updated_at?: string
  email?: string
}

export interface ResponseActivity {
  data: Activity[]
}
