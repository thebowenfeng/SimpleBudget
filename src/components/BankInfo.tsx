import { styled } from 'styled-components'
import { Heading } from '@chakra-ui/react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export default function BankInfo() {
  return (
    <Container>
      <Heading>Bank account | $5</Heading>
      <h1>Balance: $5</h1>
    </Container>
  )
}
