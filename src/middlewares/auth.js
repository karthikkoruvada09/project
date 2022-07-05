const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){

   try{

        let authToken  = req.headers.authorization;

        if(!authToken){
        return   res.status(403).send("This user has no access to this api.AccessToken required in headers");
        }

        authToken = authToken.split(' ')[1];

        if(!authToken){
            return   res.status(403).send("Reveived empty accesstoken from headers");
        }

        const isValidToken = jwt.verify(authToken,process.env.SECRET_TOKEN);

        console.log("isValidToken-------",isValidToken);

        if(!isValidToken){
            return   res.status(403).send("Received invalid accesssToken. Please login again");
        }

        next();

   }catch(err){
        console.log("Error inside auth middleware");
   }

}