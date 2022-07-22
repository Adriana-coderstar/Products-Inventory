import { Products } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import ProductService from '../service/ProductService'

class Product {
  async create (req: Request, resp: Response, _next: NextFunction):
  Promise<Products | any> {
    try {
      const { name, quantity,category, idProvider } = req.body

      const newProduct = await ProductService.create(
        { name, quantity, category, idProvider })

      newProduct instanceof Error
        ? resp.status(404).json({ error: newProduct.message })
        : resp.status(201).json(newProduct)
    } catch (error) {
      console.log(error)
    }
  }

  async findAll (req: Request, resp: Response, _next: NextFunction):
  Promise<Products[] | any> {
    try {
      const allProducts = await ProductService.findAll()

      return resp.status(200).json(allProducts)
    } catch (error) {
      console.error(error)
    }
  }

  async findOne (req: Request, resp: Response, _next: NextFunction):
  Promise<Products | any> {
    try {
      const { name } = req.body

      const product = await ProductService.findOne(name)

      product instanceof Error
        ? resp.status(404).json({ error: product.message })
        : resp.status(200).json(product)
    } catch (error) {
      console.error(error)
    }
  }

  async update (req: Request, resp: Response, next: NextFunction):
  Promise<Products | any> {
    try {
      const id = Number(req.params.id)

      const { name, quantity, category } = req.body

      const updateProducts = await ProductService.update(
        { id, name, quantity, category })

      return resp.status(200).json(updateProducts)
    } catch (error) {
      console.error(error)
    }
  }

  async delete (req: Request, resp: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const { name } = req.body

      const deleteProduct = await ProductService.delete(name)

      deleteProduct instanceof Error
        ? resp.status(400).json({ error: deleteProduct.message })
        : resp.status(200).send('Successfully deleted')
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Product()
