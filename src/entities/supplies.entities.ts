import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Classy } from "./classy.entities";
import { Ativities } from "./ativities.entities";


@Entity('supplies')
export class Supplies {
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
    deletedAt: string | Date | undefined | null

    @OneToMany(()=> Classy, (Classy)=> Classy.supplies)
    classy: Classy

    @OneToMany(()=> Ativities, (Ativities)=> Ativities.supplies)
    @JoinColumn()
    ativities: Ativities
}