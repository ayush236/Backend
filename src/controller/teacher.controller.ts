import {Request, Response, NextFunction } from 'express'
import { teacher } from "../entity/teacher";
import { AppDataSource } from "../data-source";
import { json } from "stream/consumers";
import { AppError } from "../utils/AppError";
import { RequestListener } from "http";
import { error } from 'console';
import { put } from "@vercel/blob";

const TeacherRepo =AppDataSource.getRepository(teacher)
//#swagger.tags=['Teacher]

export const  getdata =async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['Teacher']
    try{
        await TeacherRepo.find().then(result=>{
            res.status(200).json({
                message:"Data has been fetch successfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'error fetching  data'))
        })
    }
    catch(error){
        next( new AppError(404,'error'))


    }
}
export const postdata= async(req:Request,res:Response,next:NextFunction)=>{
     //#swagger.tags=['Teacher']
     /* #swagger.requestBody = {
                required:true,
                content:{
                    "multipart/form-data":{
                        schema:{
                                $ref:"#/components/schemas/teacherSchema"
                        }
              

                    }
                }
                
            }
        */

    try{
        const urls = await put(req.file.originalname,req.file.buffer, {access: 'public',token:"vercel_blob_rw_IL0cZNrkthPhPF4L_VsgB6bmHZoilN4ySKHc79ntBv1tEdq" });
        console.log(req.body,req.file,urls)
        req.body.profile=urls.url
        await TeacherRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"Data has been posted successfully",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'error while posting data'))
        })

    }
    catch(error){
        next (new AppError(500,'error '))
    }

}
export const getsingledata=async(req:Request,res:Response,next:NextFunction)=>{
     //#swagger.tags=['Teacher']
     
    try{
        await TeacherRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"data has been fetch as your id",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,'error while fetching your data'))
        })
    }
    catch(error){
        next(new AppError(500,'your data is not found'))
    }
}
export const deletedata=async(req:Request,res:Response,next:NextFunction)=>{
     //#swagger.tags=['Teacher']
     /* #swagger.requestBody = {
                required:true,
                content:{
                    "multipart/form-data":{
                        schema:{
                                $ref:"#/components/schemas/teacherSchema"
                        }
              

                    }
                }
                
            }
        */
    try{
        console.log(req.params)
        let Data= await TeacherRepo.findOneBy({id:req.params.id})
            if(!Data){
                return next(new AppError(400,'error data is not found'))
            }
            await TeacherRepo.softRemove(Data).then(result=>{
                res.status(200).json({
                    message:"data has been deleted as your request",
                    result:Data
            })
            
        }).catch(error=>{
            next( new AppError(400,'error while deleting data'))
        })
    }
    catch(error){
        next(new AppError(400,'error your data doesot exist'))
    }
}

export const updatedata=async(req:Request,res:Response,next:NextFunction)=>{
    //#swagger.tags=['Teacher']

    try{ 
        await TeacherRepo.findOneBy({id:req.params.id})
        let data=await TeacherRepo.findOneBy({id:req.params.id})
        if(!data){
            return next(new AppError(400,'this data is does not exist'))
        }
        Object.assign(data,req.body)
        await TeacherRepo.save(data).then(error=>{
            res.status(200).json({
                message:"Data has been updated as your request",
                result:data
            })
        }).catch(error=>{
            next (new AppError(400,"error"))
        })
    }
    catch(error){
        next (new AppError(400,"error"))
    }
}
