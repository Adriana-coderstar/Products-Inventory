import { Request, Response, NextFunction } from 'express'
import CompanyService from '../service/CompanyService'

class Company {
  async create (req: Request, resp: Response, next: NextFunction):
  Promise<void> {
    try {
      const { company } = req.body

      const newCompany = await CompanyService.create(company)

      newCompany instanceof Error
        ? resp.status(400).json({ error: newCompany.message })
        : resp.status(201).json(newCompany)
    } catch (error) {
      console.log(error)
      return next(error)
    }
  }

  async findAll (req: Request, resp: Response, next: NextFunction) {}
  async findOne (req: Request, resp: Response, next: NextFunction) {}
  async update (req: Request, resp: Response, next: NextFunction) {}
  async delete (req: Request, resp: Response, next: NextFunction) {}
}

export default new Company()
