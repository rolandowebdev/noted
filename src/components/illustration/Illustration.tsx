import { Box, Flex, Image } from '@chakra-ui/react'
import { useActivityContext } from '../../context'

interface IllustrationProps {
  type: string
  illustrationHuman: string
  illustrationIcon: string
  illustrationGround: string
}

export const Illustration = ({
  type,
  illustrationHuman,
  illustrationIcon,
  illustrationGround,
}: IllustrationProps) => {
  const { setActivities, createActivity } = useActivityContext()

  const handleCreateActivity = () => {
    if (type === 'activity') {
      createActivity().then((activity) =>
        setActivities((prevActivity: any) =>
          [...prevActivity, activity].sort((a: any, b: any) => b.id - a.id)
        )
      )
    }
  }

  return (
    <Flex
      data-cy={
        type === 'activity' ? 'activity-empty-state' : 'todo-empty-state'
      }
      as={type === 'activity' ? 'button' : 'div'}
      pos="relative"
      alignItems={['center', 'center', 'flex-start']}
      justifyContent="center"
      maxW="container.sm"
      mx="auto"
      gap={12}
      onClick={handleCreateActivity}>
      <Box display={['none', 'none', 'block']}>
        <Image src={illustrationHuman} alt="activity illustration" />
      </Box>
      <Box>
        <Image src={illustrationIcon} alt="activity add illustration" />
      </Box>
      <Box
        pos="absolute"
        display={['none', 'none', 'block']}
        bottom="-1px"
        right={20}>
        <Image src={illustrationGround} alt="ground illustration" />
      </Box>
    </Flex>
  )
}
