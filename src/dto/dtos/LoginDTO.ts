//Copyright by Damon Groove
//9/28/2020
import {IsBoolean, IsNumber, IsString} from "class-validator";
export class LoginDTO{
    @IsNumber()
    id: number;
    @IsString()
    username: string;
    @IsString()
    password: string;
}
