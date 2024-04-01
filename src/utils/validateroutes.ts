import { Request,Response,NextFunction } from "express";
import { AppError } from "./AppError";
import  * as Jwt  from "jsonwebtoken";

const  auth = async(req:Request,res:Response, next:NextFunction)=>{
    try{
        console.log(req.headers.authorization)
        let token :any 
        token = req.headers.authorization.split('Bearer ')[1]
        console.log(token)
            const decodedToken = await Jwt.verify(token,'secretkey')
            const user = await decodedToken
            console.log(user)
            next()
        
        console.log(token)

    }
    catch(error){
        next (new AppError(400,'Request is not found'))

    }
}
export default auth;