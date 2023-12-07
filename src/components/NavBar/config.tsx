import { Icon } from '@chakra-ui/icons'
import { HiWallet } from 'react-icons/hi2'
import { AiFillBank } from 'react-icons/ai'
import { ReactElement } from 'react'

export interface NavBarItem {
  title: string,
  icon: ReactElement
  onClick: (setPage: (state: string) => void) => void
}

export const navBarItems: NavBarItem[] = [
  {
    title: "Budget",
    icon: <Icon as={HiWallet}/>,
    onClick: setPage => setPage("budget")
  },
  {
    title: "Bank Account",
    icon: <Icon as={AiFillBank}/>,
    onClick: setPage => setPage("bank")
  }
]
