import { ReactNode } from 'react'
import { CircularProgress } from '@chakra-ui/react'

interface Props {
  isLoading: boolean
  children: ReactNode
}

export default function Loadable(props: Props) {
  return (
    <>
      {props.isLoading ? <CircularProgress isIndeterminate /> : props.children}
    </>
  )
}