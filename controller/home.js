const request=require('request');
const Crypto=require('../models/schema');
module.exports.home=function(req,res){
    
   let url="https://api.wazirx.com/api/v2/tickers"
  
    try{
        request.get(url,{},(err,resp,body)=>{
            let jsonobject=JSON.parse(body);
    
            Crypto.deleteMany({},function(err,user){
                console.log('deleted');
            
    
        })
    

        let Arr=[];

       
        Arr.push(jsonobject.btcinr);
        Arr.push(jsonobject.xrpinr);
        Arr.push(jsonobject.ethinr);
        Arr.push(jsonobject.trxinr);
        Arr.push(jsonobject.eosinr);
        Arr.push(jsonobject.zilinr);
        Arr.push(jsonobject.batinr);
        Arr.push(jsonobject.zrxinr);
        Arr.push(jsonobject.reqinr);
        Arr.push(jsonobject.nulsinr);
 
        for(let i of Arr){
        Crypto.create({
               name : i.name,
               last : i.last,
               buy : i.buy,
               sell : i.sell,
               volume : i.volume,
               base_unit : i.base_unit,
            },function(err,user){
      
        })
        }
        
        Crypto.find({},function(err,data){

            res.render('home',{
                title : "home",
                data : data,
            })
        })
        
        
   
            
       
   
        })
    }catch(err){
      console.log('ERROR');
    }
   
    }