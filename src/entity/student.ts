import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity()
export class Student{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    firstname:string

    @Column()
    lastname:string

    @Column()
    age:number
}