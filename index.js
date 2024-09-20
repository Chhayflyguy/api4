const express=require("express");
const data=require("./MOCK_DATA-3.json");
const app=express();

app.get("/testcal",(req, res)=>{
    return res.json(data);
} );

app.listen(3000, console.log(`port : 3000`));