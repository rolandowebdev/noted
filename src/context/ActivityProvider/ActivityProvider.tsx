import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useActivityData } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  activity: object | any
  createActivity: () => Promise<void>
  getAllActivity: () => Promise<void>
  getOneActivity: (id: string | any) => Promise<void>
  deleteActivity: (id: number) => Promise<void>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  activity: {},
  createActivity: async () => {},
  getAllActivity: async () => {},
  getOneActivity: async () => {},
  deleteActivity: async () => {},
})

export const useActivityContext = () => useContext(ActivityContext)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const {
    activities,
    activity,
    createActivity,
    getAllActivity,
    getOneActivity,
    deleteActivity,
  } = useActivityData()

  useEffect(() => {
    getAllActivity()
  }, [])

  const values = useMemo(
    () => ({
      activities,
      activity,
      createActivity,
      getAllActivity,
      getOneActivity,
      deleteActivity,
    }),
    [
      activities,
      activity,
      createActivity,
      getAllActivity,
      getOneActivity,
      deleteActivity,
    ]
  )
  return (
    <ActivityContext.Provider value={values}>
      {children}
    </ActivityContext.Provider>
  )
}
