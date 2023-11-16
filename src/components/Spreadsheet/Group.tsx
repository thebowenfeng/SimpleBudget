import { styled } from 'styled-components'
import { Heading, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowDownIcon, ArrowForwardIcon, AddIcon } from '@chakra-ui/icons'
import { isMobile } from 'react-device-detect'
import Category from './Category.tsx'
import { BudgetState, CategoryType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import './Animation.css'
import CreateBudgetDrawer from './CreateBudgetDrawer.tsx'
import CreateGroupDrawer from './CreateGroupDrawer.tsx'
import { getTheme } from '../../themes/theme.ts'
import Swappable from '../Swappable.tsx'

interface Props {
  id: string,
  title: string,
  assigned: number,
  available: number,
  displayChild: boolean,
  month: number,
  year: number,
  isDisabled: boolean,
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '80px' : '40px'};
  min-height: ${isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  background-color: ${getTheme().header.backgroundColor};
  padding-right: 20px;
  padding-left: 20px;
  user-select: none;
  &:hover {
    background-color: ${getTheme().header.hoverColor};
    cursor: pointer;
  }
`

export const LabelContainer = styled.div`
  width: ${isMobile ? '20vw' : '8vw'};
  min-width: ${isMobile ? '200px' : '100px'};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: max-height 0.5s linear, min-height 0.5s linear;
  overflow: hidden;
`

function getChildren(groupId: string, state: BudgetState) {
  for (const group of state.state) {
    if (group.id == groupId) {
      return group.children
    }
  }
  return [];
}

export default function Group(props: Props) {
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const budgetState = useBudgetState()
  const { swapCategory } = useBudgetActions();
  const maxChildrenHeight = getChildren(props.id, budgetState).length * (isMobile ? 80 : 40);

  const adjustHeight = (): string => {
    if (props.displayChild && !isFolded) {
      return `${maxChildrenHeight}px`
    } else {
      return '0px'
    }
  }

  const mapCategory = (obj: CategoryType) => {
    const currData = obj.data.filter((obj2) => obj2.year == props.year && obj2.month == props.month);
    let assigned = 0;
    let available = 0;
    if (currData.length == 1) {
      assigned = currData[0].assigned;
      available = currData[0].available;
    }
    return (<Category title={obj.title} id={obj.id} key={obj.id} month={props.month} year={props.year}
                      assigned={assigned} available={available} groupId={props.id} isDisabled={props.isDisabled}/>)
  }

  const getCategoryObject = (id: string) => {
    for (const child of budgetState.state) {
      if (child.id == props.id) {
        for (const category of child.children) {
          if (category.id == id) {
            return category;
          }
        }
      }
    }
  }

  const onSwap = (id1: string, id2: string) => {
    const obj1 = getCategoryObject(id1);
    const obj2 = getCategoryObject(id2);

    if (obj1 && obj2) {
      swapCategory(props.id, obj1, obj2);
      obj1.transitioning = false;
      obj2.transitioning = false;
    }
  }

  const isSwapping = (id1: string, id2: string) => {
    const obj1 = getCategoryObject(id1);
    const obj2 = getCategoryObject(id2);

    if (obj1 && obj2 && !obj1.transitioning && !obj2.transitioning) {
      obj1.transitioning = true;
      obj2.transitioning = true;
      return true;
    } else {
      return false;
    }
  }

  return(
    <>
      <Header id={props.id} onClick={() => !props.isDisabled && setIsEdit(true)}>
        {props.displayChild && <IconButton aria-label={'fold'} icon={isFolded ? <ArrowForwardIcon /> : <ArrowDownIcon />}
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsFolded(!isFolded)
                    }} variant={'link'} fontSize={isMobile ? '30px' : undefined} />}
        <Heading fontSize={isMobile ? '30px' : '20px'}>{props.title}</Heading>
        <IconButton aria-label={'add'} icon={<AddIcon />} variant={'link'}
                    fontSize={isMobile ? '30px' : undefined} onClick={(e) => {
                      e.stopPropagation();
                      !props.isDisabled && setIsCreate(true);
        }}/>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>${props.available}</h1>
          </LabelContainer>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>${props.assigned}</h1>
          </LabelContainer>
        </div>
      </Header>
      {props.displayChild &&
        <ChildrenContainer style={{
                            minHeight: adjustHeight(),
                            maxHeight: adjustHeight(),
                          }}>
          <Swappable isSwapping={isSwapping} onDrag={() => undefined} onDragStop={() => undefined}
                     onSwap={onSwap}>
            {getChildren(props.id, budgetState).map(mapCategory)}
          </Swappable>
        </ChildrenContainer>
      }
      <CreateBudgetDrawer isOpen={isCreate} onClose={() => setIsCreate(false)} groupId={props.id}
                          month={props.month} year={props.year} />
      <CreateGroupDrawer isOpen={isEdit} onClose={() => setIsEdit(false)}
                         data={budgetState.state.filter((obj) => obj.id == props.id)[0]}
                         title={"Edit group"}/>
    </>
  )
}
