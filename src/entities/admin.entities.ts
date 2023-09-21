import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Person } from "./person.entities";


@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "boolean"})
    isAdm: boolean

    @OneToOne(()=> Person, (Person) => Person.admin )
    person: Person
}