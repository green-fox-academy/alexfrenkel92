'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');
const bodyParser = require('body-parser');

const noTranslation = ({
    error: 'I am Groot!'
})

const translated = ({
    Received: "blabla",
    Translated: "I am Groot!"
})

describe('groot endpoints work', () => {
    // it('groot no translation', () => {
    //     request(app)
    //         .get('/groot/')
    //         .expect(404)
    //         .query({ message: '' })
    //         .end((err, res) => {
    //             expect(res.body).to.deep.equal(noTranslation);
    //         })
    // })

    it('groot no translation', async() => {
        let res = await request(app)
            .get('/groot/')
            .expect(404);
            expect(res.body).to.deep.equal(noTranslation);
    })

    it('groot translated', () => {
        request(app)
            .get('/groot')
            .query({ message: 'blabla' })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.deep.equal(translated);
            })
        })
})