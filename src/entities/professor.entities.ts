import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Professor')
export class Professor {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 200})
    exp: string

}