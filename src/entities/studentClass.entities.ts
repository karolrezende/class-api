import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Student } from "./student.entities";
import { Classy } from "./classy.entities";


@Entity('studentClass')
export class StudentClass {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string
    
    @Column({type:'varchar', length:250})
    objetive: string

    @Column({type: 'integer'})
    grade: number

    @OneToOne(()=> Student, (Student)=>Student.studentClass)
    student: Student

    @OneToMany(()=> Classy, (Classy)=> Classy.studentClass)
    classy: Classy[]
}