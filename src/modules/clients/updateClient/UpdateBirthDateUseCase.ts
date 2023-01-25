import { prisma } from "../../../lib/prisma";


interface IClient{
    birthDate: string;
    id:string
}

export class UpadateClieBirthDatentUseCase{
    
    async execute({birthDate,id}:IClient){
        const client = await prisma.client.findFirst({
            where:{
                id:id
            }
        })
        
        if(!client){
            throw new Error("Client Not Found")
        }

         

        const clientUpdate = await prisma.client.update(
            {
                where:{
                    id:client.id
                },
                data:{
                    birthDate:new Date(birthDate)

                }
                
            }   
        )
        return clientUpdate


    }
}