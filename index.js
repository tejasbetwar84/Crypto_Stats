const express= require('express');
const app = express();
// const https=require('https');
const port=8000;
const mongoose=require('./config/mongoose');


app.use(express.static('assets'));
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

  
 


app.listen(port,function(){
    console.log('Hodlist is running on port',port);
})