import styled from 'styled-components'
import { CircularProgress } from '@chakra-ui/react'

const RootWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function GenericLoading () {
  return (
    <RootWrapper>
      <CircularProgress isIndeterminate size={'100px'}/>
    </RootWrapper>
  )
}