import {styled} from 'styled-components'
import { Button, Heading, IconButton } from '@chakra-ui/react'
import { Children, ReactNode, useMemo, useRef, useState } from 'react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { isMobile } from 'react-device-detect'

interface Props {
  title: string,
  assigned: number,
  available: number,
  children: ReactNode
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${isMobile ? '80px' : '40px'};
  min-height: 40px;
  width: 100%;
  align-items: center;
  background-color: rgba(215, 215, 215, 0.53);
  padding-right: 20px;
  padding-left: 20px;
`

const LabelContainer = styled.div`
  width: ${isMobile ? '20vw' : '8vw'};
  min-width: ${isMobile ? '200px' : '100px'}
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: max-height 1s linear;
`

export default function Group(props: Props) {
  const containerRef = useRef<HTMLDivElement>();
  const [isFolded, setIsFolded] = useState<boolean>(false);
  const maxChildrenHeight = useMemo<number>(() => {
    let height = 0;
    for (const child of Children.toArray(props.children)) {
      //TODO: Implement proper height after group entry height has been set
    }
    return 0;
  }, [props.children])

  const fold = () => {
    switch (containerRef.current.style.maxHeight) {
      case '0px':
        containerRef.current.style.maxHeight = '1500px';
        containerRef.current.style.visibility = 'visible'
        setIsFolded(false);
        break;
      case '1500px':
        containerRef.current.style.maxHeight = '0';
        setTimeout(() => {
          containerRef.current.style.visibility = 'hidden'
        }, 1000)
        setIsFolded(true);
        break;
    }
  }

  return(
    <>
      <RootContainer>
        <IconButton aria-label={'fold'} icon={isFolded ? <ArrowForwardIcon /> : <ArrowDownIcon />}
                    onClick={fold} variant={'link'} fontSize={isMobile ? '30px' : null}>Fold</IconButton>
        <Heading fontSize={isMobile ? '30px' : '20px'}>{props.title}</Heading>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto'}}>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>${props.available}</h1>
          </LabelContainer>
          <LabelContainer>
            <h1 style={{fontSize: isMobile ? '1.75rem' : null}}>${props.assigned}</h1>
          </LabelContainer>
        </div>
      </RootContainer>
      <ChildrenContainer ref={containerRef} style={{maxHeight: '1500px', visibility: 'visible'}}>
        {props.children}
      </ChildrenContainer>
    </>
  )
}