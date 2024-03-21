import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class teacher{
    @PrimaryGeneratedColumn()
    id:number

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

}