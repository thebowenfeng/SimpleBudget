import styled from 'styled-components'
import { Button, CircularProgress } from '@chakra-ui/react'
import Group from './Group.tsx'
import { isMobile } from 'react-device-detect'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import { GroupType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import './Animation.css'
import CreateGroupDrawer from './CreateGroupDrawer.tsx'
import DeleteGroupDrawer from './DeleteGroupDrawer.tsx'
import { getTheme } from '../../themes/theme.ts'

interface Props {
  month: number,
  year: number,
}

interface DragState {
  isMouseDown: boolean;
  draggedItem: GroupType | null;
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

function byId(id: string) {
  return document.getElementById(id)
}

export default function SpreadsheetView(props: Props) {
  const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });
  const [displayChild, setDisplayChild] = useState<boolean>(true);
  const [isCreateGroup, setIsCreateGroup] = useState<boolean>(false);
  const [isDeleteGroup, setIsDeleteGroup] = useState<boolean>(false);
  const budgetState = useBudgetState();
  const { swapGroup } = useBudgetActions();

  const disableEditing = useMemo<boolean>(() => {
    const currDate = new Date();
    return (currDate.getMonth() > props.month && currDate.getFullYear() == props.year) || currDate.getFullYear() > props.year
  }, [props.year, props.month])

  const onMouseUp =(event: MouseEvent) => {
    event.stopPropagation()
    setDisplayChild(true);
    dragState.current.isMouseDown = false;
    if (dragState.current.draggedItem) {
      byId(dragState.current.draggedItem.id)?.style.removeProperty('border')
    }
    dragState.current.draggedItem = null;
  }

  const onMouseDown =(event: MouseEvent) => {
    event.stopPropagation()
    dragState.current.isMouseDown = true;
  }

  const onMouseMoveFn = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (dragState.current.isMouseDown) {
      setDisplayChild(false);
      if (!dragState.current.draggedItem) {
        for (const groupItem of budgetState.state) {
          if (byId(groupItem.id) && byId(groupItem.id)?.matches(":hover")) {
            dragState.current.draggedItem = groupItem;
            break;
          }
        }
      }

      if (dragState.current.draggedItem) {
        // @ts-ignore
        byId(dragState.current.draggedItem.id).style.border = "2px solid blue";

        for (const group of budgetState.state) {
          if (byId(group.id)?.matches(":hover") && group.id != dragState.current.draggedItem.id) {
            swapGroup(group, dragState.current.draggedItem);
          }
        }

        for (const group of budgetState.state) {
          if (group.id != dragState.current.draggedItem.id) {
            byId(group.id)?.style.removeProperty('border');
          }
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }, [])

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
        {!budgetState.loading && <ViewContainer onMouseMove={onMouseMoveFn} style={{ pointerEvents: disableEditing ? "none" : undefined }}>
          {budgetState.state.map((obj: GroupType) => {
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
          })}
        </ViewContainer>}
      </div>
      {budgetState.loading && <CircularProgress isIndeterminate/>}
      <CreateGroupDrawer isOpen={isCreateGroup} onClose={() => {setIsCreateGroup(false)}}/>
      <DeleteGroupDrawer isOpen={isDeleteGroup} onClose={() => {setIsDeleteGroup(false)}} />
    </div>
  )
}