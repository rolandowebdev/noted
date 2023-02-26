import { Box, Grid, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CardActivity } from '@/components'
import { useActivityContext } from '@/context'
import { useCustomToast } from '@/hooks'
import { Activity } from '@/models'

export const Dashboard = () => {
  const showToast = useCustomToast()
  const [loading, setLoading] = useState(true)
  const { activities, getActivities, createActivity } = useActivityContext()

  const handleCreateActivity = () => {
    createActivity().then(() =>
      showToast('Activity berhasil dibuat', 'success')
    )
  }

  useEffect(() => {
    getActivities().then(() => setLoading(false))
  }, [])

  if (loading) return <Box display="none" />

  if (activities?.length < 1) {
    return (
      <Image
        data-cy="activity-empty-state"
        loading="eager"
        mt={12}
        boxSize="sm"
        objectFit="contain"
        mx="auto"
        cursor="pointer"
        src="/assets/activity.svg"
        alt="activity illustration"
        onClick={handleCreateActivity}
      />
    )
  }

  return (
    <Grid
      as="section"
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={4}
      mt={[16, 14, 12]}>
      {activities.map((activity: Activity) => (
        <CardActivity
          key={activity.id}
          id={activity.id}
          title={activity.title}
          created_at={activity.created_at}
        />
      ))}
    </Grid>
  )
}
