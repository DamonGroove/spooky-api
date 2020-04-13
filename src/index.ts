//Copyright by Damon Sawyer
//11/28/2018
import {createConnection, useContainer} from "typeorm";
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/rest/v1/user_controller";
import {Category_Controller} from "./controllers/rest/v1/category_controller";
import {LoginController} from "./controllers/rest/v1/LoginController";

createConnection({
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "grave",
    password: "Password!",
    database: "spooky_db",
    synchronize: true,
    logging: true,
    entities: [
        "src/entity/**/*.ts"
    ]
}).then(async connection => {

    console.log("Connected. Now run express app");
    createExpressServer({
        controllers: [LoginController, UserController, Category_Controller]
    }).listen(3000);
    console.log("Server is up and running on port 3000. Now send requests to check if everything works.");

}).catch(error => console.log("Error: ", error));
// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/user";
// import {Category} from "./entity/category";
// import {Procedure} from "./entity/procedure";
//
//
// createConnection().then(async connection => {
//
//     // //New User
//     //
//     // console.log("Inserting a new category into the database...");
//     // const user = new User();
//     // user.user_name = "Damon Sawyer";
//     // user.user_admin = true;
//     // user.user_email = "damon@foughtsteel.com";
//     //
//     // await connection.manager.save(user);
//     // console.log("Saved a new category with id: " + user.id);
//     //
//     // console.log("Loading categories from the database...");
//     // const users = await connection.manager.find(User);
//     // console.log("Loaded categories: ", users);
//     //
//     // console.log("Here you can setup and run express/koa/any other framework.");
//     //
//     // //New Category
//     //
//     // console.log("Inserting a new category into the database...");
//     // const category = new Category();
//     // category.category_name = "Kaspersky";
//     //
//     // await connection.manager.save(category);
//     // console.log("Saved a new category with id: " + category.id);
//     //
//     // console.log("Loading categories from the database...");
//     // const categories = await connection.manager.find(Category);
//     // console.log("Loaded categories: ", categories);
//     //
//     // console.log("Here you can setup and run express/koa/any other framework.");
//
//     //New Procedure
//
//     // console.log("Inserting a new category into the database...");
//     // const procedure = new Procedure();
//     // procedure.procedure_title = "Installing new client";
//     // procedure.procedure_description = "Add the computer to the administrator console. " +
//     //     "Install the client under the S:/dosapps/install directory.";
//     // procedure.category_id = 1;
//     // procedure.user_id = 1;
//     //
//     // await connection.manager.save(procedure);
//     // console.log("Saved a new category with id: " + procedure.id);
//     //
//     // console.log("Loading categories from the database...");
//     // const procedures = await connection.manager.find(Procedure);
//     // console.log("Loaded categories: ", procedures);
//     //
//     // console.log("Here you can setup and run express/koa/any other framework.");
//
//
//
// }).catch(error => console.log(error));
