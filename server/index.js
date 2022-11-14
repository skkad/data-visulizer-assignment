const express = require('express')
const app = express();
// const requests = require('request');

require('./db/connectDB');

app.use(express.urlencoded({extended: false}))

app.get('/getdata',(req,res)=>{
    // res.send('Hello data')
    // res.json({});
    console.log("getdata is on");
    // requests('http://localhost:5000/getdata')
    // .on('data',(chunk)=>{
    //     const objData = JSON.parse(chunk);
    //     const arrData = [objData];
    // })
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server runing ${PORT}`);
})