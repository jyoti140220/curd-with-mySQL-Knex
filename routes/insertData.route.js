const data=require('../controller/insert.data.js')
const express=require('express')
const router=express.Router()

router.post('/',data)

module.exports=router