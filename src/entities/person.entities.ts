import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Admin } from "./admin.entities";


@Entity('person')
export class Person {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string

    @Column({type:'varchar', length: 100})
    email: string
    
    @Column({type: 'varchar', length:250})
    desc: string

    @Column({type: "varchar", length: 120})
    password: string
    
    @CreateDateColumn()
    createdAt: string|Date
    
    @UpdateDateColumn()
    updatedAt: string|Date 

    @DeleteDateColumn({nullable: true})
    deletedAt: string | Date | undefined| null

    @OneToOne(()=> Admin, (Admin)=> Admin.person)
    @JoinColumn()
    admin: Admin
}