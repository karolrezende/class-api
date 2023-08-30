import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('person')
export class Person {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string

    @Column({type: 'varchar', length:250})
    desc: string

    @CreateDateColumn()
    createdAt: string|Date
    
    @UpdateDateColumn()
    updatedAt: string|Date 

    @DeleteDateColumn({nullable: true})
    deletedAt: string | Date | undefined| null
}