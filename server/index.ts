import express, { Express } from 'express'
import cors from 'cors'
import { PORT } from './config'
import schema from './graphql/schema'
import { graphqlHTTP } from 'express-graphql'

const app: Express = express()

// CORS
app.use(cors())

// Graphql
app.use(
  '/graphql',
  express.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(PORT, () => {
  console.log(`Server runnning at http://localhost:${PORT}`)
  console.log(`Graphql IDE Server runnning at http://localhost:${PORT}/graphql`)
})
