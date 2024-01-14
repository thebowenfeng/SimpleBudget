import { styled } from 'styled-components'
import { Heading } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { useBankState } from '../stores/bankStore.ts'
import Loadable from './Loadable.tsx'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export default function BankInfo() {
  const state = useBankState()

  return (
    <Container>
      <Loadable isLoading={state.loading}>
        <Heading fontSize={isMobile ? "3rem" : undefined}>{state.state == null ? "Link an account" : state.state.name}</Heading>
        <h1 style={{fontSize: isMobile ? "2.2rem" : undefined}}>Balance: ${state.state == null ? "0" : state.state.balance}</h1>
      </Loadable>
    </Container>
  )
}
