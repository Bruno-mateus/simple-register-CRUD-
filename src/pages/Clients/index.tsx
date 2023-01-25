import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { Button, ButtonBack, ButtonCloseFormModal, ClientCard, ClientsContainter, ClientsContent, FormEditClientContainer, FormEditClientForm, FormError, InputGroup } from "./styles";
import { format, formatDistance } from 'date-fns'
import { ArrowLeft, Pencil, Trash, UserCircle, X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { AxiosError } from "axios";
import { ptBR } from "date-fns/locale";
import { handleResetInputs } from "../../utils/resetInputs";

const ClientUpdateFormSchema = z.object({
    name:z.string().min(3,{
        message:"O nome tem que ter no minímo de 3 caracteres",
    }
    ),
    birthDate:z.string().refine(date=>new Date(date)<new Date(),{
         message:"Data de nascimento inválida"
    })
})


type clientUpdateFormData = z.infer<typeof ClientUpdateFormSchema>



export function Clients(){

    const formatCPF = (cpf:string)=> cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")


    const {clients,getClients,updateClients,deleteClient} = useContext(ClientContext)

    
    const [clientUpdate, setClientUpdate] = useState({
        id:'',
        update:false,
        name:""
    }) 


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<clientUpdateFormData>({
        resolver:zodResolver(ClientUpdateFormSchema)
    })

    async function handleDataUpdateClient({name,birthDate}:clientUpdateFormData){
  

        try{
            const clientUpdateBirthDate = await api.put('/clients/update-birth-date',{
                id:clientUpdate.id,
                birthDate
            })
            const clientUpdateName = await api.put('/clients/update-name',{
                id:clientUpdate.id,
                name
            })
            
            
            
    
        if(clientUpdateName.status === 201 && clientUpdateBirthDate.status === 201){
            alert("Client atualizado com sucesso!")
            getClients()
        }
    
    
        }catch(err){
            if (err instanceof AxiosError && err?.response?.data?.message) {
                alert(err.response.data.message)
                return
              }
              
              return console.error(err)
        }
    }

    useEffect(()=>{
        getClients()
    },[])
    
    return(
        <ClientsContainter>
      
      {
        clientUpdate.update&&(
        <FormEditClientContainer>
            <FormEditClientForm onSubmit={handleSubmit(handleDataUpdateClient)}>
                <header>
                    <h2>
                        <UserCircle size={32}/>
                        Atualização cadastral:
                    </h2>
                    <ButtonCloseFormModal type="button" onClick={()=>{
                        setClientUpdate({
                            id:"",
                            name:"",
                            update:false
                         })

                         handleResetInputs()
                        }
                    }>
                        <X size={24}/>
                    </ButtonCloseFormModal>
                </header>
                <InputGroup>
                    <label htmlFor="birthDate">Escolha um novo nome</label>
                    <input type="text"  defaultValue={clientUpdate.name} placeholder="Digite um nome" {...register("name")}/>
                    <FormError>{errors.name?.message}</FormError>
                    <label htmlFor="birthDate">Escolha uma nova data de nascimento</label>
                    <input type="date" {...register("birthDate")}  />
                    <FormError>{errors.birthDate?.message}</FormError>
                    <Button type="submit" disabled={isSubmitting}>Atualizar</Button>

                </InputGroup>
            </FormEditClientForm>
        </FormEditClientContainer>)
}
            <header>
                <ButtonBack onClick={()=>location.href="/"}>
                    <ArrowLeft size={32}  />
                </ButtonBack> 
                <h1>Clientes cadastrados</h1>
             </header>
             
            <ClientsContent>
                {
                    clients.map(client =>{
                        return (
                        <ClientCard key={client.id}>
                         <header>
                         <button
                         onClick={()=>{
                            setClientUpdate({
                                id:client.id,
                                update:!clientUpdate.update,
                                name:client.name,
                                
                            })
 
                         }}
                         >
                            <Pencil size={20}/>
                         </button>
                              <strong>{client.name}</strong> 
                            <button onClick={()=>{
                                deleteClient(client.id,client.name)
                                
                                }}>
                                    <Trash size={20}/>
                                </button>
                        </header>
                         <ul>
                            <li>Nome: {client.name}</li>
                            <li>CPF: {formatCPF(client.cpf)}</li>
                            <li>Data de nascimento: {format(new Date(client.birthDate.substring(0,10).replace('-','/')), 'dd/MM/yyyy',{
                                locale:ptBR,
                                
                            })}</li>
                            <li>Cadastro criado {' '}
                                {formatDistance(
                                    new Date(client.createdAt),
                                    new Date(),
                                    {
                                        addSuffix:true,
                                        locale:ptBR,
                                    }
                            
                                 )}</li>
                         </ul>
                        </ClientCard>
                        )
                    })
                }
            </ClientsContent>
        </ClientsContainter>
    )
}
