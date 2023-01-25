import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { testCPF } from "../../../utils/testCPF";
import { CreateClientUseCase } from "./CreateClientUseCase";


export class CreateClientController{
   async handle(req:Request,res:Response){
      
      
    const {name,birthDate,cpf} = req.body;

    const createClientUseCase = new CreateClientUseCase();


    const userAlreadyExists = await prisma.client.findFirst({
      where:{
          cpf:{
              equals:cpf,

          }
      }
     })

      if(userAlreadyExists){

        return res.status(400).json({
         message: "CPF ja cadastrado",
         })

      } 

      const validateCpf = testCPF(cpf)

      if(!validateCpf){
        return res.status(400).json({
            message: "CPF INVALIDO",

            })
      }

      const result = await createClientUseCase.execute({name,birthDate,cpf})

      return res.status(201).json(result);  
    
      
   
    
   
    
   }
}