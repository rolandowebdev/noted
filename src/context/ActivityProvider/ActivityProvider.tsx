import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useActivityData } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  activity: any
  setActivity: any
  createActivity: () => Promise<void>
  getAllActivity: () => Promise<void>
  getOneActivity: (id: any) => Promise<void | Activity>
  updateActivity: (newActivity: Activity) => Promise<void>
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
  getAllActivity: async () => {},
  getOneActivity: async () => {},
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
    getAllActivity,
    getOneActivity,
    updateActivity,
    deleteActivity,
  } = useActivityData()

  useEffect(() => {
    getAllActivity()
  }, [])

  const values = useMemo(
    () => ({
      activities,
      activity,
      setActivity,
      createActivity,
      getAllActivity,
      getOneActivity,
      updateActivity,
      deleteActivity,
    }),
    [
      activities,
      activity,
      setActivity,
      createActivity,
      getAllActivity,
      getOneActivity,
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
