import styled from 'styled-components'
import { Button, Input, InputRightElement, InputGroup, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { isMobile } from 'react-device-detect'

const RootWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${isMobile ? '40px' : '20px'};
  width: ${isMobile ? "75vw" : "35vw"};
  min-width: 500px;
  align-items: center;
  justify-content: center;
  border: 1px solid #b4b3b3;
  padding: 50px;
  border-radius: 30px;
`

type ToastStatus = 'info' | 'warning' | 'success' | 'error' | 'loading'

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const pswdRef = useRef<HTMLInputElement>(null);
  const toast = useToast()
  const auth = getAuth()

  const showToast = (title: string, type: ToastStatus, description?: string): void => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 3000,
      isClosable: true
    })
  }

  const onLogin = () => {
    if(emailRef.current && pswdRef.current) {
      if (emailRef.current.value == '') {
        showToast("Empty email", 'error')
      } else if (pswdRef.current.value == '') {
        showToast("Empty password", "error")
      } else {
        setPersistence(auth, browserLocalPersistence).then(() => {
          if (emailRef.current && pswdRef.current) {
            signInWithEmailAndPassword(auth, emailRef.current.value, pswdRef.current?.value).then(() => {
              showToast("Login success", "success")
            }).catch((error) => {
              showToast(error.code, "error", error.message)
            })
          }
        }).catch((error) => {
          showToast(error.code, "error", error.message)
        })
      }
    }
  }

  return(
    <RootWrapper>
      <LoginWrapper>
        <h1 style={{fontSize: isMobile ? "5em" : "2em"}}>Login</h1>
        <Input placeholder={"Email"} size={"lg"} ref={emailRef}
               height={isMobile ? "80px" : 'var(--input-height)'}
               sx={{ fontSize: isMobile ? "2.5rem" : "--input-font-size" }}/>
        <InputGroup size='md'>
          <Input
            size={'lg'}
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            ref={pswdRef}
            height={isMobile ? "80px" : 'var(--input-height)'}
            sx={{ fontSize: isMobile ? "2.5rem" : "--input-font-size" }}
          />
          <InputRightElement width='4.5rem' top={isMobile ? '20px' : '4px'}>
            <Button h={isMobile ? '4rem' : '2rem'} size={isMobile ? 'lg' : 'sm'} onClick={() => {setShow((prev) => !prev)}}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button size={"lg"} onClick={onLogin}
                sx={{
                  height: isMobile ? "100px" : "var(--chakra-sizes-12)",
                  width: isMobile ? "200px" : "var(--chakra-sizes-20)",
                  fontSize: isMobile ? "3rem" : "var(--chakra-fontSizes-lg)"
        }}>Login</Button>
      </LoginWrapper>
    </RootWrapper>
  )
}