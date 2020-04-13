import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Category} from "./category";
import {SessionData} from "./SessionData"



@Entity("session",{schema:"spooky_db"})
export class Session {

    @PrimaryGeneratedColumn({
        name:"id"
    })
    id:number;

    @Column("varchar",{
        nullable:false,
        length:255,
        name:"start_time_stamp"
    })
    start_time_stamp:string | null;

    @Column("int",{
        nullable:false,
        name:"limit"
    })
    limit:number | null;

    @OneToMany(type=>SessionData, sessionData=>sessionData.session)
    sessionData:SessionData[];

}
