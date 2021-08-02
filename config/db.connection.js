const env=require('dotenv').config()


const knex=require('knex')({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    }
})
console.log("database connected...")

module.exports=knex