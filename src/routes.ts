import { Router } from 'express'
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller'
import { AuthenticateClientController } from './modules/account/authenticate-client/authenticate-client-controller'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

routes.post('/authenticate', authenticateClientController.handle)
routes.post('/client/', createClientController.handle)

export { routes }
