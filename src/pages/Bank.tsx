import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Button, useToast } from '@chakra-ui/react'
import { getTheme } from '../themes/theme.ts'
import BankInfo from '../components/BankInfo.tsx'
import { ReactNode, useContext, useEffect, useState } from 'react'
import BankLinkModal from '../components/BankLinkModal/BankLinkModal.tsx'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext.ts'
import { FirebaseContext } from '../contexts/FirebaseContext.ts'
import { Firestore, getFirestore } from 'firebase/firestore'
import { useBankActions, useBankState } from '../stores/bankStore.ts'
import { showToast } from '../utils/toast.ts'
import { handleError, registerCallback } from '../requests/transactions.ts'

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
  const ThemedButton = ({ onClick, children }: {onClick: () => void, children: ReactNode}) => {
    return (
      <Button
        backgroundColor={getTheme().dark.buttonTheme.backgroundColor}
        _hover={{bg: getTheme().dark.backgroundColor}}
        color={getTheme().dark.fontColor}
        fontSize={isMobile ? "2.2rem" : undefined}
        height={isMobile ? "75px" : undefined}
        borderRadius={isMobile ? "15px" : undefined}
        onClick={onClick}
      >{children}</Button>
    )
  }

  const [isLinkBankOpen, setIsLinkBankOpen] = useState<boolean>(false)
  const user = useContext(FirebaseAuthContext);
  const app = useContext(FirebaseContext);
  const db = app ? getFirestore(app) : undefined;
  const bankState = useBankState()
  const { loadFirstAccount, addTransaction } = useBankActions()
  const toast = useToast()

  useEffect(() => {
    loadFirstAccount(db as Firestore, user?.uid as string, () => {
      showToast(toast, "Success", "success", "Successfully loaded bank account")
    }, (e) => {
      showToast(toast, e.code, "error", e.message)
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (bankState.state != null) {
      registerCallback((data) => {
        // Fix timestamp
        data.created.setHours(new Date().getHours())
        data.created.setMinutes(new Date().getMinutes())
        data.created.setSeconds(new Date().getSeconds())

        addTransaction(db as Firestore, user?.uid as string, {
          id: data.id,
          description: data.description,
          timestamp: data.created,
          amount: data.amount,
          category: "undefined"
        }, () => void 0, (e) => {
          showToast(toast, e.code, "error", e.message)
        })
      })

      handleError((err) => {
        showToast(toast, err.code, "error", err.message)
      })
    }
    // eslint-disable-next-line
  }, [bankState.state])

  return (
    <RootContainer>
      <Header>
        <BankInfo />
        <RightContainer>
          <ThemedButton onClick={() => setIsLinkBankOpen(true)}>Link Account</ThemedButton>
        </RightContainer>
      </Header>
      <BankLinkModal isOpen={isLinkBankOpen} onClose={() => setIsLinkBankOpen(false)} />
    </RootContainer>
  )
}
