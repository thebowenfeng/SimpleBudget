import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  IconButton
} from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { isMobile } from 'react-device-detect'

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const renderMonthYear = (month: number, year: number): string => {
  return `${months[month]} - ${year.toString()}`
}

export function useYear() {
  const [year, setYear] = useState<number>(new Date().getFullYear())
  return { year, setYear }
}

export function useMonth() {
  const [month, setMonth] = useState<number>(new Date().getMonth())
  return { month, setMonth }
}

export default function MonthPicker() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { year, setYear} = useYear()
  const { month, setMonth } = useMonth()

  const forward = () => {
    setMonth((prev) => {
      switch (prev){
        case 11:
          setYear((prev2) => {
            return prev2 + 1
          })
          return 0
        default:
          return prev + 1
      }
    })
  }

  const backward = () => {
    setMonth((prev) => {
      switch (prev){
        case 0:
          setYear((prev2) => {
            return prev2 - 1
          })
          return 11
        default:
          return prev - 1
      }
    })
  }

  return (
    <>
      <IconButton aria-label={'back'} icon={<ArrowBackIcon />} fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-md);'}
                  variant={'ghost'} onClick={backward}/>
      <Button variant={'ghost'} size={'lg'} fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}
              onClick={() => setIsOpen(true)}>{renderMonthYear(month, year)}</Button>
      <IconButton aria-label={'forward'} icon={<ArrowForwardIcon />} fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-md);'}
                  variant={'ghost'} onClick={forward}/>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent height={isMobile ? '30vh' : null} maxW={isMobile ? '80vw' : null}>
          <ModalHeader sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px',
            fontSize: isMobile ? '3rem' : 'var(--chakra-fontSizes-xl);',
          }}>
            <IconButton aria-label={'back'} icon={<ArrowBackIcon />} variant={'ghost'} onClick={
              () => setYear((curr) => curr - 1)
            } fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}/>
            {year}
            <IconButton aria-label={'forward'} icon={<ArrowForwardIcon />} variant={'ghost'} onClick={
              () => setYear((curr) => curr + 1)
            } fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}/>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody sx={{
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '10px',
            justifyContent: 'center', rowGap: '20px', marginBottom: '20px'
          }}>
            {months.map((month) => {
              return(<Button width={'30%'} height={isMobile ? '100px' : null} fontSize={isMobile ? '2rem' : null} onClick={() => {
                setMonth(months.indexOf(month))
                setIsOpen(false)
              }}>{month}</Button>)
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}