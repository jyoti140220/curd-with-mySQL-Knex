const knex=require('../config/db.connection.js')


knex.schema.createTableIfNotExists('userDetials',(table)=>{
    table.increments('id').primary();
    table.string('name');
    table.integer('age');
    table.string('class');
    table.date('birthday');

}).then(()=>{console.log("Table Created...")}).catch((err)=>{console.log(err)})



module.exports=knex