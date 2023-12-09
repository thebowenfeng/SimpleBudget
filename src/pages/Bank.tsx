import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Button } from '@chakra-ui/react'
import { getTheme } from '../themes/theme.ts'
import BankInfo from '../components/BankInfo.tsx'
import { ReactNode } from 'react'

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
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`

export default function Bank() {
  const ThemedButton = ({ children }: {children: ReactNode}) => {
    return (
      <Button
        backgroundColor={getTheme().dark.buttonTheme.backgroundColor}
        _hover={{bg: getTheme().dark.backgroundColor}}
        color={getTheme().dark.fontColor}
      >{children}</Button>
    )
  }

  return (
    <RootContainer>
      <Header>
        <BankInfo />
        <RightContainer>
          <ThemedButton>Edit Account</ThemedButton>
          <ThemedButton>Create Account</ThemedButton>
        </RightContainer>
      </Header>
    </RootContainer>
  )
}
