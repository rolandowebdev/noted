import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useActivity } from '@/hooks'
import { Activity } from '@/models'

interface ActivityContextType {
  activities: Activity[]
  activity: any
  setActivity: any
  createActivity: () => Promise<any>
  getActivities: () => Promise<any>
  getActivity: (id: any) => Promise<any>
  updateActivity: (updateActivity: Activity) => Promise<any>
  deleteActivity: (id: number) => Promise<any>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  activity: {},
  setActivity: () => {},
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
  } = useActivity()

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
