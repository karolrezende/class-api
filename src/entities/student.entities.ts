import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Coments } from "./coments.entities";
import { Person } from "./person.entities";
import { StudentClass } from "./studentClass.entities";


@Entity('student')
export class Student {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({type:'varchar', length: 11})
    mat: string

    @OneToMany(()=> Coments, (Coments)=> Coments.student)
    coments: Coments[]

    @OneToOne(()=> Person)
    @JoinColumn()
    person: Person

    @OneToOne(()=> StudentClass, (StudentClass)=> StudentClass.student)
    studentClass: StudentClass
}