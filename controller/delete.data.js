const knex=require('../modal/user.modal.js')

const deleteData=async(req,res)=>{
    knex('userDetials').where('id',req.params.id).del()
    .then(()=>{return res.status(200).json({message:"row delele...",status:200})})
    .catch((err)=>{return res.status(400).json({message:err,status:400})})
}

module.exports=deleteData