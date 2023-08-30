import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coments } from "./coments.entities";


@Entity('student')
export class Student {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({type:'varchar', length: 11})
    mat: string

    @OneToMany(()=> Coments, (Coments)=> Coments.student)
    coments: Coments[]
}