import { Router } from "express";
import { CreateClientController } from "./modules/clients/createClients/CreateClientController";
import { DeleteClientController } from "./modules/clients/deleteClients/DeleteClientController";
import { ListClientsController } from "./modules/clients/listClients/ListClientsController";
import { UpdateBirthDateController } from "./modules/clients/updateClient/UpdateBirthDateController";
import { UpdateNameClientController } from "./modules/clients/updateClient/UpdateNameClientController";


const routes = Router()

const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController()
const updateNameClientController = new UpdateNameClientController()
const updateBirthDateController = new UpdateBirthDateController()
const listClientsController = new ListClientsController()



routes.get("/clients/list",listClientsController.handle )

routes.post("/clients/create", createClientController.handle)
routes.delete("/clients/delete", deleteClientController.handle)
routes.put("/clients/update-name", updateNameClientController.handle)
routes.put("/clients/update-birth-date", updateBirthDateController.handle)



export {routes}