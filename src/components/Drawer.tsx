import styled, { keyframes } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { ReactNode } from 'react'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  children?: ReactNode,
  desktopWidth?: string,
  mobileHeight?: string,
}

const DrawerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.58);
`

const slideLeft = keyframes`
  0% {
    clip-path: inset(0 0 0 100%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

const slideUp = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

export default function Drawer(props: Props) {
  const DrawerDesktop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: ${props.desktopWidth ?? '300px'};
    background-color: white;
    z-index: 20;
    animation: ${slideLeft} 1s ease;
  `

  const DrawerMobile = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${props.mobileHeight ?? '100vh' };
    width: 100vw;
    background-color: white;
    z-index: 20;
    animation: ${slideUp} 1s ease;
  `

  const RenderDrawer = () => {
    if (isMobile) {
      return <DrawerMobile>
        {props.children}
      </DrawerMobile>
    } else {
      return <DrawerDesktop>
        {props.children}
      </DrawerDesktop>
    }
  }

  return (
    <>
      {props.isOpen && <DrawerOverlay onClick={props.onClose}
                                      onMouseMove={(e) => {e.stopPropagation()}}
                                      onMouseDown={(e) => {e.stopPropagation()}}
      />}
      {props.isOpen && <RenderDrawer />}
    </>
  )
}