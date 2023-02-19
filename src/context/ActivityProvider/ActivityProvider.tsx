import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useActivityData } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  createActivity: () => Promise<void>
  getActivity: () => Promise<void>
  deleteActivity: (id: number) => Promise<void>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  createActivity: async () => {},
  getActivity: async () => {},
  deleteActivity: async () => {},
})

export const useActivityContext = () => useContext(ActivityContext)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const { activities, createActivity, getActivity, deleteActivity } =
    useActivityData()

  useEffect(() => {
    getActivity()
  }, [])

  const values = useMemo(
    () => ({ activities, createActivity, getActivity, deleteActivity }),
    [activities, createActivity, getActivity, deleteActivity]
  )
  return (
    <ActivityContext.Provider value={values}>
      {children}
    </ActivityContext.Provider>
  )
}
