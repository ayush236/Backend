
import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
// @Index(['email'],{unique:true}) 
@Unique(['email'])
export class newuser{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    email: string

    @Column()
    password: string

}