import { Action, createActionsHook, createStateHook, createStore } from 'react-sweet-state'
import { addDoc, collection, doc, Firestore, getDocs, query, updateDoc, where, deleteField } from 'firebase/firestore'
import { loginWithCreds } from '../requests/auth.ts'

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
  setAccount: (db: Firestore, userId: string, account: Account, creds: string | undefined, onSuccess: () => void, onError: (error: never) => void): Action<BankState> => async ({setState}) => {
    setState({loading: true, state: null})
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
            timestamp: new Date(obj.data()["timestamp"]),
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

      setState({
        loading: false,
        state: {
          ...account,
          transactions: transactions
        }
      })
      onSuccess()
    } catch (e) {
      setState({loading: false, state: null})
      onError(e as never)
    }
  },
  loadFirstAccount: (db: Firestore, userId: string, onSuccess: () => void, onError: (error: never) => void): Action<BankState> => async ({getState, setState}) => {
    if (getState().state == null) {
      setState({loading: true, state: null})
      try {
        const accountSnapshot = await getDocs(query(collection(db, userId),
          where("recordType", "==", "bankAccount")))
        for (const doc of accountSnapshot.docs) {
          if (doc.data()["credentials"]) {
            const accounts = await loginWithCreds(userId, doc.data()["credentials"])
            const account = accounts.filter((obj: {accountNumber: string}) => obj.accountNumber == doc.data()["id"])[0]

            const transnSnapshot = await getDocs(collection(db, userId, account.accountNumber, "transactions"))
            const transactions = transnSnapshot.docs.map((obj) => {
              return {
                id: obj.data()["id"],
                description: obj.data()["description"],
                timestamp: new Date(obj.data()["timestamp"]),
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

            setState({
              loading: false,
              state: {
                name: account.name,
                balance: account.funds,
                id: account.accountNumber,
                transactions: transactions
              }
            })
            onSuccess()
            break
          }
        }
        setState({loading: false, state: null})
      } catch (e) {
        setState({loading: false, state: null})
        onError(e as never)
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

