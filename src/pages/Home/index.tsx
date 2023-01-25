import { UserCircle } from "phosphor-react";
import { Button, ButtonListClients, FormContainer, FormContent, FormError, HeroContainer, HomeContainer, HomeContent, InputGroup } from "./styles";
import userBackground from '../../assets/registerbackground.svg'
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../lib/axios";
import { AxiosError } from "axios";
import { testCPF } from "../../utils/testCPF";
import { handleResetInputs } from "../../utils/resetInputs";



const ClientFormSchema = z.object({
    name:z.string().min(3,{
        message:"O nome tem que ter no minímo de 3 caracteres"

    }),
    birthDate:z.string().refine(date=>new Date(date)<new Date(),{
         message:"Data de nascimento inválida"
    }),
    cpf:z.string().min(11,{
        message:"CPF inválido"

    }).max(11, {
        message:"CPF inválido"
    }).refine(cpf=>testCPF(cpf),{
       message:"CPF inválido"
    })
})


type clientFormData = z.infer<typeof ClientFormSchema>

export function Home(){


      

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<clientFormData>({
        resolver:zodResolver(ClientFormSchema)
    })

   async  function handleDataRegisterClient({birthDate,cpf,name}: clientFormData){
    
    
    try{
        const client =  await api.post('/clients/create', {
            birthDate,
            cpf,
            name
    })

    if(client.status === 201){
        alert("Client cadastrado com sucesso!")
        
    }

    handleResetInputs()
    return client

    }catch(err){
        if (err instanceof AxiosError && err?.response?.data?.message) {
            alert(err.response.data.message)
            return
          }
          
          return console.error(err)
    }
    
    
    }


    return(
        <HomeContainer>
            <h1>Bem vindo Admin</h1>
            <ButtonListClients
                onClick={
                    ()=>{
                        location.href="/clients"
                    }
                }
            >Listar clientes</ButtonListClients>
         <HomeContent>
            <HeroContainer>
                <img src={userBackground} alt="" />
            </HeroContainer>

            <FormContainer>
            <FormContent onSubmit={handleSubmit(handleDataRegisterClient)}>
                <header>
                    <h2>
                        <UserCircle size={32}/>
                        Cadastre um cliente:</h2>
                </header>
                <InputGroup>
                    
                    <input type="number"  placeholder="Digite um cpf (somente números)" {...register("cpf")}/>
                    <FormError>{errors.cpf?.message}</FormError>
                    <input type="text"   placeholder="Digite um nome" {...register("name")}/>
                    <FormError>{errors.name?.message}</FormError>
                    <label htmlFor="birthDate" >Data de nascimento</label>
                    <input type="date"  {...register("birthDate")}  />
                    <FormError>{errors.birthDate?.message}</FormError>
                    <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>

                </InputGroup>
            </FormContent>
            </FormContainer>
         </HomeContent>
        </HomeContainer>
    )
}