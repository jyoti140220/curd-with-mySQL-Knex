const knex=require('../modal/user.modal.js')

const updateData=async(req,res)=>{
    knex('userDetials').update({name:req.body.name,age:req.body.age,class:req.body.class,birthday:req.body.birthday}).where('id',req.params.id)
    .then(()=>{res.status(200).json({message:"data update..",status:200})})
    .catch((err)=>{res.status(400).json({message:err,status:400})})
}

module.exports=updateData