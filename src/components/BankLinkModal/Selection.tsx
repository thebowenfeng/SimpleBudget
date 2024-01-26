import { Account } from './BankLinkModal.tsx'
import { Button, Select, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { useContext, useRef } from 'react'
import { getTheme } from '../../themes/theme.ts'
import { showToast } from '../../utils/toast.ts'
import { useBankActions } from '../../stores/bankStore.ts'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { getFirestore } from 'firebase/firestore'

interface Props{
  accounts: Account[]
  onSubmit: () => void
}

export default function Selection(props: Props) {
  const inputRef = useRef<HTMLSelectElement>(null);
  const toast = useToast()
  const { setAccount } = useBankActions()
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;

  const handleSelection = () => {
    if (inputRef.current?.value == '') {
      showToast(toast, "Selection error", "error", "Must select a bank account")
    }

    const account = props.accounts.filter((obj) => obj.id == inputRef.current?.value)[0]
    if (db && user) {
      setAccount(db, user.uid, { ...account, transactions: [], firebaseId: "" }, account.credentials, () => {
        showToast(toast, "Successfully linked bank account", "success")
      }, (e) => {
        showToast(toast, e.code, "error", e.message)
      })
    }
    props.onSubmit()
  }

  return(
    <>
      <Select placeholder={"Bank account"} ref={inputRef}
              sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}>
        {props.accounts.map((obj) => {
          return (<option value={obj.id}>{obj.name} | {obj.balance}</option>)
        })}
      </Select>
      <Button size={"lg"}
              sx={{
                height: isMobile ? "70px" : undefined,
                width: isMobile ? "140px" : undefined,
                fontSize: isMobile ? "2.5rem" : undefined
              }}
              bg={getTheme().light.buttonTheme.backgroundColor}
              color={getTheme().light.buttonTheme.fontColor}
              onClick={handleSelection}
      >Confirm</Button>
    </>
  )
}
