import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classy } from "./classy.entities";
import { Person } from "./person.entities";


@Entity('Professor')
export class Professor {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 200})
    exp: string

    @OneToMany(()=> Classy, (Classy)=> Classy.professor)
    classy: Classy

    @OneToOne(()=> Person)
    @JoinColumn()
    person: Person
}   