import {Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { Student } from '../entity/student'
import { json } from 'stream/consumers'
import { AppError } from '../utils/AppError'
import { error } from 'console'
import SendMail from '../utils/mail'
import HTML_template from '../view/mailtemplate'
import { send } from 'process'

const StudentRepo =AppDataSource.getRepository(Student)
// #swagger.tags=['Student']
interface RequestCustom extends Request{
    user:any;
}
export const getdata=async (req:RequestCustom, res:Response, next:NextFunction)=>{
    // #swagger.tags=['Student']
   
    try{
        
        console.log(req.user)
        await StudentRepo.find({
            relations:{
                employe:true
            }
        }).then(result=>{
            res.status(200).json({
                message:"student data has been fetch successfully",
                data:result
            })
        }).catch(error=>{
            res.status(400).json({
                message:"somthing went while fecting data",
                error:error
            })
        })
    }
        catch(error){
            res.status(500).json({
                message: "somthing went wrong",
                error:error
            })
        }
    
}
export const postdata=async (req:Request, res:Response, next:NextFunction)=>{
    // #swagger.tags=['Student']
    /* #swagger.requestBody = {
                required:true,
                content:{
                    "multipart/form-data":{
                        schema:{
                                $ref:"#/components/schemas/studentSchema"
                        }
              

                    }
                }
                
            }
        */       
    try{

// const urls = await put(req.file.originalname,req.file.buffer, { access: 'public',token:"vercel_blob_rw_IL0cZNrkthPhPF4L_VsgB6bmHZoilN4ySKHc79ntBv1tEdq" });
//         console.log(req.body,req.files,urls)
//         req.body.profile=urls.url

req.body.employe=[req.body.employe]
        await StudentRepo.save(req.body).then(result=>{
            const message = " hello world "
            const option ={
                from:"THANK YOU <ayush.khatri105@gmail.com> ",
                to:"kandelbinod634@gmail.com",
                subject:"greeting",
                text:message,
                html:HTML_template(message,'greeting')
            }
            SendMail(option,(info=>{
                console.log("email sended")
                return console.log("messageid",info.messageid)
            }))
            res.status(200).json({
                message:"student data has been post successfully",
                data:result
            })
        }).catch(error=>{
            console.log(error)
            res.status(400).json({
                message:"somthing went while posting data",
                error:error
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
export const getsingledata=async (req:Request, res:Response, next:NextFunction)=>{
    // #swagger.tags=['Student']
  
    try{
        console.log(req.params)
        await StudentRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"student data has been fetch successfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,"error"))
        })
    }
        catch(error){
            next(new AppError(400,"error"))
        }
    
}
export const updatedata=async (req:Request, res:Response, next:NextFunction)=>{
    // #swagger.tags=['Student']
    /* #swagger.requestBody = {
                required:true,
                content:{
                    "multipart/form-data":{
                        schema:{
                                $ref:"#/components/schemas/studentSchema"
                        }
              

                    }
                }
                
            }
        */
    try{
        console.log(req.params)
        await StudentRepo.findOneBy({id:req.params.id})
        let data= await StudentRepo.findOneBy({id:req.params.id})
        if(!data) {
            return next(new AppError(404,"this data does not exist"))
        }
        Object.assign(data, req.body)
        await StudentRepo.save(data).then(result=>{
            res.status(200).json({
                message:"student data has been fetch successfully",
                data:result
            })
            }).catch(error=>{
                next(new AppError(400,"eroror"))
        })
    }
        catch(error){
            next(new AppError(400,"error"))
        }
    
}

export const deletedata=async (req:Request, res:Response, next:NextFunction)=>{
    // #swagger.tags=['Student']
    /* #swagger.requestBody = {
                required:true,
                content:{
                    "multipart/form-data":{
                        schema:{
                                $ref:"#/components/schemas/studentSchema"
                        }
              

                    }
                }
                
            }
        */
    try{
        console.log(req.params)
      let Data= await StudentRepo.findOneBy({id:req.params.id})
      if(!Data){
        return next(new AppError(404,"data doesn't exist"))
      }
      await StudentRepo.softRemove(Data).then(result=>{
        res.status(200).json({
            message:"student data has been fetch successfully",
            result:Data
        })
    }).catch(error=>{
        next(new AppError(400,"error"))
        
    })
        
    }
        catch(error){
            next(new AppError(400,"error"))
        }
    
}



