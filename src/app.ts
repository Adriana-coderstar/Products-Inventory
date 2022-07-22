import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'

import { routerCompany } from './routes/company.routes'
import { routerProduct } from './routes/product.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(routerCompany)
app.use(routerProduct)

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

export default app
