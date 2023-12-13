const express=require('express');
const app=express();

const dotenv=require('dotenv');

dotenv.config({
    path:"backend/config/config.env"
})


const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})