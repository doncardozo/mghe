
import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import { HOST, PORT } from './config/env.js'
import db from './config/database.js'
import ar from './config/archivo.json' assert { type: 'json' }

console.log("\n.....",ar.titulo,"--------\n")

const app = express();

app.use(express.json())
app.use(cors())
app.use(logger('dev'));

try {
  await db.authenticate()
  console.log("Connnected to database!")
} catch(err) {
  console.error("Unable to connect to the database", err)
}

import Index from './routes/index.js'

app.use(Index)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});