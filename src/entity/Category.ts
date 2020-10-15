//Copyright by Damon Groove
//9/28/2020
import {Index,Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";


@Entity("category",{schema:"spooky_db"})
@Index("category_name_UNIQUE",["category_name",],{unique:true})
@Index("fk_category_user_idx",["user_id",])
export class Category {

    @PrimaryGeneratedColumn({
        name:"id"
        })
    id:number;


    @Column("varchar",{
        nullable:true,
        unique: true,
        length:45,
        name:"category_name"
        })
    category_name:string | null;

    @Column("int",{
        nullable:true,
        name:"category_parent"
    })
    category_parent_id:number | null;

    @Column("int",{nullable: true})
    user_id:number;


    @ManyToOne(type=>User, user=>user.categories,{  nullable:false,onDelete: 'NO ACTION'})
    @JoinColumn({ name:'user_id'})
    user:User | null;


}
