import firebaseSdkConfig from "./firebaseConfig.json"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

export function App() {
  const config = firebaseSdkConfig.result.sdkConfig
  const app = initializeApp(config)
  const analytics = getAnalytics(app)

  console.log(app)

  return <h1>{process.env.NODE_ENV} 12345</h1>;
}