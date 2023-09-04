import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Supplies } from "./supplies.entities";


@Entity('ativities')
export class Ativities {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 50})
    name: string
    
    @Column({type:'varchar', length:250})
    objetive: string

    @ManyToOne(()=> Supplies)
    supplies: Supplies
}