import * as multer from 'multer'
import { Request,response,NextFunction } from 'express'

// const storage = multer.diskStorage({
//     destination:function(req:Request,file:Express.Multer.File,cb){
//         cb(null,'src/public')
//     },
//     filename:function(req:Request,file:Express.Multer.File,cb){
//         cb(null, file.originalname)

//     }
// })
const storage=multer.memoryStorage()

export const upload = multer({storage:storage})