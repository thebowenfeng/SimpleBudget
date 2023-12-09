import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Button } from '@chakra-ui/react'
import { getTheme } from '../themes/theme.ts'

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '200px' : '100px'};
  min-height: ${isMobile ? '200px' : '100px'};
  background-color: white;
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.19);
  clip-path: inset(-5px -5px -10px 0px);
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`

const RightContainer = styled.div`
  margin-left: auto;
`

export default function Bank() {
  return (
    <RootContainer>
      <Header>
        <h1>test</h1>
        <RightContainer>
          <Button
            backgroundColor={getTheme().dark.buttonTheme.backgroundColor}
            _hover={{bg: getTheme().dark.backgroundColor}}
            color={getTheme().dark.fontColor}
          >Create Account</Button>
        </RightContainer>
      </Header>
    </RootContainer>
  )
}
