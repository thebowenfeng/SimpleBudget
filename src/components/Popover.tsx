import { styled } from 'styled-components'
import { ReactNode, useEffect } from 'react'

interface Props {
  x: number,
  y: number,
  height: number,
  width: number,
  isOpen: boolean,
  onClose: () => void,
  children?: ReactNode
}

export default function Popover(props: Props) {
  const Container = styled.div`
    position: absolute;
    top: ${props.y}px;
    left: ${props.x}px;
    height: ${props.height}px;
    width: ${props.width}px;
    z-index: 100;
  `

  useEffect(() => {
    const onCloseFn = (event: MouseEvent) => {
      event.stopPropagation();
      props.onClose();
    }
    
    document.addEventListener("click", onCloseFn);
    return () => {document.removeEventListener("click", onCloseFn)}
  },  [props, props.onClose])

  return (
    <>
      {props.isOpen && <Container onClick={(event) => {
        event.stopPropagation();
      }}>
        {props.children}
      </Container>}
    </>
  )
}