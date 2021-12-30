import { Router } from 'express'
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller'
import { AuthenticateClientController } from './modules/account/authenticate-client/authenticate-client-controller'
import { CreateDeliverymanController } from './modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller'
import { AuthenticateDeliverymanController } from './modules/account/authenticate-deliveryman/authenticate-deliveryman-controller'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.post('/client/', createClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

export { routes }
