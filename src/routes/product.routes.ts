import { Router } from 'express'
import ProductController from '../controller/ProductController'

export const routerProduct = Router()

routerProduct.post('./product', ProductController.create)
routerProduct.get('./product', ProductController.findAll)
routerProduct.get('./product', ProductController.findOne)
routerProduct.put('./product/:id', ProductController.update)
routerProduct.delete('./product/:id', ProductController.delete)
