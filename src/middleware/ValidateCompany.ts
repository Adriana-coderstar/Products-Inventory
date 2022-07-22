import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import { validade } from '../schema/schema'

const prisma = new PrismaClient()

export class CompanyValidate {
  async validateError (req: Request, res: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const { company } = req.body

      const emptyCompany = validade(company,400, 'Name company field is empty')

      if (emptyCompany) {
        return res.status(emptyCompany.code)
          .json({ message: emptyCompany.message })
      }
      const checkCompanyExists = await prisma.providers.findFirst(
        {
          where: {
            company
          }

        })

      if (checkCompanyExists) {
        return res.status(400).json({ message: 'Company already exists' })
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }

  async validateFindOne (req: Request, res: Response, next: NextFunction):
  Promise<string | any> {
    try {
      const { company } = req.body

      const emptyCompany = validade(company,400, 'Name company field is empty')

      if (emptyCompany) {
        return res.status(emptyCompany.code)
          .json({ message: emptyCompany.message })
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}

export default new CompanyValidate()
