import styled from 'styled-components'
import { navBarItems } from './config.tsx'
import { Heading, IconButton } from '@chakra-ui/react'
import { getTheme } from '../../themes/theme.ts'

interface Props {
  setPage: (state: string) => void
}

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
  background-color: ${getTheme().dark.backgroundColor};
`

const NavBarEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${Math.round(100 / navBarItems.length) + 'vw'};
  color: ${getTheme().dark.fontColor}
`
export default function NavBarMobile(props: Props) {
  return(
    <RootContainer>
      {navBarItems.map((obj) => {
        return (
          <NavBarEntryContainer>
            <IconButton aria-label={obj.title} icon={obj.icon} variant={'ghost'}
                        height={'100px'} width={'100px'} fontSize={'100px'}
                        color={getTheme().dark.fontColor} _hover={{bg: getTheme().dark.buttonTheme.hoverColor}}
                        onClick={() => obj.onClick(props.setPage)}
            />
            <Heading>{obj.title}</Heading>
          </NavBarEntryContainer>
        )
      })}
    </RootContainer>
  )
}
