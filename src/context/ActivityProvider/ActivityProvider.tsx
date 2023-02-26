import {
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
  useMemo,
  createContext,
} from 'react'
import { useActivity } from '@/hooks'
import { Activity } from '@/models'

interface ActivityContextType {
  activities: Activity[]
  activity: Activity | undefined
  setActivity: Dispatch<SetStateAction<Activity | undefined>>
  createActivity: () => Promise<void>
  getActivities: () => Promise<void>
  getActivity: (activity_group_id: any) => Promise<void>
  updateActivity: (updateActivity: Activity) => Promise<void>
  deleteActivity: (id: string) => Promise<void>
}

interface ActivityProviderProps {
  children: ReactNode
}

const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  activity: { id: '' },
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
