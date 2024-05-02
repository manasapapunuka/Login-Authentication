
const jwt=require("jsonwebtoken")

const verifyToken=(request,response,next)=>{
    const bearerToken=request.headers.authorization;
    if(bearerToken===undefined){
        response.status(200).send({mesg:"unauthorized access..please login first"})
    }
    else{
        //if bearer token exists
        const token=bearerToken.split(""[1])
        try{
            jwt.verify[token,"abcdefgh"]
            next()            
        }
        catch(err){
            next(new Error("session expired.please relogin to continue"))
            
        }
    }
}

module.exports=verifyToken;