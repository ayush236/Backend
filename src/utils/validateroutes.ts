import { Request,Response,NextFunction } from "express";
import { AppError } from "./AppError";
import  * as Jwt  from "jsonwebtoken";

interface RequestCustom extends Request{
    user: any
}
const  auth = async(req:RequestCustom,res:Response, next:NextFunction)=>{
    try{
        console.log(req.headers.authorization)
        let token :any 
        token = req.headers.authorization.split('Bearer ')[1]
        console.log(token)
            const decodedToken = await Jwt.verify(token,'secretkey')
            const user = await decodedToken
            console.log(user)
            req.user = user
            next()
        
        console.log(token)

    }
    catch(error){
        next (new AppError(400,'invalid user'))

    }
}
export default auth;