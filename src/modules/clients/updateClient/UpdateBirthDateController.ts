import { Request, Response } from "express";
import { UpadateClieBirthDatentUseCase } from "./UpdateBirthDateUseCase";



export class UpdateBirthDateController{
    async handle(req:Request,res:Response){
        const {birthDate,id} = req.body;
        const upadateClieBirthDatentUseCase = new UpadateClieBirthDatentUseCase()

        const result =   await upadateClieBirthDatentUseCase.execute({birthDate,id});

        return res.status(201).json(result);


    }
}