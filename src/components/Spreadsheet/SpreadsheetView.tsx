import styled from 'styled-components'
import { Button, CircularProgress } from '@chakra-ui/react'
import Group from './Group.tsx'
import { isMobile } from 'react-device-detect'
import { useState, useMemo } from 'react'
import { GroupType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import './Animation.css'
import CreateGroupDrawer from './CreateGroupDrawer.tsx'
import DeleteGroupDrawer from './DeleteGroupDrawer.tsx'
import { getTheme } from '../../themes/theme.ts'
import Swappable from "../Swappable.tsx";

interface Props {
  month: number,
  year: number,
}

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

export default function SpreadsheetView(props: Props) {
  const [displayChild, setDisplayChild] = useState<boolean>(true);
  const [isCreateGroup, setIsCreateGroup] = useState<boolean>(false);
  const [isDeleteGroup, setIsDeleteGroup] = useState<boolean>(false);
  const budgetState = useBudgetState();
  const { swapGroup } = useBudgetActions();

  const disableEditing = useMemo<boolean>(() => {
    const currDate = new Date();
    return (currDate.getMonth() > props.month && currDate.getFullYear() == props.year) || currDate.getFullYear() > props.year
  }, [props.year, props.month]);

  const getGroupObject = (id: string) => {
    for (const child of budgetState.state) {
      if (child.id == id) {
        return child;
      }
    }
  }

  const onSwap = (id1: string, id2: string) => {
    const obj1 = getGroupObject(id1);
    const obj2 = getGroupObject(id2);

    if (obj1 && obj2) {
      swapGroup(obj1, obj2);
      obj1.transitioning = false;
      obj2.transitioning = false;
    }
  }

  const isSwapping = (id1: string, id2: string) => {
    const obj1 = getGroupObject(id1);
    const obj2 = getGroupObject(id2);

    if (obj1 && obj2 && !obj1.transitioning && !obj2.transitioning) {
      obj1.transitioning = true;
      obj2.transitioning = true;
      return true;
    } else {
      return false;
    }
  }

  const mapGroups = (obj: GroupType) => {
    let assigned = 0;
    let available = 0;
    for (const child of obj.children) {
      const currData = child.data.filter((obj2) => obj2.month == props.month && obj2.year == props.year);
      if (currData.length == 1) {
        assigned += currData[0].assigned;
        available += currData[0].available;
      }
    }
    return (
      <Group key={obj.id} title={obj.title} assigned={assigned} available={available} id={obj.id} displayChild={displayChild}
             month={props.month} year={props.year} isDisabled={disableEditing} />
    )
  }

  return (
    <div style={{textAlign: 'center'}}>
      <ActionsBar>
        <Button variant={'link'} fontSize={isMobile ? '2.5rem' : undefined}
                onClick={() => setIsCreateGroup(true)}
                color={getTheme().light.buttonTheme.fontColor}
        >Create group</Button>
        <Button sx={{marginLeft: 'auto'}} variant={'link'}
                fontSize={isMobile ? '2.5rem' : undefined}
                onClick={() => setIsDeleteGroup(true)}
                color={getTheme().light.buttonTheme.fontColor}
        >Delete group</Button>
      </ActionsBar>
      <LabelHeader>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"abc"}>Available</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"def"}>Assigned</h1>
        </LabelContainer>
      </LabelHeader>
      <div style={{ cursor: disableEditing ? "not-allowed" : undefined }}>
        {!budgetState.loading && <ViewContainer style={{ pointerEvents: disableEditing ? "none" : undefined }}>
          <Swappable onDrag={() => setDisplayChild(false)} onDragStop={() => setDisplayChild(true)}
                     onSwap={onSwap} isSwapping={isSwapping}>
            {budgetState.state.map(mapGroups)}
          </Swappable>
        </ViewContainer>}
      </div>
      {budgetState.loading && <CircularProgress isIndeterminate/>}
      <CreateGroupDrawer isOpen={isCreateGroup} onClose={() => {setIsCreateGroup(false)}}/>
      <DeleteGroupDrawer isOpen={isDeleteGroup} onClose={() => {setIsDeleteGroup(false)}} />
    </div>
  )
}
