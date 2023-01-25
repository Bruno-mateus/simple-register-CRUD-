import express from 'express'
import { routes } from '../routes'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(express.json())
app.use(routes)

app.listen(3333,()=>{
    console.log('listening on http://localhost:3333')
}) 