import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employe } from "./entity/employe"
import { Student } from "./entity/student"
import { teacher } from "./entity/teacher"
import { newuser } from "./entity/newuser"
import { library } from "./entity/library"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "9818430363ayush",
    database: "traning",
    // url:"postgres://default:DAYd8igv9IMu@ep-icy-heart-a4ljfrot-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
    synchronize: false,
    logging: false,
    entities: [User, employe, Student,teacher,newuser,library],
    migrations: [],
    subscribers: [],
})
