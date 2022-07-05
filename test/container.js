const containerModel = require('../src/models/container');
const userModel = require('../src/models/user');

const server = require('../server');


const chai  = require('chai');
const expect = chai.expect;
const chaiHttp  = require('chai-http');

chai.use(chaiHttp);



describe("Testing createContainer api",()=>{

    it("when the end user has no accessToken in fetching '/container/createContainer' ",(done)=>{

    });

    it("when accessToken provided is empty in authorization key of headers  ",(done)=>{

    });


    it("when accessToken provided is corrupted ",(done)=>{

    });

    it("when accessToken is a valid one ",(done)=>{

    });

})



describe("Testing getAllContianer api",()=>{

    it("when the end user has no accessToken in fetching '/container/getAllContainers' ",(done)=>{

    });

    it("when accessToken provided is empty in authorization key of headers  ",(done)=>{

    });

    it("when accessToken provided is corrupted ",(done)=>{

    });

    it("when accessToken is a valid one ",(done)=>{

    });

})