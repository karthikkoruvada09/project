const userModel = require('../src/models/user');

const server = require('../server');

const chai  = require('chai');
const expect = chai.expect;
const chaiHttp  = require('chai-http');

chai.use(chaiHttp);


let test = 0;

beforeEach(()=>{
    console.log("Running test no----",test);
})



describe("Testing register api /user/register",()=>{

    before((done)=>{
        userModel.remove({},(err)=>{
            done();
        })
    })

    it("When none of the name,password,email are provided",(done)=>{

        const user = {name:"karthik",email:"",password:"password"};

        chai.request(server)
        .post("/user/register")
        .send(user)
        .end((err,response)=>{
            expect(response.status).to.be.equal(422)
            // expect(response.body.errors[0].msg).to.be.equal("Invalid value");
            // expect(response.body.errors[0].param).to.be.equal("body");
            done()
        })
    })

    it("When name,password,email are provided",(done)=>{

        const user = {name:"karthik",email:"karthik@gmail.com",password:"password"};

            chai.request(server)
            .post("/user/register")
            .send(user)
            .end((err,response)=>{
                expect(response.status).to.be.equal(200);
                //expect(response.body).to.be.equal("User registration Success");
                done()
            })
    })
})




describe("Testing login api /user/login ",()=>{


    it("when email or password is missing",(done)=>{

        const user = {email:"",password:"password"};

        chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err,res)=>{
            expect(res.status).to.be.equal(401);
            //expect(res.body)
            expect(res.body).to.be.equal("Please provide name and password to login");
            done();
        })
    })

    it("when email is invalid",(done)=>{

        const user = {email:"karthik@gmaqqil.com",password:"password"};

        chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err,res)=>{
            console.log(res.status)
            expect(res.status).to.be.equal(401);
            expect(res.body).to.be.equal(`No such user exists with the given email ${email} `)
            //exprecct
            done();
        })
        
    })

    it("when email is valid but password is invalid",(done)=>{

        const user = {email:"karthik@gmail.com",password:"password1"};

        chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err,res)=>{
            console.log(res.status)
            expect(res.status).to.be.equal(401);
            expect(res.body).to.be.equal(`Password for ${user.email} is incorrect`)
            //exprecct
            done();
        })
    })

    it("when email and password both are valid",(done)=>{

        const user = {email:"karthik@gmail.com",password:"password"};

        chai.request(server)
        .post('/user/login')
        .send(user)
        .end((err,res)=>{
            console.log(res.status)
            expect(res.status).to.be.equal(200);
            expect(res.body.accessToken).not.to.be.empty;
            //exprecct
            done();
        })
        
    })
})




