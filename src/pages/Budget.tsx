import styled from 'styled-components'
import MonthPicker from '../components/MonthPicker'
import { isMobile } from 'react-device-detect'
import { BudgetSection } from '../components/Spreadsheet'

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
`

const HeaderContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Budget() {
  return (
    <RootContainer>
      <Header>
        <HeaderContainer>
          <MonthPicker />
        </HeaderContainer>
        <HeaderContainer>
          <h1>Money</h1>
        </HeaderContainer>
      </Header>
      <Body>
        <BudgetSection />
      </Body>
    </RootContainer>
  )
}