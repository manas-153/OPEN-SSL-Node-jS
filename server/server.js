const express= require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const path=require('path');
const https = require("https");
const fs=require('fs');

const cors=require('cors');

const app= express();
const PORT = process.env.PORT || 8000;

// middlewares 

app.use(bodyParser.json());
app.use(cors());


// express_routing 

app.get('/',(req,res)=>
{
  res.sendFile(path.join(__dirname, "../", 'view', 'index.html'));
})

// create ssl server 

https.createServer({
  
  key:fs.readFileSync(path.join(__dirname, '../','SSL','key.pem')),
  cert:fs.readFileSync(path.join(__dirname, '../','SSL','certificate.pem'))

},app).listen(PORT,()=>
{
   console.log(`Server is started on ${PORT} port`)
})
    
  
  
