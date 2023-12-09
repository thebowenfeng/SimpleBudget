import firebaseSdkConfig from "./firebaseConfig.json"
import { initializeApp } from "firebase/app"
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseContext } from './contexts/FirebaseContext.ts'
import Login from './pages/Login.tsx'
import { getAuth, signOut, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import GenericLoading from './pages/GenericLoading.tsx'
import { isMobile } from 'react-device-detect'
import { styled } from 'styled-components'
import NavBarDesktop from './components/NavBar/NavBarDesktop.tsx'
import NavBarMobile from './components/NavBar/NavBarMobile.tsx'
import Budget from './pages/Budget.tsx'
import { FirebaseAuthContext } from './contexts/FirebaseAuthContext.ts'
import Bank from './pages/Bank.tsx'

type Page = "undefined" | "login" | "budget" | "bank"

const RootWrapper = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  height: 100dvh;
  max-height: 100dvh;
  overflow-y: hidden;
`

export default function App() {
  const config = firebaseSdkConfig.result.sdkConfig
  const app = initializeApp(config)
  const auth = getAuth()

  const [page, setPage] = useState<Page>("undefined");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.metadata.lastSignInTime) {
        // Invalidates session after a day
        if (new Date().getTime() - new Date(user.metadata.lastSignInTime).getTime() > 86400000) {
          signOut(auth).then(() => {
            setPage("login")
            setUser(null);
          }).catch((error) => {
            alert(`${error.code}: ${error.message}. Please refresh your page.`)
            setPage("undefined")
            setUser(null);
          })
        }
        setPage("budget")
        setUser(user)
      } else {
        setPage("login")
        setUser(null);
      }
    })
  }, [auth])

  return (
    <ChakraProvider toastOptions={{ defaultOptions: {
        position: 'top-right',
        containerStyle: {
          fontSize: isMobile ? "2rem" : 'auto',
        }
    }}}>
      <FirebaseContext.Provider value={app}>
        <FirebaseAuthContext.Provider value={user}>
          {page == "undefined" && <GenericLoading />}
          {page == "login" && <Login />}
          {(page != "login" && page != "undefined") &&
            <RootWrapper>
              {!isMobile && <NavBarDesktop setPage={state => setPage(state as Page)}/>}
              {page == "budget" && <Budget />}
              {page == "bank" && <Bank />}
              {isMobile && <NavBarMobile setPage={state => setPage(state as Page)}/>}
            </RootWrapper>
          }
        </FirebaseAuthContext.Provider>
      </FirebaseContext.Provider>
    </ChakraProvider>
  );
}
