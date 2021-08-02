const routes=require('./routes/index.js')
const db=require('./modal/user.modal.js')
const express=require('express')
const app=express()
app.use(express.json())

app.use('/',routes)

app.listen(5060,()=>{
    console.log("server is running.")
})