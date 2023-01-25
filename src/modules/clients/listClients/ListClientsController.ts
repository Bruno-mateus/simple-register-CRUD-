import { Request, Response } from "express";
import { ListClientsUseCase } from "./ListClientsUseCase";

export class ListClientsController{
    async handle(req:Request, res:Response){
        const listClientsUseCase = new ListClientsUseCase();
        const allUsers = await listClientsUseCase.execute();

        return res.status(200).json(allUsers);

    }
}