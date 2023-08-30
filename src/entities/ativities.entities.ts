import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('ativities')
export class Ativities {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string
    
    @Column({type:'varchar', length:250})
    objetive: string
}