import { CreateToastFnReturn } from '@chakra-ui/react'

export type ToastStatus = 'info' | 'warning' | 'success' | 'error' | 'loading'

export const showToast = (toast: CreateToastFnReturn, title: string, type: ToastStatus, description?: string): void => {
  toast({
    title: title,
    description: description,
    status: type,
    duration: 3000,
    isClosable: true
  })
}