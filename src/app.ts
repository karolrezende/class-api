import  express from "express"
import "express-async-errors"
import { handleError } from "./error"
import 'reflect-metadata'
import { courseRoute } from "./routes/courses.routes"
import { loginRoute } from "./routes/login.routes"
import { personRoute } from "./routes/person.routes"
const app = express()

app.use(express.json())

app.use('/cursos', courseRoute)
app.use('/pessoa', personRoute)
app.use('/login', loginRoute)

app.use(handleError)
export default app

//terminar rota delete em courses, fazer login