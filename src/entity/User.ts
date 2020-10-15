//Copyright by Damon Groove
//9/28/2020
import {Index,Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Category} from "./Category";


@Entity("user",{schema:"spooky_db"})
@Index("username_UNIQUE",["username",],{unique:true})
@Index("user_email_UNIQUE",["user_email",],{unique:true})
export class User {

    @PrimaryGeneratedColumn({
        name:"id"
    })
    id:number;

    @Column("varchar",{
        nullable:true,
        unique: true,
        length:45,
        name:"username"
        })
    username:string | null;

    @Column("varchar",{
        nullable:true,
        unique: true,
        length:255,
        name:"user_email"
        })
    user_email:string | null;

    @Column("varchar",{
        nullable:true,
        length:45,
        name:"user_title"
        })
    user_title:string | null;

    @Column("tinyint",{
        nullable:true,
        width:1,
        default:"0",
        name:"user_admin"
        })
    user_admin:boolean | null;



    @OneToMany(type=>Category, category=>category.user_id)
    categories:Category[];

}
