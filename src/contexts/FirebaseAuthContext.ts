import { createContext } from 'react'
import { User } from 'firebase/auth'

export const FirebaseAuthContext = createContext<User | null>(null)