const containerModel     = require('../models/container');

const {validationResult} = require('express-validator');


exports.createContainer = async function(req,res){

    try{

        const errors = validationResult(req);

        console.log(errors.isEmpty(),errors.array())

        if(!errors.isEmpty()){
          return  res.status(422).send({errors:errors.array()});
        }

        const {item,quantity} = req.body;

        await containerModel.create({item:item,quantity:quantity});

        res.status(200).send("Container saved");

    }catch(err){
        console.log("Error inside createContainer api",err);
    }

}



exports.getAllContainers = async function(req,res){

    try{

        const containers  = await containerModel.find({});

        res.status(200).send({containers:containers})

    }catch(err){

    }
    
}