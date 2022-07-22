import { PrismaClient, Products } from '@prisma/client'
import { IProduct } from '../interface/IProduct'

const prisma = new PrismaClient()

class ProductService {
  async create ({ name, quantity, category, idProvider }: IProduct):
  Promise<Products | Error> {
    const checkProductExists = await prisma.products.findFirst(
      { where: { name } })

    console.log(checkProductExists)

    if (checkProductExists) {
      return new Error('Product already exists')
    }

    const newProduct = await prisma.products.create({
      data: {
        name,
        quantity: Number(quantity),
        category,
        idProvider: Number(idProvider)
      }
    })

    return newProduct
  }

  async findAll (): Promise<Products[] | Error> {
    const allProducts = await prisma.products.findMany({
      orderBy: [
        {
          id: 'asc'
        }
      ]
    })
    return allProducts
  }

  async findOne (name: string): Promise<Products | Error> {
    const product = await prisma.products.findFirst(
      { where: { name } })

    if (!product) {
      return new Error('Not found')
    }
    return product
  }

  async update ({ id, name, quantity, category }: IProduct):
  Promise<Products | Error> {
    const updateProducts = await prisma.products.update({
      where: { id },
      data: {
        name,
        quantity: Number(quantity),
        category
      }
    })

    return updateProducts
  }

  async delete (name: string): Promise<any | Error> {
    const findParams = await prisma.products.findFirst(
      { where: { name } })

    if (!findParams) {
      return new Error('This product does not exist')
    }

    await prisma.products.delete({
      where: { id: findParams.id }
    })
  }
}

export default new ProductService()
