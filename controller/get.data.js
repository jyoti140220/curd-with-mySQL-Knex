const knex=require('../modal/user.modal.js')

const getData=async(req,res)=>{
    knex.from('userDetials').select("*").then((data)=>{
        return res.status(200).json({status:200,data:data})
    }).catch((err)=>{return res.status(400).json({message:err,status:400})})

}
module.exports=getData