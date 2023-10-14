import { useContext, useRef } from 'react'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore'
import { useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import { Button, Heading, Select, useToast } from '@chakra-ui/react'
import { showToast } from '../../utils/toast.ts'
import Drawer from '../Drawer.tsx'
import { isMobile } from 'react-device-detect'
import { styled } from 'styled-components'

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

export default function DeleteGroupDrawer(props: Props) {
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const { addGroup, removeGroup } = useBudgetActions();
  const { state } = useBudgetState();
  const inputRef = useRef<HTMLSelectElement>(null);
  const toast = useToast();

  const deleteGroupFn = () => {
    if (inputRef.current && db && user) {
      if (inputRef.current.value == '') {
        showToast(toast, "Must select one group", "error");
        return;
      }

      const toRemove = state.filter((obj) => obj.id == inputRef.current?.value)[0];
      removeGroup(toRemove.id);
      // TODO: Delete budget subcollection
      deleteDoc(doc(db, user.uid, toRemove.id)).then(() => {
        showToast(toast, "Successfully deleted group", "success");
      }).catch((error) => {
        showToast(toast, error.code, "error", error.message);
        addGroup(toRemove.id, toRemove.title);
      })
    }

    props.onClose();
  }

  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} mobileHeight={'30vh'}>
      <Container>
        <TitleContainer>
          <Heading fontSize={isMobile ? '3rem' : '2rem'}>Delete group</Heading>
        </TitleContainer>
        <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Group name</h1>
        <Select placeholder={"Group name"} ref={inputRef}
                sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}>
          {state.map((obj) => {
            return (<option value={obj.id}>{obj.title}</option>)
          })}
        </Select>
        <Button sx={{marginTop: "20px", fontSize: isMobile? "2rem" : undefined, height: isMobile ? '100px' : undefined}}
                onClick={deleteGroupFn}>Delete</Button>
      </Container>
    </Drawer>
  )
}