import { Request, Response } from "express";

import { CreateJobsService } from "../services/CreateJobsService";

class JobsController{

    async handle(request: Request, reply: Response){
        const {title, description, location, salary} = request.body as {title: String, description: String, location:String, salary: BigInt};

        const createJobsService = new CreateJobsService();

        const jobs = await createJobsService.execute();

        reply.send(jobs);

    
}
}
export {JobsController}