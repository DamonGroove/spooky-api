import {IsArray, IsBoolean, IsNumber, IsString} from "class-validator";
export class SessionDataDTO{
    @IsArray()
    data: Array<Array<number>>;
}