import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import Group from './Group'
import { isMobile } from 'react-device-detect'

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
  overflow-y: scroll;
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

export default function SpreadsheetView() {
  return (
    <>
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
      <ViewContainer>
        <Group title={"MyGroup1"} assigned={100} available={80}>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
        </Group>
        <Group title={"MyGroup1"} assigned={100} available={80}>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
          <h1 style={{fontSize: '5rem'}}>Test</h1>
        </Group>
      </ViewContainer>
    </>
  )
}