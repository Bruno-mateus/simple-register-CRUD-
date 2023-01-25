import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";


export class DeleteClientController{
   async handle(req:Request,res:Response){

    const {id} = req.body;
    const deleteClientUseCase = new DeleteClientUseCase();

    const result = await deleteClientUseCase.execute({id})
    
    return res.status(200).json(result);

   }
}