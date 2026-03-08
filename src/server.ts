import "source-map-support/register"
import express from 'express'
import cors from 'cors'
import morgan from "morgan"
import { testRouter } from "./routes/test"
import { patientRouter } from "./routes/patient"
import errorHandler from "./middleware/errorHandler"

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use("/tests", testRouter)
app.use("/patients", patientRouter)

app.use(errorHandler)
export default app;