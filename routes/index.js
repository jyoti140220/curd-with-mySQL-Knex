
const express=require('express')
const router=express.Router()

router.use('/',require('./insertData.route.js'))
router.use('/',require('./getData.route.js'))
router.use('/:id',require('./updateData.route.js'))
router.use('/:id',require('./deleteData.route.js'))


module.exports=router