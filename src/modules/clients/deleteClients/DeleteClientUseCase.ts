

import { prisma } from "../../../lib/prisma";


interface IClient{
   id:string;
}

export class DeleteClientUseCase{

    async execute({id}:IClient){
        const client = await prisma.client.findFirst({
            where: {
                id: {
                    equals: id
                }
            }
        })

        if(!client) throw new Error('Client not found');

        
       const deleteClient = await prisma.client.delete({
            where:{
                id:client.id
                
                
            }
        })
        return deleteClient

    }
}