import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, Heading, HStack } from '@chakra-ui/react'
import { lazy, Suspense, useEffect } from 'react'

import { useActivityContext } from '../../context'
import { PageContainer } from '../../layouts'

const CardActivity = lazy(() =>
  import('../../components').then((module) => ({
    default: module.CardActivity,
  }))
)

const Illustration = lazy(() =>
  import('../../components').then((module) => ({
    default: module.Illustration,
  }))
)

const Loader = lazy(() =>
  import('../../components').then((module) => ({
    default: module.Loader,
  }))
)

export const Dashboard = () => {
  const { activities, createActivity, getAllActivity } = useActivityContext()

  const handleCreateActivity = () => {
    createActivity()
  }

  useEffect(() => {
    getAllActivity()
  }, [])

  return (
    <PageContainer>
      <Box as="nav" role="navigation">
        <HStack justify="space-between" align="center" height="50px">
          <Heading
            data-cy="activity-title"
            as="h1"
            fontSize="3xl"
            fontWeight="bold">
            Activity
          </Heading>
          <Button
            data-cy="activity-add-button"
            type="button"
            paddingX="7"
            paddingY="6"
            bgColor="brand.primary"
            color="white"
            letterSpacing="wider"
            fontWeight="semibold"
            borderRadius="full"
            transition="background-color 150ms ease"
            leftIcon={<AddIcon />}
            _hover={{ bgColor: 'brand.lightPrimary' }}
            onClick={handleCreateActivity}>
            Tambah
          </Button>
        </HStack>
      </Box>
      <Suspense fallback={<Loader />}>
        <Box as="section" data-cy="activity-dashboard" mt={[16, 14, 12]}>
          {activities?.length < 1 ? (
            <Illustration
              type="activity"
              desc="Create your first activity"
              illustrationHuman="/images/human-activity.png"
              illustrationIcon="/images/activity.png"
              illustrationGround="/icons/ground.svg"
            />
          ) : (
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
              ]}
              gap={4}>
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
      </Suspense>
    </PageContainer>
  )
}
