import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { getTheme } from '../../themes/theme.ts'
import { Transaction, useBankState } from '../../stores/bankStore.ts'
import TransactionView from './Transaction.tsx'

const ActionsBar = styled.div`
  height: ${isMobile ? '100px' : '50px'};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: ${isMobile ? "calc(100vh - 560px)" : "calc(100vh - 150px)"};
  padding-bottom: 30px;
  scrollbar-gutter: stable;
`

const LabelHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${isMobile ? '60px' : '30px'};
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  scrollbar-gutter: stable;
  overflow-y: scroll;
;
`

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: ${isMobile ? '20vw' : '8vw'};
  min-width: ${isMobile ? '200px' : '100px'};
  height: 100%;
`

export default function TransactionSpreadsheetView() {
  const bankState = useBankState()
  const mapToTransaction = (data: Transaction) => {
    return <TransactionView key={data.id} id={data.id} title={data.description}
                            timestamp={data.timestamp} amount={data.amount}
                            category={data.category} />
  }

  return (
    <div style={{textAlign: 'center'}}>
      <ActionsBar>
        <Button sx={{marginLeft: 'auto'}} variant={'link'}
                fontSize={isMobile ? '2.5rem' : undefined}
                color={getTheme().light.buttonTheme.fontColor}
        >Create transaction</Button>
      </ActionsBar>
      <LabelHeader>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"abc"}>Date</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"abc"}>Amount</h1>
        </LabelContainer>
      </LabelHeader>
      <ViewContainer>
        {bankState.state?.transactions.map(mapToTransaction)}
      </ViewContainer>
    </div>
  )
}
