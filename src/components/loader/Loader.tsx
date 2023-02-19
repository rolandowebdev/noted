import { Container } from '@chakra-ui/react'
import { LineWave } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh">
      <LineWave
        height="150"
        width="150"
        color="#16ABF8"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </Container>
  )
}
