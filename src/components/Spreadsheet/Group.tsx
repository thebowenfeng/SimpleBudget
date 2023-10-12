import { styled } from 'styled-components'
import { Heading, IconButton } from '@chakra-ui/react'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { isMobile } from 'react-device-detect'
import Category from './Category.tsx'
import { BudgetState, CategoryType, useBudgetActions, useBudgetState } from '../../stores/budgetStore.ts'
import './Animation.css'

interface Props {
  id: string,
  title: string,
  assigned: number,
  available: number,
  displayChild: boolean
}

interface DragState {
  isMouseDown: boolean;
  draggedItem: CategoryType | null;
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '80px' : '40px'};
  min-height: ${isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  background-color: rgba(215, 215, 215, 1);
  padding-right: 20px;
  padding-left: 20px;
  user-select: none;
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

function byId(id: string) {
  return document.getElementById(id)
}

export default function Group(props: Props) {
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const dragState = useRef<DragState>({ isMouseDown: false, draggedItem: null });
  const budgetState = useBudgetState()
  const { swapCategory } = useBudgetActions();
  const maxChildrenHeight = getChildren(props.id, budgetState).length * (isMobile ? 80 : 40);

  const onMouseUp =(event: MouseEvent) => {
    event.stopPropagation()
    dragState.current.isMouseDown = false;
    if (dragState.current.draggedItem) {
      byId(dragState.current.draggedItem.id)?.style.removeProperty('border');
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
      if (!dragState.current.draggedItem) {
        for (const categoryItem of getChildren(props.id, budgetState)) {
          if (byId(categoryItem.id) && byId(categoryItem.id)?.matches(":hover")) {
            dragState.current.draggedItem = categoryItem;
            break;
          }
        }
      }

      if (dragState.current.draggedItem && byId(dragState.current.draggedItem.id)) {
        // @ts-ignore
        byId(dragState.current.draggedItem.id).style.border = "2px solid blue";

        for (const categoryItem of getChildren(props.id, budgetState)) {
          if (byId(categoryItem.id)?.matches(":hover") && categoryItem.id != dragState.current.draggedItem.id) {
            swapCategory(props.id, categoryItem, dragState.current.draggedItem);
          }
        }

        for (const categoryItem of getChildren(props.id, budgetState)) {
          if (categoryItem.id != dragState.current.draggedItem.id) {
            byId(categoryItem.id)?.style.removeProperty('border')
          }
        }
      }
    }
     
  }

  const adjustHeight = (): string => {
    if (props.displayChild && !isFolded) {
      return `${maxChildrenHeight}px`
    } else {
      return '0px'
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

  return(
    <>
      <Header id={props.id}>
        {props.displayChild && <IconButton aria-label={'fold'} icon={isFolded ? <ArrowForwardIcon /> : <ArrowDownIcon />}
                    onClick={() => {setIsFolded(!isFolded)}} variant={'link'} fontSize={isMobile ? '30px' : undefined} />}
        <Heading fontSize={isMobile ? '30px' : '20px'}>{props.title}</Heading>
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
                          }}
                          onMouseMove={onMouseMoveFn}>
        {getChildren(props.id, budgetState).map((obj) => {
          return (<Category title={obj.title} id={obj.id} key={obj.id}/>)
        })}
        </ChildrenContainer>
      }
    </>
  )
}