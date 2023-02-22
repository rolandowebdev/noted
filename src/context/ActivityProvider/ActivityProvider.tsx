import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useActivityData } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  activity: any
  setActivity: any
  createActivity: () => Promise<void>
  getActivities: () => Promise<void>
  getActivity: (id: any) => Promise<void | Activity>
  updateActivity: (updateActivity: Activity) => Promise<void>
  deleteActivity: (id: number) => Promise<void>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  activity: {},
  setActivity: {},
  createActivity: async () => {},
  getActivities: async () => {},
  getActivity: async () => {},
  updateActivity: async () => {},
  deleteActivity: async () => {},
})

export const useActivityContext = () => useContext(ActivityContext)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const {
    activities,
    activity,
    setActivity,
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity,
  } = useActivityData()

  useEffect(() => {
    getActivities()
  }, [])

  const values = useMemo(
    () => ({
      activities,
      activity,
      setActivity,
      createActivity,
      getActivities,
      getActivity,
      updateActivity,
      deleteActivity,
    }),
    [
      activities,
      activity,
      setActivity,
      createActivity,
      getActivities,
      getActivity,
      updateActivity,
      deleteActivity,
    ]
  )
  return (
    <ActivityContext.Provider value={values}>
      {children}
    </ActivityContext.Provider>
  )
}
