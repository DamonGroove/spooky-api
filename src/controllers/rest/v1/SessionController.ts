//Copyright by Damon Groove
//9/28/2020
import {Body, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {SessionDataDTO} from "../../../dto/dtos/SessionDataDTO";
import {Repository} from "typeorm";
import {Session} from "../../../entity/Session";
import {SessionData} from "../../../entity/SessionData";
import {EntityFromParam} from "typeorm-routing-controllers-extensions";
import {SessionDTO} from "../../../dto/dtos/SessionDTO";

@JsonController("/rest/v1/session")
export class SessionController {

    private sessionDataRepository: Repository<SessionData>;
    private sessionRepository: Repository<Session>;

    // This should create a new session in the sessions table and return a session entity with ID
    @Post("/")
    public async createSession(@Body() body: SessionDTO /* Should be an empty body or maybe just limit?*/): Promise<number>{
        // This all needs to be working off the sessions table
        let res = this.sessionRepository.create(body);
        res = await this.sessionRepository.save(res);

        return res.id;
    }

    // Went to rest/v1/session/[mySessionID] //
    @Put("/:id")
    public async addData(@EntityFromParam("id") session: Session, @Body() body: SessionDataDTO) {
        const sessionData = new SessionData();
        // Analyze data here
    }

    // Start processing data for session
    @Post("/:id/complete")
    public async completeSession() {

    }
}

/*
.../session/
>/:id -> /rest/v1/session/123
>/:id/sessionData/:id -> /rest/v1/session/123/sessionData/345 BAD

.../sessionData -> /rest/v1/sessionData
>/:id -> /rest/v1/sessionData/345 GOOD

*/

/*

Table: sessions
cols   | type   | fk
----------------------
id     | int
limit  | int

Table: session_data
cols             | type      | fk
----------------------
id               | int
session_id       | int       | sessions->id
start_time_stamp | timestamp

Table: session_data_values
cols             | type      | fk
----------------------
id               | int
session_data_id  | int       | session_data->id
duration         | int
dynamic          | int
position_x       | int
position_y       | int
position_z       | int


Timeline Version:


Table: sessions
cols             | type   | fk
----------------------
id               | int
limit            | int
start_time_stamp | timestamp

Table: session_data
cols             | type      | fk
----------------------
id               | int
session_id       | int       | session->id
offset           | int  // ms offset from session start
dynamic          | int
position_x       | int
position_y       | int
position_z       | int


 */
