//Copyright by Damon Groove
//9/28/2020
import {IsBoolean, IsNumber, IsString} from "class-validator";
export class UserDTO{
    @IsNumber()
    id: number;
    @IsString()
    user_name: string;
    @IsString()
    user_email: string;
    @IsString()
    user_title: string;
    @IsBoolean()
    user_admin: boolean;
}
