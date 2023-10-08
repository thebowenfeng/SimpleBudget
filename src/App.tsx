import firebaseSdkConfig from "./firebaseConfig.json"
import { initializeApp } from "firebase/app"
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseContext } from './contexts/FirebaseContext'
import Login from './pages/Login'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import GenericLoading from './pages/GenericLoading'
import { isMobile } from 'react-device-detect'
import { styled } from 'styled-components'
import { NBDesktop, NBMobile } from './components/NavBar'

type Page = "undefined" | "login" | "main"

const RootWrapper = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  height: 100vh;
`

export function App() {
  const config = firebaseSdkConfig.result.sdkConfig
  const app = initializeApp(config)
  const auth = getAuth()

  const [page, setPage] = useState<Page>("undefined")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Invalidates session after a day
        if (new Date().getTime() - new Date(user.metadata.lastSignInTime).getTime() > 86400000) {
          signOut(auth).then(() => {
            setPage("login")
          }).catch((error) => {
            alert(`${error.code}: ${error.message}. Please refresh your page.`)
            setPage("undefined")
          })
        }
        setPage("main")
      } else {
        setPage("login")
      }
    })
  }, [])

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
            {!isMobile && <NBDesktop />}
            {page == "main" && <h1>Main</h1>}
            {isMobile && <NBMobile />}
          </RootWrapper>
        }
      </FirebaseContext.Provider>
    </ChakraProvider>
  );
}