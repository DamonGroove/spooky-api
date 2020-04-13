//Copyright by Damon Sawyer
//11/28/2018
import {IsBoolean, IsNumber, IsString} from "class-validator";
export class LoginDTO{
    @IsNumber()
    id: number;
    @IsString()
    username: string;
    @IsString()
    password: string;
}