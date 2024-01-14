import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useToast
} from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { getTheme } from '../../themes/theme.ts'
import { useContext, useRef, useState } from 'react'
import { login } from '../../requests/auth.ts'
import { FirebaseAuthContext } from '../../contexts/FirebaseAuthContext.ts'
import { showToast } from '../../utils/toast.ts'
import { Account } from './BankLinkModal.tsx'

interface Props {
  onSuccess: (accounts: Account[]) => void
}

export default function Login(props: Props) {
  const [show, setShow] = useState<boolean>(false);
  const user = useContext(FirebaseAuthContext);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const toast = useToast()

  const handleLogin = async () => {
    try {
      const resData = await login(user?.uid as string,
        usernameRef.current?.value as string, passwordRef.current?.value as string);
      // @ts-ignore
      props.onSuccess(resData.map((obj) => {return {id: obj.accountNumber, name: obj.name, balance: obj.funds}}))
    } catch (e: any) { // eslint-disable-line
      showToast(toast, "Server error", "error", e.message)
    }
  }

  return(
    <>
      <Input placeholder={"Username"} size={"lg"}
             ref={usernameRef}
             height={isMobile ? "80px" : undefined}
             sx={{ fontSize: isMobile ? "2.5rem" : undefined }}
             bg={"white"}
             _focus={{borderColor: getTheme().light.hoverColor}}
      />
      <InputGroup size='md'>
        <Input
          size={'lg'}
          ref={passwordRef}
          type={show ? "text" : "password"}
          placeholder='Enter password'
          height={isMobile ? "80px" : undefined}
          sx={{ fontSize: isMobile ? "2.5rem" : undefined }}
          bg={"white"}
          _focus={{borderColor: getTheme().light.hoverColor}}
        />
        <InputRightElement width='4.5rem' top={isMobile ? '20px' : '4px'}>
          <Button h={isMobile ? '4rem' : '2rem'} size={isMobile ? 'lg' : 'sm'}
                  bg={getTheme().light.buttonTheme.backgroundColor}
                  color={getTheme().light.buttonTheme.fontColor}
                  onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Show" : "Hide"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button size={"lg"}
              sx={{
                height: isMobile ? "70px" : undefined,
                width: isMobile ? "140px" : undefined,
                fontSize: isMobile ? "2.5rem" : undefined
              }}
              bg={getTheme().light.buttonTheme.backgroundColor}
              color={getTheme().light.buttonTheme.fontColor}
              onClick={handleLogin}
      >Link</Button>
    </>
  )
}