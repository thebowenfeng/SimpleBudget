import { AxiosError } from 'axios'
import { UnifiedError } from '../utils/error.ts'

export const API_HOST = import.meta.env.DEV ? "http://localhost:8080" : ""

export function handleAxiosError(e: AxiosError) {
  if (e.response) {
    return new UnifiedError(e.code as string, e.response.data as string)
  } else if (e.request) {
    return new UnifiedError(e.code as string, e.request)
  } else {
    return new UnifiedError(e.code as string, e.message)
  }
}
