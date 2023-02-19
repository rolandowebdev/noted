import { Box, Grid, Heading, HStack } from '@chakra-ui/react'
import { useEffect } from 'react'

import { CardActivity, Illustration } from '../../components'
import { ModalActivity } from '../../components/modal/ModalActivity'
import { useActivityData } from '../../hooks'
import { PageContainer } from '../../layouts'

export const Dashboard = () => {
  const { getActivity, activities } = useActivityData()

  useEffect(() => {
    getActivity()
  }, [])

  return (
    <PageContainer>
      <Box as="nav" role="navigation">
        <HStack justify="space-between" align="center">
          <Heading as="h1" size="lg" fontWeight="bold">
            Activity
          </Heading>
          <ModalActivity type="create" />
        </HStack>
      </Box>
      <Box mt={[16, 14, 12]}>
        {activities.length === 0 ? (
          <Illustration
            desc="Create your first activity"
            illustrationHuman="/images/human-activity.png"
            illustrationIcon="/images/activity.png"
            illustrationGround="/icons/ground-one.svg"
          />
        ) : (
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={6}>
            {activities.map((activity) => (
              <CardActivity
                key={activity.id}
                id={activity.id}
                title={activity.title}
                created_at={activity.created_at}
              />
            ))}
          </Grid>
        )}
      </Box>
    </PageContainer>
  )
}
