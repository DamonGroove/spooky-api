//Copyright by Damon Groove
//9/28/2020
import {Body, Get, JsonController, NotFoundError, Param, Post, Put} from "routing-controllers";
import {getConnectionManager, Repository} from "typeorm";
import {User} from "../../../entity/User";
import {UserDTO} from "../../../dto/dtos/UserDTO";
@JsonController("/rest/v1/users")
export class UserController {

    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getConnectionManager().get().getRepository(User);
    }

    @Get("/")
    public async listUsers(): Promise<User[]>{
        const res = await this.userRepository.find();

        return res;
    }

    @Get("/:id")
    public async getUser(@Param("id") id: number): Promise<User> {
        const res = await this.userRepository.findOne(id);

        if(!res) {
            throw new NotFoundError();
        }

        return res;
    }

    @Post("/")
    public async createUser(@Body() body: UserDTO): Promise<User>{
        let res = this.userRepository.create(body);

        res = await this.userRepository.save(res);

        return res;
    }

    @Put("/:id")
    public async updateUser(@Param("id") id: number, @Body() body : UserDTO): Promise<User>{
        let res = await this.userRepository.findOne(id);

        if(!res) {
            throw NotFoundError;
        }

        delete body.id;

        await this.userRepository.update({id: id}, body);
        res = await this.userRepository.findOne(id);

        return res;
    }

}
