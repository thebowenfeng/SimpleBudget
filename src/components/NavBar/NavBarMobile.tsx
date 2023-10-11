import styled from 'styled-components'
import { navBarItems } from './config'
import { Heading, IconButton } from '@chakra-ui/react'

const RootContainer = styled.div`
  width: 100vw;
  height: 200px;
  position: absolute;
  bottom: 0;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`

const NavBarEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${Math.round(100 / navBarItems.length) + 'vw'};
`
export default function NavBarMobile() {
  return(
    <RootContainer>
      {navBarItems.map((obj) => {
        return (
          <NavBarEntryContainer>
            <IconButton aria-label={obj.title} icon={obj.icon} variant={'ghost'}
                        height={'100px'} width={'100px'} fontSize={'100px'}/>
            <Heading>{obj.title}</Heading>
          </NavBarEntryContainer>
        )
      })}
    </RootContainer>
  )
}