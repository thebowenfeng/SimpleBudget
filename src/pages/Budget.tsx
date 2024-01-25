import styled from 'styled-components'
import MonthPicker from '../components/MonthPicker.tsx'
import { isMobile } from 'react-device-detect'
import BudgetSpreadsheetView from '../components/BudgetSpreadsheet/BudgetSpreadsheetView.tsx'
import { useBudgetActions, useBudgetState } from '../stores/budgetStore.ts'
import { useContext, useEffect, useState } from 'react'
import { Firestore, getFirestore } from 'firebase/firestore'
import { FirebaseContext } from '../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext.ts'
import { useToast } from '@chakra-ui/react'
import { showToast } from '../utils/toast.ts'
import { useBankActions } from '../stores/bankStore.ts'

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
  const budgetState = useBudgetState();
  const { loadBudget, addDefaultMonthlyData } = useBudgetActions();
  const { loadFirstAccount } = useBankActions()
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const toast = useToast();
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());

  useEffect(() => {
    if (user && db && budgetState.state.length == 0) {
      loadBudget(db, user, () => {
        showToast(toast, "Successfully loaded data", "success");
        // Pre-emptively attempts to load bank account
        loadFirstAccount(db as Firestore, user?.uid as string, () => {
          showToast(toast, "Success", "success", "Successfully loaded bank account")
        }, (e) => {
          showToast(toast, e.code, "error", e.message)
        })
      }, (error) => {
        showToast(toast, error.code, "error", error.message)
      })
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (user && db) {
      addDefaultMonthlyData(month, year, db, user, (error) => {
        showToast(toast, error.code, "error", error.message)
      })
    }
    // eslint-disable-next-line
  }, [month, year])

  return (
    <RootContainer>
      <Header>
        <HeaderContainer>
          <MonthPicker year={year} month={month} setMonth={setMonth} setYear={setYear}/>
        </HeaderContainer>
        <HeaderContainer>
          <h1>Money</h1>
        </HeaderContainer>
      </Header>
      <Body>
        <BudgetSpreadsheetView month={month} year={year}/>
      </Body>
    </RootContainer>
  )
}
