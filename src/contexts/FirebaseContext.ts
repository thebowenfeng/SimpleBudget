import { createContext } from 'react'
import { FirebaseApp } from "firebase/app"

export const FirebaseContext = createContext<FirebaseApp | undefined>(undefined);