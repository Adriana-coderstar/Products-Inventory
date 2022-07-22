import { Request, Response, NextFunction } from 'express'
import CompanyService from '../service/CompanyService'
import { Providers } from '@prisma/client'

class Company {
  async create (req: Request, resp: Response, next: NextFunction):
  Promise<Providers | any> {
    try {
      const { company } = req.body

      const newCompany = await CompanyService.create(company)

      newCompany instanceof Error
        ? resp.status(400).json({ error: newCompany.message })
        : resp.status(201).json(newCompany)
    } catch (error: any) {
      resp.status(500).json({ message: error.message })
    }
  }

  async findAll (req: Request, resp: Response, _next: NextFunction):
  Promise<Providers[] | any> {
    try {
      const allCompanies = await CompanyService.findAll()

      return resp.status(200).json(allCompanies)
    } catch (error) {
      console.log(error)
    }
  }

  async findOne (req: Request, resp: Response, _next: NextFunction):
  Promise<Providers | any> {
    try {
      const { company } = req.body

      const findCompany = await CompanyService.findOne(company)

      findCompany instanceof Error
        ? resp.status(400).json({ error: company.message })
        : resp.status(200).json(findCompany)
    } catch (error) {
      console.error(error)
    }
  }

  async update (req: Request, resp: Response, _next: NextFunction):
  Promise<Providers | any> {
    try {
      const { id } = req.params
      const { company } = req.body

      const updateCompany = await CompanyService.update(Number(id),company)

      updateCompany instanceof Error
        ? resp.status(400).json({ message: updateCompany.message })
        : resp.status(200).json(updateCompany)
    } catch (error) {
      console.error(error)
    }
  }

  async delete (req: Request, resp: Response, _next: NextFunction):
  Promise<string | any> {
    try {
      const { company } = req.body

      const deleteCompany = await CompanyService.delete(company)

      deleteCompany instanceof Error
        ? resp.status(400).json({ message: deleteCompany.message })
        : resp.status(200).send({ message: 'Successfully deleted' })
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Company()
