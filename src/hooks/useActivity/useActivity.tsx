import axios from 'axios'
import { useState } from 'react'
import { activityUrl, EMAIL } from '@/constants'
import { Activity, ResponseActivity } from '@/models'

export const useActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [activity, setActivity] = useState<Activity>()
  const defaultActivity = {
    title: 'New Activity',
    email: EMAIL,
  }

  const createActivity = async () => {
    try {
      const response = await axios.post<Activity>(
        activityUrl.POST,
        defaultActivity
      )
      setActivities((prevActivity) =>
        [...prevActivity, response.data].sort((a: any, b: any) => b.id - a.id)
      )
    } catch (error) {
      throw new Error('Failed to create activity')
    }
  }

  const getActivities = async () => {
    try {
      const response = await axios.get<ResponseActivity>(activityUrl.GET_ALL)
      setActivities(response.data.data)
    } catch (error) {
      throw new Error('Failed to fetch all activity')
    }
  }

  const getActivity = async (activity_group_id: string) => {
    try {
      const response = await axios.get<Activity>(
        activityUrl.GET_ONE(activity_group_id)
      )
      setActivity(response.data)
    } catch (error) {
      throw new Error('Failed to fetch one activity')
    }
  }

  const updateActivity = async (updateActivity: Activity) => {
    try {
      const response = await axios.patch<Activity>(
        activityUrl.UPDATE(updateActivity),
        updateActivity
      )
      setActivities((prevActivity) =>
        prevActivity.map((activity) =>
          activity.id === response.data.id ? response.data : activity
        )
      )
    } catch (error) {
      throw new Error('Failed to update activity')
    }
  }

  const deleteActivity = async (id: string) => {
    try {
      await axios.delete(activityUrl.DELETE(id))
      setActivities((prevActivity) =>
        prevActivity.filter((activity) => activity.id !== id)
      )
    } catch (error) {
      throw new Error('Failed to delete activity')
    }
  }

  return {
    activities,
    activity,
    setActivity,
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity,
  }
}
