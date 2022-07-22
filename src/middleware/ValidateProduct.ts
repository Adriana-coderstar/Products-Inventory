import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import { validade } from '../schema/schema'

const prisma = new PrismaClient()

export class ProductValidate {
  async validateError (req: Request, res: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const { name, quantity, category, idProvider } = req.body

      const emptyName = validade(name,400, 'Name field is empty')

      if (emptyName) {
        return res.status(emptyName.code)
          .json({ message: emptyName.message })
      }
      const emptyQuantidade = validade(quantity,400, 'Quantity field is empty')

      if (emptyQuantidade) {
        return res.status(emptyQuantidade.code)
          .json({ message: emptyQuantidade.message })
      }

      const emptyCategory = validade(category,400, 'Category field is empty')

      if (emptyCategory) {
        return res.status(emptyCategory.code)
          .json({ message: emptyCategory.message })
      }

      if (idProvider === 0 || !idProvider.trim()) {
        return res.status(400).json({ message: 'idProvider notFound' })
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }

  async validateFindAll (req: Request, res: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const allProducts = await prisma.products.findMany()

      if (allProducts.length === 0) {
        return res.status(404).json(
          { message: 'There are no products registered' })
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }

  async validateFindOne (req: Request, res: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const { name } = req.body

      const emptyName = validade(name,400, 'Name field is empty')

      if (emptyName) {
        return res.status(emptyName.code)
          .json({ message: emptyName.message })
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}

export default new ProductValidate()
