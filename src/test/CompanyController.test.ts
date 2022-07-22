import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'

describe('Should company register', () => {
  beforeAll(async () => {
    await prisma.providers.deleteMany({ where: {} })
    await prisma.products.deleteMany({ where: {} })
    await prisma.providers.createMany({
      data: [
        {
          id: 998,company: 'Company1'
        },{
          id: 999,company: 'Company1'
        }
      ]
    })
  })

  afterAll(async () => {
    await prisma.providers.deleteMany({ where: {} })
    await prisma.products.deleteMany({ where: {} })
    await prisma.$disconnect()
  })

  it('Should new create company',(done) => {
    void request(app).post('/company')
      .send({ company: 'Company3' })
      .then(res => {
        expect(res.statusCode).toEqual(201)
        expect(res.body.error).toBeUndefined()
        return done()
      })
  })
  it('Should new create company',(done) => {
    void request(app).post('/company')
      .send({ compan: 'Company1' })
      .then(res => {
        expect(res.statusCode).toEqual(500)
        expect(res.body).toEqual({
          error:
          "Cannot read properties of undefined (reading 'length')"
        })
        return done()
      })
  })
  it('Should get all company',(done) => {
    void request(app).get('/companys')
      .then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.error).toBeUndefined()
        expect(res.body.length).toBeGreaterThanOrEqual(1)

        return done()
      })
  })
  it('Should error create company empty',(done) => {
    void request(app).post('/company')
      .send({ company: '' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toEqual({ message: 'Name company field is empty' })
        return done()
      })
  })
  it('Should error create company space empty',(done) => {
    void request(app).post('/company')
      .send({ company: '            ' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toEqual({ message: 'Name company field is empty' })
        return done()
      })
  })
  it('Should error create company existing',(done) => {
    void request(app).post('/company')
      .send({ company: 'Empresa1' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toEqual({ message: 'Company already exists' })
        return done()
      })
  })
  it('Should update error company does not exist',(done) => {
    void request(app).put('/company/500')
      .send({ company: 'NotFound' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toEqual({ message: 'This company does not exist' })
        return done()
      })
  })
  it('Should update error company does not exist',(done) => {
    void request(app).put('/company/998')
      .send({ company: 'NotFound' })
      .then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.error).toBeUndefined()
        return done()
      })
  })
})
