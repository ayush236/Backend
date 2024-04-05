import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { newuser } from "../entity/newuser";
import { AppError } from "../utils/AppError";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"



const newuserRespo = AppDataSource.getRepository(newuser)
// #swagger.tags=['newuser']


export  const postdata1 =async(req:Request,res:Response,next:NextFunction)=>{

    try{
        await bcrypt.hash(req.body.password,10,function(err,hasedpassword){
            if(err){
                console.log(err)
                return next (new AppError(400,err.message))
            }
            console.log(hasedpassword)
            req.body.password=hasedpassword
            newuserRespo.save(req.body).then(result=>{
            res.status(200).json({
                message:"data has been post",
                data:result
            })
        }).catch(error=>{
            console.log(error)

            res.status(400).json({
                message:"somthing went while posting data",
                error:error
            })
        })
        })
    }
        catch(error){
            console.log(error)
            res.status(500).json({
                message: "somthing went wrong",
                error:error
            })
        }
    
}
 

    export  const postdatalogin =async(req:Request,res:Response,next:NextFunction)=>{

        try{
    
        let data=   await newuserRespo.findOneBy({email:req.body.email})
        await bcrypt.compare(req.body.password,data.password,function(err,hasedpassword){
            if(err){
                return next (new AppError(400,err.message))
            }
            console.log(hasedpassword)
            
            // newuserRespo.save(req.body).then(result=>{
                if(hasedpassword){
                    let token=jwt.sign({
                        id:data.id,
                        email:data.email
                    },"secretkey")
                    res.status(200).json({
                        message:"password is correct",
                        token:token
                        
                        // data:result
                    })
                }
                else
                {
                    next (new AppError(400,"password is wrong"))

                }
                // }).catch(error=>{
                //     res.status(400).json({
                //         message:"somthing went while posting data",
                //         error:error
                //     })
                })
        // })
        
        }
            catch(error){
                console.log(error)
                res.status(500).json({
                    message: "password wrong",
                    error:error
                })
            }
        
        }
