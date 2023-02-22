import axios from 'axios'
import { activityUrl, EMAIL } from '../../constants/apiUrl'
import { Activity, ResponseActivity } from '../../models/activity'

export const useActivityData = () => {
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
      return response.data
    } catch (error) {
      throw new Error('Failed to create activity')
    }
  }

  const getActivities = async () => {
    try {
      const response = await axios.get<ResponseActivity>(activityUrl.GET_ALL)
      return response.data.data
    } catch (error) {
      throw new Error('Failed to fetch all activity')
    }
  }

  const getActivity = async (id: string) => {
    try {
      const response = await axios.get<Activity>(activityUrl.GET_ONE(id))
      return response.data
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
      return response.data
    } catch (error) {
      throw new Error('Failed to update activity')
    }
  }

  const deleteActivity = async (id: number) => {
    try {
      await axios.delete(activityUrl.DELETE(id))
    } catch (error) {
      throw new Error('Failed to delete activity')
    }
  }

  return {
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity,
  }
}
