import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'
import { useActivity } from '../../hooks'
import { Activity } from '../../models/activity'

interface ActivityContextType {
  activities: Activity[]
  setActivities: any
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
  setActivities: [],
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
  const [activities, setActivities] = useState<Activity[]>([])
  const [activity, setActivity] = useState<Activity | null>(null)
  const {
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity,
  } = useActivity()

  useEffect(() => {
    getActivities().then((activity) => setActivities(activity))
  }, [])

  const values = useMemo(
    () => ({
      activities,
      setActivities,
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
      setActivities,
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
