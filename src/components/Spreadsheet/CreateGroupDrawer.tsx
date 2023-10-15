import Drawer from '../Drawer.tsx'
import styled from 'styled-components'
import { Button, Heading, Input, useToast } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { getFirestore } from 'firebase/firestore'
import { useBudgetActions } from '../../stores/budgetStore.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { showToast } from '../../utils/toast.ts'
import { isMobile } from 'react-device-detect'

interface Props {
  isOpen: boolean,
  onClose: () => void,
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function CreateGroupDrawer (props: Props) {
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const { addGroup } = useBudgetActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const addGroupFn = () => {
    if (db && user && inputRef.current) {
      if (inputRef.current?.value == '') {
        showToast(toast,"Name cannot be empty", "error");
        return;
      }

      const name = inputRef.current?.value;
      addGroup(name, db, user, () => {showToast(toast,"Group added", "success")}, (error) => {
        // @ts-ignore
        showToast(toast, error.code, "error", error.message);
      });

      props.onClose();
    }
  }

  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} mobileHeight={'30vh'}>
      <Container>
        <TitleContainer>
          <Heading fontSize={isMobile ? '3rem' : '2rem'}>Create new group</Heading>
        </TitleContainer>
        <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Group name</h1>
        <Input placeholder={"Group name"} ref={inputRef}
               sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}/>
        <Button sx={{marginTop: "20px", fontSize: isMobile? "2rem" : undefined, height: isMobile ? '100px' : undefined}}
                onClick={addGroupFn}>Submit</Button>
      </Container>
    </Drawer>
  )
}
