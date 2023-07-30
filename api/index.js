const express=require('express');
const connectDb=require('./db/connect');
const todoRoutes=require('./routes/todoRoutes');




const app=express();
connectDb().then(()=>{
    app.use("/",todoRoutes)
})

// app.get('/',(req,res)=>{
//     res.send("helloooooooooo");
// })

app.listen(8080,()=>console.log("server runnig at port 8080"));