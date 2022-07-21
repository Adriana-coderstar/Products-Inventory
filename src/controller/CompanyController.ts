import { Request, Response, NextFunction } from 'express'

class Company {
  async create (req: Request, resp: Response, next: NextFunction) {}
  async findAll (req: Request, resp: Response, next: NextFunction) {}
  async findOne (req: Request, resp: Response, next: NextFunction) {}
  async update (req: Request, resp: Response, next: NextFunction) {}
  async delete (req: Request, resp: Response, next: NextFunction) {}
}

export default new Company()
