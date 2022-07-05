const {validationResult} = require('express-validator');

const bcryptjs      = require('bcryptjs');

const jwt           = require('jsonwebtoken');

const userModel     = require('../models/user');



exports.register = async function(req,res){

    try{

        const errors = validationResult(req);

        //console.log(errors.isEmpty(),errors.array())

        if(!errors.isEmpty()){
          return  res.status(422).send({errors:errors.array()});
        }


        const {name,email,password} = req.body;

        const hashedPassword = bcryptjs.hashSync(password,bcryptjs.genSaltSync(10));

        await userModel.create({name:name,email:email,password:hashedPassword});

        res.status(200).send("User registration Success");

    }catch(err){

        console.log("Error inside register api",err);

    }

}


exports.login = async function(req,res){

    try{
        
        const {email,password} = req.body;

        if(!(email && password)){
            return res.status(401).send("Please provide name and password to login");
        }

        const user = await userModel.findOne({email:email});

        if(!user){
            return res.status(401).send(`No such user exists with the given email ${email} `);
        }

        const isValidPassword  = bcryptjs.compareSync(password,user.password);

        if(!isValidPassword){
            return res.status(401).send(`Password for ${email} is incorrect `);
        }


        const accessToken = jwt.sign({name:user.name,email:user.email},process.env.SECRET_TOKEN,{expiresIn:process.env.SECRET_TOKEN_EXP})

        res.status(200).send({accessToken:accessToken});


    }catch(err){
            console.log("Error inside login api ",err);
    }
    
}

