import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import Group from './Group'
import { isMobile } from 'react-device-detect'
import { useCallback, useState, MouseEvent, useRef, MutableRefObject, useEffect } from 'react'

interface DragState {
  isMouseDown: boolean;
  draggedItem: TempTest;
}

interface TempTest {
  title: string,
  ref: MutableRefObject<HTMLDivElement> | null,
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

function genTempTest(): TempTest[] {
  const a = [];
  for (let i = 0; i < 3; i++){
    const ref = useRef<HTMLDivElement>()
    a.push({title: i.toString(), ref: ref})
  }
  return a;
}

function getIndex(title: string, lst: TempTest[]): number {
  for (let i = 0; i < lst.length; i++) {
    const item = lst[i];
    if (item.title == title) {
      return i;
    }
  }
  return 9999;
}

export default function SpreadsheetView() {
  const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });
  const groups = useRef<TempTest[]>(genTempTest());
  const [signal, setSignal] = useState<boolean>(false);
  const testRef = useRef<HTMLDivElement>()
  const [displayChild, setDisplayChild] = useState<boolean>(true);

  const onMouseUp = useCallback(() => {
    setDisplayChild(true);
    dragState.current.isMouseDown = false;
    if (dragState.current.draggedItem) {
      dragState.current.draggedItem.ref.current.style.border = null;
      dragState.current.draggedItem = null;
    }
  }, [])

  const onMouseDown = useCallback(() => {
    dragState.current.isMouseDown = true;
  }, [])

  const onMouseMoveFn = useCallback(() => {
    // document.getElementById("abcdefg").innerHTML = (event.pageY - (testRef.current.offsetTop - testRef.current.scrollTop)).toString()
    if (dragState.current.isMouseDown) {
      setDisplayChild(false);
      if (!dragState.current.draggedItem) {
        for (const group of groups.current) {
          if (group.ref.current.matches(":hover")) {
            dragState.current.draggedItem = group;
            break;
          }
        }
      }

      if (dragState.current.draggedItem) {
        dragState.current.draggedItem.ref.current.style.border = "2px solid blue";

        for (const group of groups.current) {
          if (group.ref.current.matches(":hover") && group.title != dragState.current.draggedItem.title) {
            const currInd = getIndex(dragState.current.draggedItem.title, groups.current)
            const newInd = getIndex(group.title, groups.current)

            groups.current[newInd] = dragState.current.draggedItem;
            groups.current[currInd] = group
            setSignal((prevState) => !prevState);
            break;
          }
        }

        for (const group of groups.current) {
          if (group.title != dragState.current.draggedItem.title) {
            group.ref.current.style.border = null;
          }
        }
      }
    }
  }, [])

  useEffect(() => {
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
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}} id={"abcdefg"}>Available</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}} id={"hijklmn"}>Assigned</h1>
        </LabelContainer>
      </LabelHeader>
      <ViewContainer onMouseMove={onMouseMoveFn} ref={testRef}>
        {groups.current.map((obj: TempTest) => {
          return (
            <Group title={obj.title} assigned={100} available={80} ref={obj.ref} displayChild={displayChild}>

            </Group>
          )
        })}
      </ViewContainer>
    </div>
  )
}