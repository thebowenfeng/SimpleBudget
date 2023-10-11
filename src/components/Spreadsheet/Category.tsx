import { styled } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { LabelContainer } from './Group'
import { Progress } from '@chakra-ui/react'

interface Props {
  id: string;
  title: string;
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
`

const ProgressContainer = styled.div`
  margin-left: 3vw;
  width: 30vw;
`

export default function Category(props: Props) {
  return(
    <RootContainer id={props.id}>
      <h1 style={{fontSize: '1.1rem'}}>{props.title}</h1>
      <ProgressContainer>
        <Progress value={80} sx={{borderRadius: '50px'}}/>
      </ProgressContainer>
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>$100</h1>
        </LabelContainer>
        <LabelContainer>
          <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>$100</h1>
        </LabelContainer>
      </div>
    </RootContainer>
  )
}