import express, { Express } from 'express'
import { CORS } from './middlewares'
import { PORT } from './config'

const app: Express = express()

app.use(CORS)

app.listen(PORT, () => {
  console.log(`Server runnning at http://localhost:${PORT}`)
})
