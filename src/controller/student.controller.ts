import {Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { Student } from '../entity/student'
import { json } from 'stream/consumers'
import { AppError } from '../utils/AppError'

const StudentRepo =AppDataSource.getRepository(Student)
export const getdata=async (req:Request, res:Response, next:NextFunction)=>{
    try{
        await StudentRepo.find().then(result=>{
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
    try{
        console.log(req.body)
        await StudentRepo.save(req.body).then(result=>{
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
export const getsingledata=async (req:Request, res:Response, next:NextFunction)=>{
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

export const deletedata=async (req:Request, res:Response, next:NextFunction)=>{
    try{
        console.log(req.params)
      let Data= await StudentRepo.findOneBy({id:req.params.id})
      if(!Data){
        return next(new AppError(404,"data doesn't exist"))
      }
      await StudentRepo.remove(Data).then(result=>{
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



