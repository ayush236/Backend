import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import *  as morgan from "morgan"
import studentroutes from './routes/student.routes'
import TeacherRoutes from './routes/teacher.routes'
import  newuserRoutes  from "./routes/newuser.routes"
import employeRoutes from "./routes/employe.routes"
import * as cors from 'cors'
import { AppError } from "./utils/AppError"
import { error } from "console"
import * as swaggerFile from './swagger-outputfile.json'
import * as swaggerUiExpress from 'swagger-ui-express'
import libraryRoutes from "./routes/libray.routes"


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(morgan("dev"))
    app.use('/public',express.static('src/public'))

    // register express routes from defined application routes


    app.use(cors({ origin: '*' }))

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.json({ message: "ayush" })
    })
    app.use(studentroutes)
    app.use(TeacherRoutes)
    app.use(newuserRoutes)
    app.use(libraryRoutes)
    app.use(employeRoutes)
    //all handle routes
    app.use('/doc',swaggerUiExpress.serve,swaggerUiExpress.setup(swaggerFile))
    

    app.all('*', (req: Request, res: Response, next: NextFunction) => {
        next(new AppError(404, `${req.originalUrl} Notfound`))
    })

    app.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || 'error';
        error.statuscode = error.statuscode || 500;
        res.status(error.statuscode).json({
            status: error.status,
            message: error.message
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
