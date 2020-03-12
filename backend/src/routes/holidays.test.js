const app = require('../../index')
    ,chai = require('chai')
    ,chaiHttp = require('chai-http')
    ,expect = chai.expect
    ,moment = require('moment')

process.env.NODE_ENV = 'test'
require('dotenv-flow').config()

chai.use(chaiHttp)
chai.should()

describe('/holidays', () => {
    
    it('it should return 200', done => {
        chai.request(app)
            .get('/holidays')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })

    it('it should return a non empty array of holidays', done => {
        chai.request(app)
            .get('/holidays')
            .end((err, res) => {
                const payload = res.body
                expect(payload.length).gt(0)
                done()
            })
    })

    it('it should only return upcoming holidays', done => {
        chai.request(app)
            .get('/holidays')
            .end((err, res) => {
                const payload = res.body
                const dates = payload.map(item => item.date);
                expect(payload.length).gt(0)
                const now = moment().startOf('day')
                for(i=0; i<dates.length; i++) {
                    expect(moment(dates[i], "dddd, Do MMMM YYYY").isSameOrAfter(now)).to.be.true
                }
                done()
            })
    })
})