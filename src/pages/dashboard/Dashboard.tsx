import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, Heading, HStack } from '@chakra-ui/react'

import { CardActivity, Illustration } from '../../components'
import { useActivityContext } from '../../context'
import { useCustomToast } from '../../hooks'
import { PageContainer } from '../../layouts'

export const Dashboard = () => {
  const { activities, createActivity } = useActivityContext()
  const showToast = useCustomToast()

  const handleCreateActivity = () => {
    createActivity()
    showToast(`Successfully created activity`, 'success')
  }
  return (
    <PageContainer>
      <Box as="nav" role="navigation">
        <HStack justify="space-between" align="center">
          <Heading as="h1" size="lg" fontWeight="bold">
            Activity
          </Heading>
          <Button
            type="button"
            paddingX="7"
            paddingY="6"
            bgColor="brand.primary"
            color="white"
            letterSpacing="wider"
            fontWeight="medium"
            borderRadius="full"
            transition="background-color 150ms ease"
            leftIcon={<AddIcon />}
            _hover={{ bgColor: 'brand.lightPrimary' }}
            onClick={handleCreateActivity}>
            Add Activity
          </Button>
        </HStack>
      </Box>
      <Box mt={[16, 14, 12]}>
        {activities.length > 0 ? (
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
