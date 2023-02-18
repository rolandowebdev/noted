import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useActivityData } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  createActivity: (newActivity: Activity) => Promise<void>
  getActivity: () => Promise<void>
  updateActivity: (newActivity: Activity) => Promise<void>
  deleteActivity: (id: number) => Promise<void>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  createActivity: async () => {},
  getActivity: async () => {},
  updateActivity: async () => {},
  deleteActivity: async () => {},
})

export const useActivityContext = () => useContext(ActivityContext)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const {
    activities,
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity,
  } = useActivityData()

  useEffect(() => {
    getActivity()
  }, [])

  const values = useMemo(
    () => ({
      activities,
      createActivity,
      getActivity,
      updateActivity,
      deleteActivity,
    }),
    [activities, createActivity, getActivity, updateActivity, deleteActivity]
  )
  return (
    <ActivityContext.Provider value={values}>
      {children}
    </ActivityContext.Provider>
  )
}
