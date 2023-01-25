import { Request, Response } from "express";
import { UpdateNameClientUseCase } from "./UpdateNameClientUseCase";


export class UpdateNameClientController{
    async handle(req:Request,res:Response){
        const {name,id} = req.body;
        const updateNameClientUseCase = new UpdateNameClientUseCase()

        const result =   await updateNameClientUseCase.execute({name,id});

        return res.status(201).json(result);


    }
}