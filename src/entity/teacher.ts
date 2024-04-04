import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,  OneToOne, JoinColumn } from "typeorm";
import { Student } from "./student";


@Entity()

export class teacher{
    @PrimaryGeneratedColumn()
    id:string

    @Column({nullable:true})
    profile:string

    @Column()
    firstname:string

    @Column()
    lastname:string

    @Column()
    age:number

    @DeleteDateColumn()
    deletedate:Date

    @CreateDateColumn()
    createdata:Date

    @UpdateDateColumn()
    updatedate:Date

    @OneToOne(()=>Student)
    @JoinColumn()
    student:Student
}