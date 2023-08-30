import  express from "express"
import { handleError } from "./error"
import 'reflect-metadata'
import { courseRoute } from "./routes/courses.routes"
const app = express()

app.use(express.json())

app.use('/cursos', courseRoute)

app.use(handleError)
export default app