import { Router } from 'express'
import ProductController from '../controller/ProductController'
import ProductValidate from '../middleware/ValidateProduct'

export const routerProduct = Router()

routerProduct.post('/product',ProductValidate.validateError,
  ProductController.create)

routerProduct.get('/allProduct',ProductValidate.validateFindAll,
  ProductController.findAll)

routerProduct.get('/product',ProductValidate.validateFindOne,
  ProductController.findOne)

routerProduct.put('/product/:id',ProductValidate.validateError,
  ProductController.update)

routerProduct.delete('/product',ProductValidate.validateFindOne,
  ProductController.delete)
