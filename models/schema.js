const mongoose=require('mongoose');
const cryptoSchema=new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    last : {
        type: Number,
        required : true,
    },
    buy : {
        type : Number,
        required:true,
    },
    sell : {
       type : Number,
       required : true,
    },
    volume :{
        type : Number,
        required: true,
    },
    base_unit : {
        type : String,
        required:true,
    }
},{
    timestamps:true,
})

const Crypto=mongoose.model('Crypto',cryptoSchema);

module.exports=Crypto;

