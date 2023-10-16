import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { LabelContainer } from './Group.tsx'
import { Progress } from '@chakra-ui/react'
import { useState } from 'react'
import DeleteBudgetPopover from './DeleteBudgetPopover.tsx'

interface Props {
  id: string;
  title: string;
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
  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`

const ProgressContainer = styled.div`
  margin-left: 3vw;
  width: 30vw;
`

export default function Category(props: Props) {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [coords, setCoords] = useState<Coord>({x: 0, y: 0});

  return(
    <>
      <RootContainer id={props.id} onContextMenu={(event) => {
        event.preventDefault();
        setCoords({x: event.pageX, y: event.pageY});
        setIsDelete(true);
      }}>
        <h1 style={{fontSize: isMobile ? '2rem' : '1.1rem'}}>{props.title}</h1>
        <ProgressContainer>
          <Progress value={80} sx={{borderRadius: '50px'}}/>
        </ProgressContainer>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>$100</h1>
          </LabelContainer>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : undefined}}>$100</h1>
          </LabelContainer>
        </div>
      </RootContainer>
      <DeleteBudgetPopover x={coords.x} y={coords.y} title={props.title} isOpen={isDelete} id={props.id}
                           onClose={() => setIsDelete(false)} />
    </>
  )
}