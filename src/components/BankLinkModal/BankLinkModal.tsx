import {
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import Login from './Login.tsx'
import { useState } from 'react'
import Selection from './Selection.tsx'
import { styled } from 'styled-components'

interface Props {
  isOpen: boolean,
  onClose: () => void
}

export interface Account {
  id: string,
  name: string,
  balance: number,
  credentials?: string
}

const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
`

export default function BankLinkModal(props: Props) {
  const [accounts, setAccounts] = useState<Account[]>([]);

  return (
    <Modal isOpen={props.isOpen} onClose={() => {
      setAccounts([])
      props.onClose()
    }} isCentered size={isMobile ? "2xl" : "xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'}>
          <Heading>Link bank account</Heading>
        </ModalHeader>
        <ModalBody>
          <InputFields>
            {accounts.length == 0 && <Login onSuccess={(res) => setAccounts([...res])}/>}
            {accounts.length > 0 && <Selection accounts={accounts} onSubmit={() => {
              setAccounts([])
              props.onClose()
            }}/>}
          </InputFields>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
