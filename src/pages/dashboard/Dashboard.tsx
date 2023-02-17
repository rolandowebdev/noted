import { Box, Button, Grid, HStack, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { CardActivity, Illustration } from '../../components'

const dataExamples = [
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
    <Box as="nav" role="navigation" marginBlock={8}>
      <HStack justify="space-between" align="center">
        <Text as="h1" fontSize="3xl" fontWeight="bold">
          Activity
        </Text>
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
            {dataExamples.map((dataExample) => (
              <CardActivity
                key={dataExample.id}
                title={dataExample.title}
                dateTime={dataExample.dateTime}
                dateText={dataExample.dateText}
              />
            ))}
          </Grid>
        ) : (
          <Illustration
            desc="Buat activity pertamamu"
            illustrationHuman="/images/human-activity.png"
            illustrationIcon="/images/activity.png"
            illustrationGround="/icons/ground-two.svg"
          />
        )}
      </Box>
    </Box>
  )
}
