//Copyright by Damon Sawyer
//11/28/2018
import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Category} from "./category";


@Entity("user",{schema:"spooky_db"})
@Index("username_UNIQUE",["user_name",],{unique:true})
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
        name:"user_name"
        })
    user_name:string | null;

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
