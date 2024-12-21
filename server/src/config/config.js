import fastifySession from '@fastify/session'
import connectMongodbSession from 'connect-mongodb-session'
import 'dotenv/config'
import { Admin } from '../models/user.js'


const MongoDBStore =connectMongodbSession(fastifySession)
export const sessionStore =  MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions'

})

sessionStore.on('error',(error)=>{
    console.error('sessionStore error',error)
})
export const authenticate = async (email,password)=>{
    if(email && password){
        const user = await Admin.findOne({email})
    }

    if(!user){
        return null
    }
    
    if(user.password===password){
        return Promise.resolve({
            email :email,
            password :password
        });
    }

    else{
        return Promise.reject(new Error('Invalid email or password'));
    }
}
export const PORT  = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;