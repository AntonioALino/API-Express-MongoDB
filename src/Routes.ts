import { JobsController } from "./controllers/JobsController";
import { Express, Router, Request, Response } from "express";


const router:Router = Router()

router.get('/jobs', (req : Request, res : Response) => {
    return {ok:true}
})

router.post('/jobs', (req : Request, res : Response) => {
    return new JobsController().handle(req, res);
}) 

router.get('/jobs/:id', (req : Request, res : Response) => {

})

export {router}
