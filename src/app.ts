import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { routerCompany } from './routes/company'
import { routerProduct } from './routes/product'

const app = express()

app.use(express.json())

app.use(cors())

app.use(routerCompany)
app.use(routerProduct)

export default app
