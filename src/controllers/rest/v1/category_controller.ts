//Copyright by Damon Sawyer
//11/28/2018
import {Body, Get, JsonController, NotFoundError, Param, Post, Put} from "routing-controllers";
import {getConnectionManager, Repository} from "typeorm";
import {Category} from "../../../entity/category";
import {CategoryDTO} from "../../../dto/dtos/CategoryDTO";
@JsonController("/rest/v1/categories")
export class Category_Controller {

    private categoryRepository: Repository<Category>;

    constructor() {
        this.categoryRepository = getConnectionManager().get().getRepository(Category);
    }

    @Get("/")
    public async listCategories(): Promise<CategoryDTO[]>{
        const res = await this.categoryRepository.find();

        return res;
    }

    @Get("/:id")
    public async getCategory(@Param("id") id: number): Promise<CategoryDTO> {
        const res = await this.categoryRepository.findOne(id);

        if(!res) {
            throw new NotFoundError();
        }

        return res;
    }

    @Post("/")
    public async createCategory(@Body() body: CategoryDTO): Promise<CategoryDTO>{
        let res = this.categoryRepository.create(body);

        res = await this.categoryRepository.save(res);

        return res;
    }

    @Put("/:id")
    public async updateCategory(@Param("id") id: number, @Body() body : CategoryDTO): Promise<CategoryDTO>{
        let res = await this.categoryRepository.findOne(id);

        if(!res) {
            throw NotFoundError;
        }

        delete body.id;

        await this.categoryRepository.update({id: id}, body);
        res = await this.categoryRepository.findOne(id);

        return res;
    }
}