import { Box, Button, Grid, Heading, HStack } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { CardActivity, Illustration } from '../../components'
import { PageContainer } from '../../layouts'

const activities = [
  {
    id: 1,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 2,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 3,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 4,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 5,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 6,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 7,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
  {
    id: 8,
    title: 'Daftar Belanja Bulanan',
    dateText: '29 Maret 2023',
    dateTime: '29-03-2023',
  },
]

export const Dashboard = () => {
  const card = true
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
            _hover={{ bgColor: 'brand.lightPrimary' }}>
            Tambah
          </Button>
        </HStack>
      </Box>
      <Box mt={[16, 14, 12]}>
        {card ? (
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
                title={activity.title}
                dateTime={activity.dateTime}
                dateText={activity.dateText}
              />
            ))}
          </Grid>
        ) : (
          <Illustration
            desc="Create your first activity"
            illustrationHuman="/images/human-activity.png"
            illustrationIcon="/images/activity.png"
            illustrationGround="/icons/ground-one.svg"
          />
        )}
      </Box>
    </PageContainer>
  )
}
