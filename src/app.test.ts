import request from 'supertest'
import app from './app'

describe('Testando endpoint não encontrado', () => {
  it('Testa erro 404', (done) => {
    void request(app).get('/teste')
      .then(resp => {
        expect(resp.body).toHaveProperty('error')
        expect(resp.statusCode).toEqual(404)
        expect(resp.body.error).toEqual('Endpoint not found')
        return done()
      })
  })
})
