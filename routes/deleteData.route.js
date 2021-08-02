const data=require('../controller/delete.data.js')
const express=require('express')
const router=express.Router()

router.delete('/',data)

module.exports=router