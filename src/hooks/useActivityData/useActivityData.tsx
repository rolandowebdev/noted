import axios from 'axios'
import { useState } from 'react'
import { Activity, ResponseActivity } from '../../models/activity'

const BASE_URL = import.meta.env.VITE_BASE_URL
const EMAIL = import.meta.env.VITE_EMAIL

export const useActivityData = () => {
  const [activities, setActivities] = useState<Activity[]>([])

  const createActivity = async (newActivity: Activity) => {
    const url = `${BASE_URL}/activity-groups?email=${EMAIL}`
    try {
      const response = await axios.post<Activity>(url, newActivity)
      setActivities((prevActivity) => [...prevActivity, response.data])
    } catch (error) {
      throw new Error('Failed to create activity')
    }
  }

  const getActivity = async () => {
    const url = `${BASE_URL}/activity-groups?email=${EMAIL}`
    try {
      const response = await axios.get<ResponseActivity>(url)
      setActivities(response.data.data)
    } catch (error) {
      throw new Error('Failed to fetch activity')
    }
  }

  const updateActivity = async (newActivity: Activity) => {
    const url = `${BASE_URL}/activity-groups/${newActivity.id}?email=${EMAIL}`
    try {
      const response = await axios.put<Activity>(url, newActivity)
      setActivities((prevActivity) =>
        prevActivity.map((activity) =>
          activity.id === response.data.id ? response.data : activity
        )
      )
    } catch (error) {
      throw new Error('Failed to update activity')
    }
  }

  const deleteActivity = async (id: number) => {
    const url = `${BASE_URL}/activity-groups/${id}?email=${EMAIL}`
    try {
      await axios.delete(url)
      setActivities((prevActivity) =>
        prevActivity.filter((activity) => activity.id !== id)
      )
    } catch (error) {
      throw new Error('Failed to delete activity')
    }
  }

  return {
    activities,
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity,
  }
}