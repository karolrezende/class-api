import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Person } from "./person.entities";


@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn('increment')
    id: number

    @OneToOne(()=> Person)
    @JoinColumn()
    person: Person
}