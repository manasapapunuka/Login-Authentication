const express = require('express')
const app = express()
const port = 5000
const mongoDB=require('./db');

const cors = require("cors");
app.use(cors(
  {  
    origin: ["https://login-authentication-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials: true

  }
));




app.get('/', (request, response) => {
  response.send('Hello World!')
})


//middleware->default route
app.use(express.json())
app.use('/api',require("./Routes/User"));

//assigning port no.
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})




//invalid path
const invalidPathmw=(request,response,next)=>{
    response.send({message:"Invalid path"});  
    //response.send({message:`$(request.path) is not valid`})-problem
}
app.use("*",invalidPathmw);


 //error handling middleware
 const errhandlingMiddleware=(error,request,response,next)=>{
    console.log("error mw");
    response.send({message: error.message });
 };
 app.use(errhandlingMiddleware);


