//Copyright by Damon Groove
//9/28/2020
import {createConnection,} from "typeorm";
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/rest/v1/UserController";
import {CategoryController} from "./controllers/rest/v1/CategoryController";
import {LoginController} from "./controllers/rest/v1/LoginController";

createConnection().then(async connection => {

    console.log("Connected. Now run express app");
    createExpressServer({
        controllers: [LoginController, UserController, CategoryController]
    }).listen(3000);
    console.log("Server is up and running on port 3000. Now send requests to check if everything works.");

}).catch(error => console.log("Error: ", error));
