import styled from 'styled-components'
import MonthPicker from '../components/MonthPicker.tsx'
import { isMobile } from 'react-device-detect'
import SpreadsheetView from '../components/Spreadsheet/SpreadsheetView.tsx'
import { useBudgetActions } from '../stores/budgetStore.ts'
import { useContext, useEffect } from 'react'
import { getFirestore } from 'firebase/firestore'
import { FirebaseContext } from '../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext.ts'
import { useToast } from '@chakra-ui/react'
import { showToast } from '../utils/toast.ts'

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
  const { loadBudget } = useBudgetActions();
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const toast = useToast();

  useEffect(() => {
    if (user && db) {
      loadBudget(db, user, () => {
        showToast(toast, "Successfully loaded data", "success");
      }, (error) => {
        // @ts-ignore
        showToast(toast, error.code, "error", error.message)
      })
    }
  })

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
        <SpreadsheetView />
      </Body>
    </RootContainer>
  )
}