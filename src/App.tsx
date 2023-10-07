import firebaseSdkConfig from "./firebaseConfig.json"
import { initializeApp } from "firebase/app"
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseContext } from './contexts/FirebaseContext'
import Login from './pages/Login'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import GenericLoading from './pages/GenericLoading'

type Page = "undefined" | "login" | "main"

export function App() {
  const config = firebaseSdkConfig.result.sdkConfig
  const app = initializeApp(config)
  const auth = getAuth()

  const [page, setPage] = useState<Page>("undefined")

  auth.onAuthStateChanged((user) => {
    if (user) {
      setPage("main")
    } else {
      setPage("login")
    }
  })

  return (
    <ChakraProvider>
      <FirebaseContext.Provider value={app}>
        {page == "undefined" && <GenericLoading />}
        {page == "login" && <Login />}
        {page == "main" && <h1>Main</h1>}
      </FirebaseContext.Provider>
    </ChakraProvider>
  );
}