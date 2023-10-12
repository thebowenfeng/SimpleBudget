import styled, { keyframes } from 'styled-components'
import { isMobile } from 'react-device-detect'

interface Props {
  isOpen: boolean,
  onClose: () => void,
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

const DrawerDesktop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: white;
  z-index: 20;
  animation: ${slideLeft} 1s ease;
`

const DrawerMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 20;
  animation: ${slideUp} 1s ease;
`

export default function CreateGroupDrawer(props: Props) {
  return (
    <>
      {props.isOpen && <DrawerOverlay onClick={props.onClose} />}
      {props.isOpen && !isMobile && <DrawerDesktop />}
      {props.isOpen && isMobile && <DrawerMobile />}
    </>
  )
}