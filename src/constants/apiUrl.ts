import { Activity, Todo } from '@/models'

const BASE_URL = import.meta.env.VITE_BASE_URL
export const EMAIL = import.meta.env.VITE_EMAIL

export const activityUrl = {
  POST: `${BASE_URL}/activity-groups?email=${EMAIL}`,
  GET_ALL: `${BASE_URL}/activity-groups?email=${EMAIL}`,
  GET_ONE: (activity_group_id: string) =>
    `${BASE_URL}/activity-groups/${activity_group_id}?email=${EMAIL}`,
  UPDATE: (updateActivity: Activity) =>
    `${BASE_URL}/activity-groups/${updateActivity.id}?email=${EMAIL}`,
  DELETE: (id: string) => `${BASE_URL}/activity-groups/${id}?email=${EMAIL}`,
}

export const todoUrl = {
  POST: `${BASE_URL}/todo-items`,
  GET: (id: string) => `${BASE_URL}/todo-items?activity_group_id=${id}`,
  UPDATE: (updateTodo: Todo) => `${BASE_URL}/todo-items/${updateTodo.id}`,
  DELETE: (id: number) => `${BASE_URL}/todo-items/${id}?email=${EMAIL}`,
}
