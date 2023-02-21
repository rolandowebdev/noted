import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, Heading, HStack } from '@chakra-ui/react'
import { useEffect } from 'react'

import { CardActivity, Illustration } from '../../components'
import { useActivityContext } from '../../context'
import { PageContainer } from '../../layouts'

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
      <Box as="section" mt={[16, 14, 12]}>
        {activities?.length > 0 ? (
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
        ) : (
          <Illustration
            type="activity"
            desc="Create your first activity"
            illustrationHuman="/images/human-activity.png"
            illustrationIcon="/images/activity.png"
            illustrationGround="/icons/ground.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
