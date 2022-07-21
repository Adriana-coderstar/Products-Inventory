import { Router } from 'express'
import CompanyController from '../controller/CompanyController'

export const routerCompany = Router()

routerCompany.post('/company', CompanyController.create)

// routerCompany.get('./company', CompanyController.findAll)
// routerCompany.get('./company', CompanyController.findOne)
// routerCompany.put('./company', CompanyController.update)
// routerCompany.delete('./company', CompanyController.delete)
