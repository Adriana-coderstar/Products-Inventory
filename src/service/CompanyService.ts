import { PrismaClient ,Providers } from '@prisma/client'

const prisma = new PrismaClient()

class Company {
  async create (company: string): Promise<Providers | Error> {
    const checkCompanyExists = await prisma.providers.findFirst(
      { where: { company } })

    if (checkCompanyExists) {
      return new Error('Company already exists')
    }

    return await prisma.providers.create({
      data: {
        company
      }
    })
  }

  async findAll (): Promise<Providers[] | Error> {
    const allCompanies = await prisma.providers.findMany({
      orderBy: [
        {
          id: 'asc'
        }
      ]
    })

    return allCompanies
  }

  async findOne (company: string): Promise<Providers | Error> {
    const findParamsCompany = await prisma.providers.findFirst(
      { where: { company } })

    if (!findParamsCompany) {
      return new Error('This company does not exist')
    }
    return findParamsCompany
  }

  async update (id: number,company: string): Promise<Providers | Error> {
    const findParams = await prisma.providers.findUnique({ where: { id } })

    if (!findParams) {
      return new Error('This company does not exist')
    }

    return await prisma.providers.update(
      {
        where: { id: findParams.id },
        data: { company }
      })
  }

  async delete (company: string): Promise<Providers | Error> {
    const findParams = await prisma.providers.findFirst({ where: { company } })

    if (!findParams) {
      return new Error('This company does not exist')
    }
    return await prisma.providers.delete({ where: { id: findParams.id } })
  }
}

export default new Company()
