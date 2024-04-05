import * as express from 'express'

import { Request, Response,NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { vehicle } from '../entity/vehicle'
import { AppError } from '../utils/AppError'
import { error } from 'console'

const vehicleRepo = AppDataSource.getRepository(vehicle)
// #swagger.tags=['vehicle']

export const getdata_third =async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['vehicle']

    
    try{
        await vehicleRepo.find().then(result=>{
            res.status(200).json({
                message:"your data is fetched,greate success!",
                data:result
            })
        }).catch(error=>{
            next (new AppError(400,"somthing is error while fetching data"))
        })
    }
    catch(error){
        next(new AppError(404,"something went wrong"))

    }
}

export const postdata_third=async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['vehicle']

    try{
        await vehicleRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"your data is posted, greate success!",
                data:result
            })
        }).catch(error=>{
            console.log(error)
            next (new AppError(400,"Something is wrong while poasting data"))
        })

    }
    catch(error){
        next(new AppError(404,"something went wrong"))

    }
}

export const deletedata_third =async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['vehicle']

    try{
        await vehicleRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"your data has been deleted, greate success!",
                data:result
            })
        }).catch(error=>{
            next(new AppError(400,"something is wrong while deleting data"))
        })

    }
    catch(error){
        next(new AppError(404,"something went wrong"))
    }
}

export const updata_third=async(req:Request,res:Response,next:NextFunction)=>{
// #swagger.tags=['vehicle']

    try{
        await vehicleRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"your data  has been updated,greate success!",
                data:result
            })
        }).catch(error=>{
            next (new AppError(400,"something is wrong while updating data"))
        })

    }
    catch(error){
        next(new AppError(404,"something went wrong"))
    }
}