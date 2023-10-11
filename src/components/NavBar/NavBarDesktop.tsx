import { keyframes, styled } from 'styled-components'
import { ReactElement, useRef, useState } from 'react'
import { Button, IconButton, Heading } from '@chakra-ui/react'
import { Icon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { NavBarItem, navBarItems } from './config'

interface NavBarEntryProps {
  label: string,
  icon: ReactElement
}

const RootWrapper = styled.div`
  height: 100vh;
  transition: width 1s ease;
  box-shadow: 5px 0 12px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`

const slideRight = keyframes`
  0% {
    clip-path: inset(0 44% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

export default function NavBarDesktop() {
  const [expand, setExpand] = useState<boolean>(false)

  const NarBarEntry = (props: NavBarEntryProps) => {
    return (
      <>
        {!expand && <IconButton aria-label={props.label} icon={props.icon} variant={"ghost"} />}
        {expand && <Button variant={"ghost"}>{props.icon}{props.label}</Button>}
      </>
    )
  }

  const AppTitle = () => {
    const HeadingWrapper = styled.div`
      width: 180px;
      text-align: center;
      animation: ${slideRight} 1s ease
    `
    return (
      <HeadingWrapper>
        <Heading fontSize={'1.5rem'} sx={{marginBottom: '10px'}}>Simple Budget</Heading>
      </HeadingWrapper>
    )
  }

  return (
    <RootWrapper style={{width: expand ? '180px' : '80px'}}>
      {!expand && <Icon boxSize={30} as={BsFillBootstrapFill} sx={{marginBottom: '10px'}}/>}
      {expand && <AppTitle />}
      {navBarItems.map((obj) => {
        return(
          <NarBarEntry label={obj.title} icon={obj.icon} />
        )
      })}
      <IconButton icon={expand ? <ArrowLeftIcon /> : <ArrowRightIcon />} onClick={() => {setExpand(!expand)}}
                  sx={{ marginTop: 'auto', marginBottom: '10px' }} aria-label={"Expand"}
                  variant={'ghost'}
      />
    </RootWrapper>
  )
}