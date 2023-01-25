import { prisma } from "../../../lib/prisma";



interface IClient{
    name: string;
    birthDate:string
    cpf: string;

}

export class CreateClientUseCase{

    async execute({name,birthDate,cpf}:IClient){

        const birthday = new Date(birthDate);

        const user = await prisma.client.create({
            data: {
                name,
                birthDate:birthday, 
                cpf
            }
        })

        return user
   }

    
}