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
import { Dispatch, SetStateAction, useState } from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { isMobile } from 'react-device-detect'
import { getTheme } from '../themes/theme.ts'

interface Props {
  month: number,
  year: number,
  setMonth: Dispatch<SetStateAction<number>>,
  setYear: Dispatch<SetStateAction<number>>
}

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const renderMonthYear = (month: number, year: number): string => {
  return `${months[month]} - ${year.toString()}`
}

export default function MonthPicker(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const forward = () => {
    props.setMonth((prev) => {
      switch (prev){
        case 11:
          props.setYear((prev2) => {
            return prev2 + 1
          })
          return 0
        default:
          return prev + 1
      }
    })
  }

  const backward = () => {
    props.setMonth((prev) => {
      switch (prev){
        case 0:
          props.setYear((prev2) => {
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
                  variant={'ghost'} onClick={backward} color={getTheme().light.buttonTheme.fontColor}
                  _hover={{bg: getTheme().light.buttonTheme.hoverColor}}
      />
      <Button variant={'ghost'} size={'lg'} fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}
              onClick={() => setIsOpen(true)} color={getTheme().light.fontColor}
              _hover={{bg: getTheme().light.buttonTheme.hoverColor}}
      >{renderMonthYear(props.month, props.year)}</Button>
      <IconButton aria-label={'forward'} icon={<ArrowForwardIcon />} fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-md);'}
                  variant={'ghost'} onClick={forward} color={getTheme().light.buttonTheme.fontColor}
                  _hover={{bg: getTheme().light.buttonTheme.hoverColor}}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent height={isMobile ? '30vh' : undefined} maxW={isMobile ? '80vw' : undefined}>
          <ModalHeader sx={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px',
            fontSize: isMobile ? '3rem' : 'var(--chakra-fontSizes-xl);',
          }}>
            <IconButton aria-label={'back'} icon={<ArrowBackIcon />} variant={'ghost'} onClick={
              () => props.setYear((curr) => curr - 1)
            }
                        fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}
                        color={getTheme().light.buttonTheme.fontColor}
                        _hover={{bg: getTheme().light.buttonTheme.hoverColor}}
            />
            {props.year}
            <IconButton aria-label={'forward'} icon={<ArrowForwardIcon />} variant={'ghost'} onClick={
              () => props.setYear((curr) => curr + 1)
            }
                        fontSize={isMobile ? '3rem' : 'var(--chakra-fontSizes-lg);'}
                        color={getTheme().light.buttonTheme.fontColor}
                        _hover={{bg: getTheme().light.buttonTheme.hoverColor}}/>
          </ModalHeader>
          <ModalCloseButton bg={getTheme().light.backgroundColor}
                            color={getTheme().light.fontColor}
                            _hover={{bg: getTheme().light.buttonTheme.hoverColor}}
          />
          <ModalBody sx={{
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '10px',
            justifyContent: 'center', rowGap: '20px', marginBottom: '20px'
          }}>
            {months.map((month) => {
              return(<Button width={'30%'} height={isMobile ? '100px' : undefined} fontSize={isMobile ? '2rem' : undefined} onClick={() => {
                props.setMonth(months.indexOf(month))
                setIsOpen(false)
              }}
                             bg={getTheme().light.buttonTheme.backgroundColor}
                             color={getTheme().light.fontColor}
                             _hover={{bg: getTheme().light.buttonTheme.hoverColor}}>{month}</Button>)
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}