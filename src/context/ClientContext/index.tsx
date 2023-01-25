import { createContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";


export interface Client {
    id:string;
    cpf: string;
    name: string;
    birthDate: string;
    createdAt: string;

}

interface ClientContextData{
    clients:Client[];
    updateClients:(clitents:Client[])=>void;
    getClients:()=>void;
    deleteClient:(id:string,name:string) => void;
    setClients:(clients:Client[])=>void
}



export interface ClientContextProviderProps{
    children: React.ReactNode;

}

export const ClientContext = createContext({} as ClientContextData);


export function ClientContextProvider({children}:ClientContextProviderProps) {
    const [clients,setClients] = useState<Client[]>([]);

   async function getClients(){
    
    try{
        const listClients = await api.get('/clients/list')

        setClients(()=>[...listClients.data])
    }catch(err){
        console.error(err)
    }
        

    }

    function updateClients(clitents:Client[]) {
        setClients(()=>[...clitents]);
   }

   async function deleteClient(id:string,name:string){
    try{

        if(confirm(`Deseja realmete exlcuir ${name} ?!`)){
            const client = await api.delete('/clients/delete',{
                data:{
                    id
                }})
                
               const clientsAfterDelete = clients.filter(client => client.id !== id)
                
                setClients(()=>[...clientsAfterDelete])

        if(client.status === 201){
            
            alert("cliente foi deletado com sucesso")
           
        }

        }
        
        
        
    }catch(err){
        console.error(err)
    }
   }
   
    return (
        <ClientContext.Provider value={{clients,updateClients,getClients,deleteClient,setClients}}>
            {children}
        </ClientContext.Provider>
    )
}
