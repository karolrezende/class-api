import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coments } from "./coments.entities";
import { Classy } from "./classy.entities";


@Entity('courses')
export class Courses {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 35, unique: true})
    name: string

    @Column({type: 'varchar', length:250})
    desc: string
    
    @CreateDateColumn()
    createdAt: string|Date
    
    @UpdateDateColumn()
    updatedAt: string|Date 

    @DeleteDateColumn({nullable: true})
    deletedAt: string | Date | undefined| null

    @OneToMany(()=> Coments, (Coments)=> Coments.courses)
    coments: Coments[]

    @OneToMany(()=> Classy, (Classy)=> Classy.courses)
    classy: Classy
}