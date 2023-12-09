import Popover from '../Popover.tsx'
import styled from 'styled-components'
import { Button, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { getFirestore } from 'firebase/firestore'
import { useBudgetActions } from '../../stores/budgetStore.ts'
import { showToast } from '../../utils/toast.ts'

interface Props {
  x: number,
  y: number,
  id: string,
  title: string,
  isOpen: boolean,
  onClose: () => void,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default function DeleteBudgetPopover(props: Props) {
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const toast = useToast();
  const { deleteBudget } = useBudgetActions();

  const onDelete = () => {
    if (db && user) {
      deleteBudget(props.id, db, user, () => {
        showToast(toast, "Successfully deleted budget", "success");
      }, (error) => {
        // @ts-ignore
        showToast(toast, error.code, "error", error.message);
      })
    }
    props.onClose();
  }

  return(
    <Popover x={props.x} y={props.y} height={80} width={160} isOpen={props.isOpen} onClose={props.onClose}>
      <Container>
        <h1>Delete {props.title}</h1>
        <Button colorScheme={'red'} onClick={onDelete}>Delete</Button>
      </Container>
    </Popover>
  )
}