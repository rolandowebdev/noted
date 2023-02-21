import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useActivityContext } from '../../context'

interface IllustrationProps {
  type: string
  desc: string
  illustrationHuman: string
  illustrationIcon: string
  illustrationGround: string
}

export const Illustration = ({
  type,
  desc,
  illustrationHuman,
  illustrationIcon,
  illustrationGround,
}: IllustrationProps) => {
  const { createActivity } = useActivityContext()

  const handleCreateActivity = () => {
    if (type === 'activity') {
      createActivity()
    }
  }

  return (
    <Flex
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
        <Text
          as="p"
          textAlign="center"
          mt={6}
          fontSize="xl"
          fontWeight="semibold"
          marginRight={type === 'activity' ? 8 : 12}>
          {desc}
        </Text>
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
