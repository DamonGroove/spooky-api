//Copyright by Damon Groove
//9/28/2020
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Category} from "./Category";
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
