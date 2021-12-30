import { Router } from 'express'
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller'
import { AuthenticateClientController } from './modules/account/authenticate-client/authenticate-client-controller'
import { CreateDeliverymanController } from './modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/authenticate', authenticateClientController.handle)
routes.post('/client/', createClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

export { routes }
