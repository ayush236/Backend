import { Entity, Column, PrimaryGeneratedColumn ,OneToOne, JoinColumn} from "typeorm";
import { Student } from "./student";

@Entity()
export class library{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    book:string

    @OneToOne(()=>Student)
    @JoinColumn()
    student:Student
}