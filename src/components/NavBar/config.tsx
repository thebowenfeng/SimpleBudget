import { Icon } from '@chakra-ui/icons'
import { HiWallet } from 'react-icons/hi2'
import { AiFillBank } from 'react-icons/ai'
import { ReactElement } from 'react'

export interface NavBarItem {
  title: string,
  icon: ReactElement
}

export const navBarItems: NavBarItem[] = [
  {
    title: "Budget",
    icon: <Icon as={HiWallet}/>
  },
  {
    title: "Bank account",
    icon: <Icon as={AiFillBank}/>
  }
]