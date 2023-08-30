import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Courses } from "./courses.entities";
import { Supplies } from "./supplies.entities";
import { Professor } from "./professor.entities";


@Entity('classy')
export class Classy {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 12})
    number: string

    @ManyToOne(()=> Courses, (Courses)=> Courses.classy)
    courses: Courses

    @ManyToOne(()=> Supplies, (Supplies)=> Supplies.classy)
    supplies: Supplies

    @OneToOne(()=> Professor, (Professor)=> Professor.classy)
}