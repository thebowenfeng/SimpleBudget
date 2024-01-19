import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import { addDoc, collection, doc, Firestore, getDocs, query, updateDoc, where, deleteField } from 'firebase/firestore'
import { loginWithCreds } from '../requests/auth.ts'
import { UnifiedError } from '../utils/error.ts'
import axios from 'axios'
import { handleAxiosError } from '../requests/config.ts'
import { FirebaseError } from '@firebase/util'
import { newConnection } from '../requests/transactions.ts'

interface Transaction {
  id: string,
  description: string,
  timestamp: Date,
  amount: number,
  category: string
}

interface Account {
  name: string,
  balance: number,
  id: string,
  transactions: Transaction[]
}

export type BankState = {loading: boolean, state: Account | null}
export type BankActions = typeof actions

export const actions = {
  setAccount: (db: Firestore, userId: string, account: Account, creds: string | undefined, onSuccess: () => void, onError: (error: UnifiedError) => void): Action<BankState> => async ({getState, setState}) => {
    setState({...getState(), loading: true})
    try {
      const accountSnapshot = await getDocs(query(collection(db, userId),
        where("recordType", "==", "bankAccount"), where("id", "==", account.id)))

      let transactions: Transaction[] = []
      if (!accountSnapshot.empty) {
        // Update password preferences
        await updateDoc(doc(db, userId, accountSnapshot.docs[0].id), {
          credentials: creds != undefined ? creds : deleteField()
        })

        const transnSnapshot = await getDocs(collection(db, userId, accountSnapshot.docs[0].id, "transactions"))
        transactions = transnSnapshot.docs.map((obj) => {
          return {
            id: obj.data()["id"],
            description: obj.data()["description"],
            timestamp: obj.data()["timestamp"].toDate(),
            amount: parseFloat(obj.data()["amount"]),
            category: ""
          }
        })
        transactions.sort((a, b) => {
          if (a.timestamp < b.timestamp) {
            return -1
          } else if (a.timestamp > b.timestamp) {
            return 1
          }
          return 0
        })
      } else {
        await addDoc(collection(db, userId), {
          recordType: "bankAccount",
          id: account.id,
          ...(creds != undefined && {credentials: creds})
        })
      }

      const lastTransnId = transactions.length > 0 ? transactions[transactions.length - 1].id : undefined
      newConnection(userId, account.id, lastTransnId)

      setState({
        loading: false,
        state: {
          ...account,
          transactions: transactions
        }
      })
      onSuccess()
    } catch (e: unknown) {
      setState({loading: false, state: null})
      if (e instanceof FirebaseError) {
        onError(new UnifiedError(e.code, e.message))
      } else {
        onError(new UnifiedError("Error", (e as Error).message))
      }
    }
  },
  loadFirstAccount: (db: Firestore, userId: string, onSuccess: () => void, onError: (error: UnifiedError) => void): Action<BankState> => async ({getState, setState}) => {
    if (getState().state == null) {
      setState({loading: true, state: null})
      try {
        const accountSnapshot = await getDocs(query(collection(db, userId),
          where("recordType", "==", "bankAccount")))
        for (const doc of accountSnapshot.docs) {
          if (doc.data()["credentials"]) {
            const accounts = await loginWithCreds(userId, doc.data()["credentials"])
            const account = accounts.filter((obj: {accountNumber: string}) => obj.accountNumber == doc.data()["id"])[0]

            const transnSnapshot = await getDocs(collection(db, userId, doc.id, "transactions"))
            const transactions = transnSnapshot.docs.map((obj) => {
              return {
                id: obj.data()["id"],
                description: obj.data()["description"],
                timestamp: obj.data()["timestamp"].toDate(),
                amount: parseFloat(obj.data()["amount"]),
                category: ""
              }
            })
            transactions.sort((a, b) => {
              if (a.timestamp < b.timestamp) {
                return -1
              } else if (a.timestamp > b.timestamp) {
                return 1
              }
              return 0
            })

            const lastTransnId = transactions.length > 0 ? transactions[transactions.length - 1].id : undefined
            console.log(transactions)
            newConnection(userId, account.accountNumber, lastTransnId)

            setState({
              loading: false,
              state: {
                name: account.name,
                balance: account.balance,
                id: account.accountNumber,
                transactions: transactions
              }
            })
            onSuccess()
            return
          }
        }
        setState({loading: false, state: null})
      } catch (e: unknown) {
        setState({loading: false, state: null})
        if (axios.isAxiosError(e)) {
          onError(handleAxiosError(e))
        } else if (e instanceof FirebaseError) {
          onError(new UnifiedError(e.code, e.message))
        } else {
          onError(new UnifiedError("Error", (e as Error).message))
        }
      }
    }
  },
  addTransaction: (db: Firestore, userId: string, transaction: Transaction, onSuccess: () => void, onError: (error: UnifiedError) => void): Action<BankState> => async ({getState, setState}) => {
    const oldState = getState()
    if (oldState.state != null && !oldState.loading) {
      try {
        const newTransactions = [...oldState.state.transactions, transaction]
        setState({
          loading: false,
          state: {
            ...oldState.state,
            transactions: newTransactions
          }
        })

        const docId = (await getDocs(query(collection(db, userId),
          where("recordType", "==", "bankAccount"),
          where("id", "==", oldState.state.id)))).docs[0].id

        await addDoc(collection(db, userId, docId, "transactions"), {
          id: transaction.id,
          description: transaction.description,
          timestamp: transaction.timestamp,
          amount: transaction.amount,
        })
        onSuccess()
      } catch (e) {
        const reverted = getState().state?.transactions.filter((obj) => obj.id != transaction.id)
        setState({
          loading: false,
          state: {
            ...oldState.state,
            transactions: reverted as Transaction[]
          }
        })

        if (e instanceof FirebaseError) {
          onError(new UnifiedError(e.code, e.message))
        } else {
          onError(new UnifiedError("Error", (e as Error).message))
        }
      }
    }
  }
}
const initialState: BankState = {loading: false, state: null}

const store = createStore<BankState, BankActions>({
  initialState,
  actions
})

export const useBankState = createStateHook(store)
export const useBankActions = createActionsHook(store)

