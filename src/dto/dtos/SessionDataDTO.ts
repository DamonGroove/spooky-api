//Copyright by Damon Groove
//9/28/2020
import {IsArray} from "class-validator";
export class SessionDataDTO{
    @IsArray()
    data: Array<Array<number>>;
}
