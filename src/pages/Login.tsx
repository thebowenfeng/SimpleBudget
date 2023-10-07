import styled from 'styled-components'
import { Button, Input, InputRightElement, InputGroup, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'

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
  row-gap: 20px;
  width: 35vw;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  border: 1px solid #b4b3b3;
  padding: 50px;
  border-radius: 30px;
`

type ToastStatus = 'info' | 'warning' | 'success' | 'error' | 'loading'

export default function Login() {
  const [show, useShow] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>();
  const pswdRef = useRef<HTMLInputElement>();
  const toast = useToast()
  const auth = getAuth()

  const showToast = (title: string, type: ToastStatus, description?: string): void => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 3000,
      position: 'top-right',
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
          signInWithEmailAndPassword(auth, emailRef.current.value, pswdRef.current.value).then((userCreds) => {
            showToast("Login success", "success")
          }).catch((error) => {
            showToast(error.code, "error", error.message)
          })
        }).catch((error) => {
          showToast(error.code, "error", error.message)
        })
      }
    }
  }

  return(
    <RootWrapper>
      <LoginWrapper>
        <h1 style={{fontSize: "2em"}}>Login</h1>
        <Input placeholder={"Email"} size={"lg"} ref={emailRef}/>
        <InputGroup size='md'>
          <Input
            size={'lg'}
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            ref={pswdRef}
          />
          <InputRightElement width='4.5rem' top={'4px'}>
            <Button h='2rem' size='sm' onClick={() => useShow((prev) => !prev)}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button size={"lg"} onClick={onLogin}>Login</Button>
      </LoginWrapper>
    </RootWrapper>
  )
}