import { keyframes, styled } from 'styled-components'
import { ReactElement, useCallback, useState } from 'react'
import { Button, IconButton, Heading } from '@chakra-ui/react'
import { Icon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { navBarItems } from './config.tsx'
import { getTheme } from '../../themes/theme.ts'

interface NavBarEntryProps {
  label: string,
  icon: ReactElement,
  onClick: () => void
}

interface Props {
  setPage: (state: string) => void
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
  background-color: ${getTheme().dark.backgroundColor};
`

const slideRight = keyframes`
  0% {
    clip-path: inset(0 44% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`

const HeadingWrapper = styled.div`
  width: 180px;
  text-align: center;
  animation: ${slideRight} 1s ease;
`

export default function NavBarDesktop(props: Props) {
  const [expand, setExpand] = useState<boolean>(false)

  const NarBarEntry = (props: NavBarEntryProps) => {
    return (
      <>
        {!expand && <IconButton aria-label={props.label} icon={props.icon} variant={"ghost"}
                                color={getTheme().dark.buttonTheme.fontColor}
                                bg={getTheme().dark.buttonTheme.backgroundColor}
                                _hover={{bg: getTheme().dark.buttonTheme.hoverColor}}
                                onClick={props.onClick}

        />}
        {expand && <Button variant={"ghost"}
                           color={getTheme().dark.buttonTheme.fontColor}
                           bg={getTheme().dark.buttonTheme.backgroundColor}
                           _hover={{bg: getTheme().dark.buttonTheme.hoverColor}}
                           sx={{minWidth: "80%"}}
                           onClick={props.onClick}
        >{props.icon}{props.label}</Button>}
      </>
    )
  }

  const AppTitle = useCallback(() => {
    console.log('remounted')

    return (
      <HeadingWrapper>
        <Heading fontSize={'1.5rem'} sx={{marginBottom: '10px'}} color={getTheme().dark.fontColor}>Simple Budget</Heading>
      </HeadingWrapper>
    )
  }, []);

  return (
    <RootWrapper style={{width: expand ? '180px' : '80px'}}>
      {!expand ? <Icon boxSize={30} as={BsFillBootstrapFill} sx={{marginBottom: '10px'}}
                        color={getTheme().dark.fontColor}
      /> : <AppTitle />}
      {navBarItems.map((obj) => {
        return(
          <NarBarEntry label={obj.title} icon={obj.icon} onClick={() => obj.onClick(props.setPage)} />
        )
      })}
      <IconButton icon={expand ? <ArrowLeftIcon /> : <ArrowRightIcon />} onClick={() => {setExpand(!expand)}}
                  sx={{ marginTop: 'auto', marginBottom: '10px' }} aria-label={"Expand"}
                  variant={'ghost'} color={getTheme().dark.fontColor} bg={getTheme().dark.buttonTheme.backgroundColor}
                  _hover={{bg: getTheme().dark.buttonTheme.hoverColor}}
      />
    </RootWrapper>
  )
}
