import  express from "express"
import { handleError } from "./error"
import 'reflect-metadata'
const app = express()

app.use(express.json())
app.use(handleError)
export default app