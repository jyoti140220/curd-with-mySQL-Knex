const data=require('../controller/get.data.js')
const express=require('express')
const router=express.Router()

router.get('/',data)

module.exports=router