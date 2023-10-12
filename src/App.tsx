import firebaseSdkConfig from "./firebaseConfig.json"
import { initializeApp } from "firebase/app"
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseContext } from './contexts/FirebaseContext.ts'
import Login from './pages/Login.tsx'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import GenericLoading from './pages/GenericLoading.tsx'
import { isMobile } from 'react-device-detect'
import { styled } from 'styled-components'
import NavBarDesktop from './components/NavBar/NavBarDesktop.tsx'
import NavBarMobile from './components/NavBar/NavBarMobile.tsx'
import Budget from './pages/Budget.tsx'

type Page = "undefined" | "login" | "budget"

const RootWrapper = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
`

export default function App() {
  const config = firebaseSdkConfig.result.sdkConfig
  const app = initializeApp(config)
  const auth = getAuth()

  const [page, setPage] = useState<Page>("undefined")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.metadata.lastSignInTime) {
        // Invalidates session after a day
        if (new Date().getTime() - new Date(user.metadata.lastSignInTime).getTime() > 86400000) {
          signOut(auth).then(() => {
            setPage("login")
          }).catch((error) => {
            alert(`${error.code}: ${error.message}. Please refresh your page.`)
            setPage("undefined")
          })
        }
        setPage("budget")
      } else {
        setPage("login")
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
        {page == "undefined" && <GenericLoading />}
        {page == "login" && <Login />}
        {(page != "login" && page != "undefined") &&
          <RootWrapper>
            {!isMobile && <NavBarDesktop/>}
            {page == "budget" && <Budget />}
            {isMobile && <NavBarMobile />}
          </RootWrapper>
        }
      </FirebaseContext.Provider>
    </ChakraProvider>
  );
}