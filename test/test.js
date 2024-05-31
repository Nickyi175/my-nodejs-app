// test/test.js
const request = require('supertest');
const app = require('../src/index'); // Asegúrate de ajustar la ruta según sea necesario

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});
