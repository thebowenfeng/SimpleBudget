import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import Group from './Group'
import { isMobile } from 'react-device-detect'
import React, { useState, useRef, useEffect } from 'react'
import { CategoryType, GroupType, useBudgetActions, useBudgetState } from '../stores/budgetStore'

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
  max-height: calc(100vh - 150px);
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
  return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
}

function genTempStore(): GroupType[] {
  const a: GroupType[] = [];
  for (let i = 0; i < 3; i++){
    const b: CategoryType[] = [];
    for (let j = 0; j < 3; j++) {
      const newId = randId();
      b.push({title: (i*10+j).toString(), id: newId})
    }
    const newId = randId();
    a.push({title: i.toString(), id: newId, children: b})
  }
  return a;
}

function byId(id: string) {
  return document.getElementById(id)
}

export default function SpreadsheetView() {
  const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });
  const testRef = useRef<HTMLDivElement>()
  const [displayChild, setDisplayChild] = useState<boolean>(true);
  const budgetState = useBudgetState()
  const { loadBudget, swapGroup } = useBudgetActions()

  const onMouseUp =(event: MouseEvent) => {
    event.stopPropagation()
    setDisplayChild(true);
    dragState.current.isMouseDown = false;
    if (dragState.current.draggedItem) {
      byId(dragState.current.draggedItem.id).style.border = null;
    }
    dragState.current.draggedItem = null;
  }

  const onMouseDown =(event: MouseEvent) => {
    event.stopPropagation()
    dragState.current.isMouseDown = true;
  }

  const onMouseMoveFn = (event: React.MouseEvent) => {
    event.stopPropagation()
    // document.getElementById("abcdefg").innerHTML = (event.pageY - (testRef.current.offsetTop - testRef.current.scrollTop)).toString()
    if (dragState.current.isMouseDown) {
      setDisplayChild(false);
      if (!dragState.current.draggedItem) {
        for (const groupItem of budgetState.state) {
          if (byId(groupItem.id) && byId(groupItem.id).matches(":hover")) {
            dragState.current.draggedItem = groupItem;
            break;
          }
        }
      }

      if (dragState.current.draggedItem) {
        byId(dragState.current.draggedItem.id).style.border = "2px solid blue";

        for (const group of budgetState.state) {
          if (byId(group.id).matches(":hover") && group.id != dragState.current.draggedItem.id) {
            swapGroup(group, dragState.current.draggedItem);
          }
        }

        for (const group of budgetState.state) {
          if (group.id != dragState.current.draggedItem.id) {
            byId(group.id).style.border = null;
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
  }, [])

  return (
    <div>
      <ActionsBar>
        <Button variant={'link'} fontSize={isMobile ? '2.5rem' : null}>Create group</Button>
        <Button sx={{marginLeft: 'auto'}} variant={'link'} fontSize={isMobile ? '2.5rem' : null}>Delete group</Button>
      </ActionsBar>
      <LabelHeader>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>Available</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>Assigned</h1>
        </LabelContainer>
      </LabelHeader>
      <ViewContainer onMouseMove={onMouseMoveFn} ref={testRef}>
        {budgetState.state.map((obj: GroupType) => {
          return (
            <Group title={obj.title} assigned={100} available={80} id={obj.id} displayChild={displayChild} />
          )
        })}
      </ViewContainer>
    </div>
  )
}