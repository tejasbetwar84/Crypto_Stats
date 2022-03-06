const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://tejasbetwar:tejas123@cluster0.3teej.mongodb.net/Crypto_db');
mongoose.connect('mongodb://localhost/crypto_db')
const my_database=mongoose.connection;

//if error
my_database.on('error',console.error.bind(console,'error connecting to DataBASE'));


//if connection sucesfull
my_database.once('open',function(){
    console.log("Successfully connected to DataBase");
})
