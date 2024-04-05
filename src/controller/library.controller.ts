import * as express from 'express'
import { Request, Response,NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { library } from '../entity/library'
import { AppError } from '../utils/AppError'
import { Student } from '../entity/student'

const libraryRepo = AppDataSource.getRepository(library)
const StudentRepo = AppDataSource.getRepository(Student)
// #swagger.tags=['library']


export const getdata_first = async(req: Request ,res:Response,next:NextFunction)=>{
// #swagger.tags=['library']


    try{
        await libraryRepo.find({
            relations:{
                student:true
            }
        }).then(result=>{
            res.status(200).json({
                message:"your request is fullfilled",
                data:result
            })
        }).catch(error=>{

            next( new AppError(400,"your request is not fullfilled"))
        })
    }
    catch(error){
        next(new AppError(404,"something went wrong"))

    }
}

export const postdata_first = async(req:Request, res:Response, next:NextFunction)=>{
// #swagger.tags=['library']

    try{

      let student=  await StudentRepo.findOneBy({id:req.body.student})
      req.body.student=student

        await libraryRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"your data has been posted",
                data:result
            })

        }).catch(error=>{
            next ( new AppError(400,"your data has not posted"))
        })

    }
    catch(error){
        next(new AppError(404,"something went wrong in posting"))

    }
}

export const deletedata_first =async(req:Request, res:Response, next:NextFunction)=>{
// #swagger.tags=['library']


    try{
        let data = await libraryRepo.findOneBy({id:req.params.id})
        if(!data){
            next (new AppError(400,"your data doesnot belong here"))
        }
         await libraryRepo.softRemove({id:req.params.id}).then(result=>{
            res.status(200).json({
            message:"your data has been delete successfully!",
            data:result
            })

         }).catch(error=>{
            next (new AppError(400,"your data has not deleted succesfully"))
         })

    }
    catch(error){
        next (new AppError(400,"something went wrong"))

    }
}

export const updated_first= async(req:Request, res:Response, next:NextFunction)=>{
// #swagger.tags=['library']


    try{
        await libraryRepo.findOneBy({id:req.params.id})
     let data_second= await libraryRepo.findOneBy({id:req.params.id})
     if(!data_second){
        next(new AppError(400,"your data is not fiund"))
     }
     Object.assign(data_second,req.body)
     await libraryRepo.save(data_second).then(result=>{
        res.status(200).json({
            message:"your data has been updated",
            data:result
        })
     }).catch(error=>{
        next (new AppError(404,"your data has  not updated"))
     })
    }
    catch(error){
        next(new AppError(404,"something went wrong"))

    }
}