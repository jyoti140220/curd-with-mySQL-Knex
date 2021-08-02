const data=require('../controller/update.data.js')
const express=require('express')
const router=express.Router()

router.put('/',data)

module.exports=router