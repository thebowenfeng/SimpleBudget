import { styled } from 'styled-components'
import { Button, Heading, Input, InputGroup, InputLeftElement, Select, useToast } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import Drawer from '../Drawer.tsx'
import { useContext, useMemo, useRef } from 'react'
import { CategoryType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import { FirebaseContext } from '../../contexts/FirebaseContext.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { getFirestore } from 'firebase/firestore'
import { showToast } from '../../utils/toast.ts'
import { randId } from './utils.ts'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  groupId: string,
  month: number,
  year: number,
  categoryId?: string,
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  row-gap: 20px;
  z-index: 50;
  overflow-y: auto;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function CreateBudgetDrawer(props: Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const frequencyRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const assignAmountRef = useRef<HTMLInputElement>(null);
  const { addBudget, editBudget } = useBudgetActions();
  const { state } = useBudgetState();
  const app = useContext(FirebaseContext);
  const user = useContext(FirebaseAuthContext);
  const db = app ? getFirestore(app) : undefined;
  const toast = useToast();
  
  const categoryData = useMemo<CategoryType | undefined>(() => {
    if (props.categoryId != undefined) {
      for (const group of state) {
        for (const category of group.children) {
          if (category.id == props.categoryId) {
            return category;
          }
        }
      }
    }
  }, [props.categoryId, state]);

  const assigned = useMemo<number | undefined>(() => {
    if (categoryData?.data.filter((obj) => obj.year == props.year && obj.month == props.month).length == 0) {
      return 0;
    }
    return categoryData?.data.filter((obj) => obj.year == props.year && obj.month == props.month)[0].assigned;
  }, [categoryData, props.month, props.year])

  const onSubmit = () => {
    if (nameRef.current && typeRef.current && frequencyRef.current && amountRef.current && db && user) {
      if (nameRef.current.value == '') {
        showToast(toast, "Name cannot be empty", "error");
        return;
      }
      if (typeRef.current.value == '') {
        showToast(toast, "Budget type cannot be empty", "error");
        return;
      }
      if (frequencyRef.current.value == '') {
        showToast(toast, "Frequency cannot be empty", "error");
        return;
      }
      if (amountRef.current.value == '') {
        showToast(toast, "Target amount cannot be empty", "error");
        return;
      }
      if (assignAmountRef.current && assignAmountRef.current.value == '') {
        showToast(toast, "Assigned amount cannot be empty", "error");
        return;
      }

      let rawAmount = Math.round(parseFloat(amountRef.current.value) * 100) / 100;
      switch (frequencyRef.current.value) {
        case "daily":
          rawAmount = rawAmount * 30;
          break;
        case "weekly":
          rawAmount = Math.round(rawAmount * 4.345 * 100) / 100;
          break;
        case "monthly":
          break;
        case "yearly":
          rawAmount = Math.round(rawAmount / 12 * 100) / 100;
          break;
      }

      const newData = {
        title: nameRef.current.value,
        id: randId(),
        transitioning: false,
        type: typeRef.current.value as 'spending' | 'saving',
        frequency: frequencyRef.current.value as 'daily' | 'weekly' | 'monthly' | 'yearly',
        amount: Math.round(parseFloat(amountRef.current.value) * 100) / 100,
        rawAmount: rawAmount,
        data: [{month: props.month, year: props.year, available: 0, assigned: 0}]
      };

      if (props.categoryId && categoryData && assignAmountRef.current) {
        newData.data = categoryData.data;
        newData.id = categoryData.id;
        const monthData = newData.data.filter((obj) => obj.year == props.year && obj.month == props.month);
        if (monthData.length == 0) {
          showToast(toast,"Synchronizing server", "warning", "Please wait a few seconds...");
          return;
        }

        const oldAssigned = monthData[0].assigned;
        monthData[0].assigned = Math.round(parseFloat(assignAmountRef.current.value) * 100) / 100;
        const difference = monthData[0].assigned - oldAssigned;
        for (const monthlyData of newData.data) {
          if ((monthlyData.month >= props.month && monthlyData.year == props.year) || monthlyData.year > props.year) {
            monthlyData.available += difference;
          }
        }

        editBudget(newData, props.categoryId, props.groupId, db, user, () => {
          showToast(toast, "Successfully edited budget category", "success");
        }, () => {
          // @ts-ignore
          showToast(toast, error.code, "error", error.message);
        })
      } else {
        addBudget(newData, props.groupId, db, user, () => {
          showToast(toast, "Successfully added budget category", "success");
        }, (error) => {
          // @ts-ignore
          showToast(toast, error.code, "error", error.message);
        })
      }
    }
    props.onClose();
  }

  return(
    <Drawer isOpen={props.isOpen} onClose={props.onClose} mobileHeight={'53vh'}>
      <Container onMouseMove={(event) => {event.stopPropagation()}}>
        <TitleContainer>
          <Heading fontSize={isMobile ? '3rem' : '2rem'}>{props.categoryId ? "Edit category" : "Create category"}</Heading>
        </TitleContainer>
        <div>
          <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Budget category name</h1>
          <Input placeholder={"Budget name"} ref={nameRef}
                 sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
                 defaultValue={categoryData ? categoryData.title : undefined}/>
        </div>
        <div>
          <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Budget type</h1>
          <Select placeholder={"Budget type"} ref={typeRef}
                  sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
                  defaultValue={categoryData ? categoryData.type : undefined}>
            <option value={"spending"}>Spending</option>
            <option value={"saving"}>Saving</option>
          </Select>
        </div>
        <div>
          <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Payment frequency</h1>
          <Select placeholder={"Payment frequency"} ref={frequencyRef}
                  sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
                  defaultValue={categoryData ? categoryData.frequency : undefined}>
            <option value={"daily"}>Daily</option>
            <option value={"weekly"}>Weekly</option>
            <option value={"monthly"}>Monthly</option>
            <option value={"yearly"}>Yearly</option>
          </Select>
        </div>
        <div>
          <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Amount</h1>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children='$'
              sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
            />
            <Input placeholder='Enter amount' ref={amountRef} type={"number"}
                   sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
                   defaultValue={categoryData ? categoryData.amount : undefined}/>
          </InputGroup>
        </div>
        {props.categoryId && <div>
          <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>Assign amount</h1>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children='$'
              sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
            />
            <Input placeholder='Enter amount' ref={assignAmountRef} type={"number"}
                   sx={{fontSize: isMobile ? "2rem" : undefined}} height={isMobile ? "80px" : undefined}
                   defaultValue={categoryData ? assigned : undefined}/>
          </InputGroup>
        </div>}
        <Button sx={{
          marginTop: "20px",
          fontSize: isMobile? "2rem" : undefined,
          height: isMobile ? '100px' : undefined,
          minHeight: isMobile ? '100px' : "var(--chakra-sizes-10)"
        }}
                onClick={onSubmit}>Submit</Button>
      </Container>
    </Drawer>
  )
}