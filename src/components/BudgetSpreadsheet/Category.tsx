import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { LabelContainer } from './Group.tsx'
import { Badge, Progress } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import DeleteBudgetPopover from './DeleteBudgetPopover.tsx'
import { getTheme } from '../../themes/theme.ts'
import CreateBudgetDrawer from './CreateBudgetDrawer.tsx'
import { CategoryType, useBudgetState } from '../../stores/budgetStore.ts'

interface Props {
  id: string;
  groupId: string;
  title: string;
  month: number;
  year: number;
  assigned: number;
  available: number;
  isDisabled: boolean;
}

interface Coord {
  x: number,
  y: number
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '80px' : '40px'};
  min-height: ${isMobile ? '80px' : '40px'};
  width: 100%;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: -1px;
  padding-right: 20px;
  padding-left: 55px;
  user-select: none;
  transition: top 1s linear;
  background-color: ${getTheme().light.backgroundColor};
  &:hover {
    background-color: ${getTheme().light.hoverColor};
    cursor: pointer;
  }
`

const ProgressContainer = styled.div`
  width: 30vw;
`

export default function Category(props: Props) {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coord>({x: 0, y: 0});
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { state } = useBudgetState();
  
  const categoryData = useMemo<CategoryType | undefined>(() => {
    for (const group of state) {
      for (const category of group.children) {
        if (category.id == props.id) {
          return category;
        }
      }
    }
  }, [props.id, state]);

  const StatusBadge = () => {
    if (props.available < 0) {
      return <Badge colorScheme={'red'} sx={{marginRight: '2vw'}} fontSize={isMobile ? '1.2rem' : undefined}>Insufficient funds</Badge>
    } else if (categoryData &&
      (props.available < categoryData.rawAmount || categoryData.type == "saving" && props.assigned < categoryData.rawAmount)) {
      return <Badge colorScheme={'yellow'} sx={{marginRight: '2vw'}} fontSize={isMobile ? '1.2rem' : undefined}>Not enough assigned</Badge>
    } else {
      return <Badge colorScheme={'green'} sx={{marginRight: '2vw'}} fontSize={isMobile ? '1.2rem' : undefined}>Available</Badge>
    }
  }

  return(
    <>
      <RootContainer id={props.id} onContextMenu={(event) => {
        event.preventDefault();
        setCoords({x: event.pageX, y: event.pageY});
        !props.isDisabled && setIsDelete(true);
      }} onClick={() => {!props.isDisabled && setIsEdit(true)}}>
        <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem', marginRight: '3vw'}}>{props.title}</h1>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
          <StatusBadge />
          {!isMobile && <ProgressContainer>
            <Progress value={props.available / (props.assigned + 0.000001) * 100} sx={{borderRadius: '50px'}}
                      colorScheme={'green'}/>
          </ProgressContainer>}
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>${props.available}</h1>
          </LabelContainer>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>${props.assigned}</h1>
          </LabelContainer>
        </div>
      </RootContainer>
      <DeleteBudgetPopover x={coords.x} y={coords.y} title={props.title} isOpen={isDelete} id={props.id}
                           onClose={() => setIsDelete(false)} />
      <CreateBudgetDrawer isOpen={isEdit} onClose={() => setIsEdit(false)} groupId={props.groupId} month={props.month}
                          year={props.year} categoryId={props.id}/>
    </>
  )
}
