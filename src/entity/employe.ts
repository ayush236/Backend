import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Student } from "./student"

@Entity()
export class employe {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    salary: number

    @ManyToOne(()=>Student,(Student)=>Student.employe,)
    student:Student

}