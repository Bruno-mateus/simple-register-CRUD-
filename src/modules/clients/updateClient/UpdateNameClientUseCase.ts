import { prisma } from "../../../lib/prisma";


interface IClient{
    name: string;
    id:string
}

export class UpdateNameClientUseCase{
    
    async execute({name,id}:IClient){
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
                    name:name
                }
                
            }   
        )
        return clientUpdate


    }
}