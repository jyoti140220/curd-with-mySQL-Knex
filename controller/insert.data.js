const knex=require('../modal/user.modal.js')

const insertData=async(req,res)=>{
    knex('userDetials').insert({name:req.body.name,age:req.body.age,class:req.body.class,birthday:req.body.birthday}).then(() => {return res.status(200).json({message:"Data Insert Succesfully...",status:200})})
    .catch((err) => {return res.status(400).json({message:err,status:400})})

}

module.exports=insertData