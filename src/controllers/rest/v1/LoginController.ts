//Copyright by Damon Sawyer
import {Body, JsonController, Post} from "routing-controllers";
import {LoginDTO} from "../../../dto/dtos/LoginDTO";

@JsonController("/rest/v1/auth")
export class LoginController {

    @Post("/")
    public async login(@Body() body: LoginDTO): Promise<string>{
        return "123456789";
    }
}