import express from "express"


const PORT = 5001;
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello world")
})


app.listen(PORT,()=>{
    console.log(`App running at port ${PORT} `)
    
})