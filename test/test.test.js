const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
    let server;

    beforeAll(() => {
        server = app.listen(4000);
    });

    afterAll((done) => {
        server.close(done);
    });

    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});
