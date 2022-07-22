import { Router } from 'express'
import CompanyController from '../controller/CompanyController'
import ValidateCompany from '../middleware/ValidateCompany'

export const routerCompany = Router()

routerCompany.post('/company',ValidateCompany.validateError,
  CompanyController.create)

routerCompany.get('/companys',
  CompanyController.findAll)

routerCompany.get('/company', ValidateCompany.validateFindOne,
  CompanyController.findOne)

routerCompany.put('/company/:id', ValidateCompany.validateError,
  CompanyController.update)

routerCompany.delete('/company/', ValidateCompany.validateFindOne,
  CompanyController.delete)
