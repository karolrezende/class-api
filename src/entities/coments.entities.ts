import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Student } from "./student.entities";
import { Courses } from "./courses.entities";


@Entity('coments')
export class Coments {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    title: string
    
    @Column({type:'varchar', length:250})
    desc: string

    @CreateDateColumn()
    createdAt: string|Date
    
    @UpdateDateColumn()
    updatedAt: string|Date 

    @DeleteDateColumn({nullable: true})
    deletedAt: string | Date | undefined | null

    @ManyToOne(()=> Student, (Student)=> Student.coments)
    student: Student

    @ManyToOne(()=> Courses, (Courses)=> Courses.coments)
    courses: Courses
}