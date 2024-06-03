import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";


;( async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log('ERROR: ', error);
    }
})();

function connectDB(){
    
};

