//Copyright by Damon Groove
//9/28/2020
import {IsBoolean, IsNumber, IsString} from "class-validator";
export class SessionDTO{
    @IsNumber()
    id: number;
    @IsString()
    midiSessionID: string;
    @IsNumber()
    limit: number;
    @IsBoolean()
    isComplete: boolean;
}
