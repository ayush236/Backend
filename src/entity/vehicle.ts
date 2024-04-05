import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity()

export class vehicle{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    owner:string

    @Column()
    wheeler:string

    @Column()
    numberplate:string
}




