//Copyright by Damon Groove
//9/28/2020
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Category} from "./Category";
import {Session} from "./Session";



@Entity("session_data",{schema:"spooky_db"})
export class SessionData {

    @PrimaryGeneratedColumn({
        name:"id"
    })
    id:number;

    @Column("int",{
        nullable:false,
        name:"offset"
    })
    offset:number;

    @Column("int",{
        nullable:true,
        name:"dynamic"
    })
    dynamic:number | null;

    @Column("int",{
        nullable:true,
        name:"position_x"
    })
    position_x:number | null;

    @Column("int",{
        nullable:true,
        name:"position_y"
    })
    position_y:number | null;

    @Column("int",{
        nullable:true,
        name:"position_z"
    })
    position_z:number | null;

    @ManyToOne(type => Session, session => session.sessionData)
    session: Session;

}
