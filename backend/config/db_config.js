const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://anvi156:anvi156@cluster0.qxcu8.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://kaartechas:kaartechas@resto.v18xx.mongodb.net/resto?retryWrites=true&w=majority";
const client =  new MongoClient(uri);
async function connect(){
  try{
    await client.connect();
    console.log('Connected');
  } catch(err){
    console.log(err);
  }
}
connect();
module.exports = client;