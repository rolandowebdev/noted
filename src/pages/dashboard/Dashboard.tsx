import { Grid, Image } from '@chakra-ui/react'
import { useEffect } from 'react'
import { CardActivity } from '../../components'
import { useActivityContext } from '../../context'

const Dashboard = () => {
  const { activities, getActivities, createActivity } = useActivityContext()

  const handleCreateActivity = () => {
    createActivity()
  }

  useEffect(() => {
    getActivities()
  }, [])

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
        src="/activity.svg"
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
      {activities.map((activity) => (
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

export default Dashboard
