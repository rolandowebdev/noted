import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { CardActivity, Illustration } from '../../components'
import { useActivityContext } from '../../context'

export const Dashboard = () => {
  const { activities, setActivities, getActivities } = useActivityContext()

  useEffect(() => {
    getActivities().then((activity) => setActivities(activity))
  }, [])

  if (activities.length < 1) {
    return (
      <Illustration
        type="activity"
        illustrationHuman="/images/human-activity.png"
        illustrationIcon="/images/activity.png"
        illustrationGround="/icons/ground.svg"
      />
    )
  }

  return (
    <Box
      as="section"
      display={activities?.length > 0 ? 'grid' : 'initial'}
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
    </Box>
  )
}
