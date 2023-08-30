import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn('increment')
    id: number
}