//Copyright by Damon Groove
//9/28/2020
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
