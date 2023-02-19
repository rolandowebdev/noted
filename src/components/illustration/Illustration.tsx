import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useActivityContext } from '../../context'
import { useCustomToast } from '../../hooks'

interface IllustrationProps {
  type?: string
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
  const showToast = useCustomToast()

  const handleCreateActivity = () => {
    if (type === 'activity') {
      createActivity()
      showToast(`Successfully created activity`, 'success')
    }
  }
  return (
    <Flex
      as="button"
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
        <Text as="p" mt={6} fontSize="xl" fontWeight="semibold" marginRight={8}>
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
