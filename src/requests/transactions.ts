import { UnifiedError } from '../utils/error.ts'
import { API_HOST } from './config.ts'

interface Transaction {
  id: string,
  description: string,
  created: Date,
  amount: number
}

let evtSource: EventSource | null = null;
let prevCallback: ((event: MessageEvent) => void) | null = null;

export function newConnection(userId: string, accountId: string, lastTransactionId?: string[]) {
  if (evtSource != null) {
    evtSource.close()
  }
  evtSource = new EventSource(`${API_HOST}/api/transactions?userId=${userId}&accountId=${accountId}${lastTransactionId ? "&prevTransnIds=" + lastTransactionId.join(",") : ""}`)
}

export function registerCallback(callback: (data: Transaction) => void) {
  if (prevCallback != null) {
    evtSource?.removeEventListener("transaction", prevCallback)
  }
  const handler = (event: MessageEvent) => {
    const data = JSON.parse(event.data)
    callback({
      id: data["id"],
      description: data["description"],
      created: new Date(data["created"]),
      amount: parseFloat(data["amount"])
    })
  }

  evtSource?.addEventListener("transaction", handler)
  prevCallback = handler
}

export function handleError(callback: (error: UnifiedError) => void) {
  if (evtSource != null) {
    evtSource.onerror = (err) => {
      callback(new UnifiedError(err.type, "SSE Error"))
    }
  }
}
