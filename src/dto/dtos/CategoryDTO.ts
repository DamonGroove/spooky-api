//Copyright by Damon Sawyer
//11/28/2018
import {IsBoolean, IsNumber, IsString} from "class-validator";
export class CategoryDTO{
    @IsNumber()
    id: number;
    @IsString()
    category_name: string;
    @IsNumber()
    category_parent_id: number;
    @IsNumber()
    user_id: number;
}