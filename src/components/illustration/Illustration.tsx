import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface IllustrationProps {
  desc: string
  illustrationHuman: string
  illustrationIcon: string
  illustrationGround: string
}

export const Illustration = ({
  desc,
  illustrationHuman,
  illustrationIcon,
  illustrationGround,
}: IllustrationProps) => {
  return (
    <Flex
      pos="relative"
      alignItems={['center', 'center', 'flex-start']}
      justifyContent="center"
      maxW="container.sm"
      mx="auto"
      gap={12}>
      <Box display={['none', 'none', 'block']}>
        <Image src={illustrationHuman} alt="activity illustration" />
      </Box>
      <Box>
        <Image src={illustrationIcon} alt="activity add illustration" />
        <Text as="p" mt={6} fontSize="xl" fontWeight="semibold">
          {desc}
        </Text>
      </Box>
      <Box
        pos="absolute"
        display={['none', 'none', 'block']}
        bottom="-2px"
        right={20}>
        <Image src={illustrationGround} alt="ground illustration" />
      </Box>
    </Flex>
  )
}
