import axios from 'axios'
import { API_HOST } from './config.ts'
import { JSEncrypt } from 'jsencrypt'

export async function login(userId: string, username: string, password: string) {
  const pubKey = (await axios.get(`${API_HOST}/auth/pubkey`)).data
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(pubKey)
  const encrypted = encrypt.encrypt(`${username} ${password}`)
  const res = await axios.post(`${API_HOST}/auth/login?userId=${userId}`, toBytes(encrypted.toString()), { headers: { 'Content-Type': "application/octet-stream" } })
  return {data: res.data, credentials: encrypted.toString()}
}

export async function loginWithCreds(userId: string, creds: string) {
  const res = await axios.post(`${API_HOST}/auth/login?userId=${userId}`, toBytes(creds.toString()), { headers: { 'Content-Type': "application/octet-stream" } })
  return res.data
}

function toBytes(b64string: string) {
  const byteChars = atob(b64string)
  const byteNums = new Array(byteChars.length)
  for (let i = 0; i < byteChars.length; i++) {
    byteNums[i] = byteChars.charCodeAt(i)
  }
  return new Uint8Array(byteNums)
}
