import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('studentClass')
export class studentClass {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string
    
    @Column({type:'varchar', length:250})
    objetive: string

    @Column({type: 'integer', length:10})
    grade: number
}