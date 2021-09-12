const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB_NAME || 'demo'
mongoose.connect(
    uri,
    {
        dbName: dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 300000,
        //useCreateIndex: true,
        //useFindAndModify: false
    }
)
    .then(
        () => {
            console.log('ok',"mongodb connected to db " +` ${dbName}`);
        }
    )
    .catch(
        (error) => {
            console.log('error')
            console.log(error)
        }
    );

//connection to mongodb

mongoose.connection.on('connected',()=>{console.log("mongodb connected to db")});

mongoose.connection.on('error',(error) => { console.log(JSON.stringify(error)) });

mongoose.connection.on('disconnected',()=>{console.log("mongodb is disconnected")});


process.on('SIGINT',async ()=>{
   await mongoose.connection.close();
   process.exit(0);
});