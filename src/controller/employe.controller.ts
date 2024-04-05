import * as express from 'express'
import { Request ,Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { employe } from '../entity/employe'
import { AppError } from '../utils/AppError'
import { Student } from '../entity/student'

const employeRepo = AppDataSource.getRepository(employe)
const StudentRepo = AppDataSource.getRepository(Student)
// #swagger.tags=['employe']


export const getdata_second=async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['employe']


    try{
        await employeRepo.find({
            relations:{
                student:true
            }
        }).then(result=>{
            res.status(200).json({
                message:"dat has been fetch, greate success!",
                data:result
            })
        }).catch(error=>{
            next (new AppError(400,"soomething went wrong while featching data"))
        })
    }
    catch(error){
        next(new AppError(404,"something is wrong"))

    }
}

export const postdata_second = async(req:Request, res:Response, next:NextFunction)=>{
// #swagger.tags=['employe']


    try{
        req.body.student=[req.body.student]
        await employeRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"data has been post, greate success!",
                data:result
            })
        }).catch(error=>{
            next (new AppError(400,"something is wrong while posting data"))
        })
    }
    catch(error){
        next(new AppError(404,"something is wrong"))
    }
}

export const deletedata_second = async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['employe']


     try{

        await employeRepo.softRemove({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"data has been dalete, greate success!",
                Data:result
            })

        }).catch(error=>{
            next(new AppError(400,"something went wrong while delete "))
        })
     }
     catch(error){
        next (new AppError(404,"something is wrong"))

     }
}

export const updatedata_second = async(req:Request, res:Response, next:NextFunction)=>{
// #swagger.tags=['employe']


    try{
        await employeRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"data had been updated, greate success!",
                data:result
            })
        }).catch(error=>{
            next (new AppError(400,"something is wrong while updating the data"))
        })

    }
    catch(error){
        next (new AppError(404,"somthing is wrong"))

    }
}

