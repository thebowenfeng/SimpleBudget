import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { getTheme } from '../../themes/theme.ts'
import { useBudgetState } from '../../stores/budgetStore.ts'
import { Select, useToast } from '@chakra-ui/react'
import { useBankActions, useBankState } from '../../stores/bankStore.ts'
import { useContext } from 'react'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { Firestore, getFirestore } from 'firebase/firestore'
import { showToast } from '../../utils/toast.ts'

interface Props {
  id: string,
  title: string,
  timestamp: Date,
  amount: number,
  category?: string
}


const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '80px' : '40px'};
  min-height: ${isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: -1px;
  padding-right: 20px;
  padding-left: 55px;
  user-select: none;
  transition: top 1s linear;
  background-color: ${getTheme().light.backgroundColor};
  &:hover {
    background-color: ${getTheme().light.hoverColor};
    cursor: pointer;
  }
`

const LabelContainer = styled.div`
  width: ${isMobile ? '20vw' : '8vw'};
  min-width: ${isMobile ? '200px' : '100px'};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const SelectContainer = styled.div`
  width: 150px;
  margin-right: 20px;
`

function CategorySelection(props: {id: string, categoryId?: string}) {
  const budgetState = useBudgetState()
  const { editCategory } = useBankActions()
  const user = useContext(FirebaseAuthContext);
  const app = useContext(FirebaseContext);
  const db = app ? getFirestore(app) : undefined;
  const toast = useToast()

  return (
    <Select placeholder={"Select category"} size={"sm"} borderRadius={"10px"}
            defaultValue={props.categoryId} onChange={(e) => {
              console.log(props.categoryId)
              editCategory(db as Firestore, user?.uid as string, props.id, e.target.value, () => {
                showToast(toast, "Success", "success", "Successfully changed category")
              }, (err) => {
                showToast(toast, err.code, "error", err.message)
              })
    }}>
      {budgetState.state.flatMap((obj) => obj.children).map((obj) => {
        return <option value={obj.id}>{obj.title}</option>
      })}
    </Select>
  )
}

export default function TransactionView(props: Props) {
  useBankState()
  return(
    <>
      <RootContainer>
        <SelectContainer>
          <CategorySelection id={props.id} categoryId={props.category} />
        </SelectContainer>
        <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem', marginRight: '3vw'}}>{props.title}</h1>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>{props.timestamp.toDateString()}</h1>
          </LabelContainer>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>${props.amount}</h1>
          </LabelContainer>
        </div>
      </RootContainer>
    </>
  )
}
