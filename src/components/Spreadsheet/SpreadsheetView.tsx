import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import Group from './Group.tsx'
import { isMobile } from 'react-device-detect'
import React, { useState, useRef, useEffect } from 'react'
import { CategoryType, GroupType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import './Animation.css'
import CreateGroupDrawer from './CreateGroupDrawer.tsx'

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

function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

function genTempStore(): GroupType[] {
  const a: GroupType[] = [];
  for (let i = 0; i < 3; i++){
    const b: CategoryType[] = [];
    for (let j = 0; j < 10; j++) {
      const newId = randId();
      b.push({title: (i*10+j).toString(), id: newId, transitioning: false})
    }
    const newId = randId();
    a.push({title: i.toString(), id: newId, children: b, transitioning: false})
  }
  return a;
}

function byId(id: string) {
  return document.getElementById(id)
}

export default function SpreadsheetView() {
  const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });
  const [displayChild, setDisplayChild] = useState<boolean>(true);
  const [isCreateGroup, setIsCreateGroup] = useState<boolean>(false);
  const budgetState = useBudgetState()
  const { loadBudget, swapGroup } = useBudgetActions()

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
    loadBudget(genTempStore())
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }, [loadBudget])

  return (
    <>
      <CreateGroupDrawer isOpen={isCreateGroup} onClose={() => {setIsCreateGroup(false)}} />
      <ActionsBar>
        <Button variant={'link'} fontSize={isMobile ? '2.5rem' : undefined} onClick={() => setIsCreateGroup(true)}>Create group</Button>
        <Button sx={{marginLeft: 'auto'}} variant={'link'} fontSize={isMobile ? '2.5rem' : undefined}>Delete group</Button>
      </ActionsBar>
      <LabelHeader>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"abc"}>Available</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}} id={"def"}>Assigned</h1>
        </LabelContainer>
      </LabelHeader>
      <ViewContainer onMouseMove={onMouseMoveFn}>
        {budgetState.state.map((obj: GroupType) => {
          return (
            <Group key={obj.id} title={obj.title} assigned={100} available={80} id={obj.id} displayChild={displayChild} />
          )
        })}
      </ViewContainer>
    </>
  )
}