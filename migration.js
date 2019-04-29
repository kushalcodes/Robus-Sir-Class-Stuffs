const knex = require('knex');

//create a sqlite client
const client =knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'knexttest'
    }
})

const tableName = "user";
client.schema.hasTable(tableName).then(function(exists) {
    if (!exists) {
        //create a table
        client.schema.createTable(tableName,function(table)
        {
            table.string('name');
            table.string('email');
            table.boolean('verified');
        });
    }else{
        console.log("Table -> '"+tableName+"' already exists.");
    }
  });