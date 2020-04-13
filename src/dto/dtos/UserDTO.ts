//Copyright by Damon Sawyer
//11/28/2018
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