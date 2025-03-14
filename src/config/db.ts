import mongoose from 'mongoose';
import { config } from './config';

const connectDb=async()=>{
    

    try {
        mongoose.connection.on('connected', ()=>{
            console.log('database connected');
            
        })
        mongoose.connection.on('error',(error)=>{
            console.log('database failed',error);
            
        })
       await mongoose.connect(config.databaseUrl as string);

       
        
    } catch (error) {
        console.log('database connection fail',error);
        
    }
}

export default connectDb;