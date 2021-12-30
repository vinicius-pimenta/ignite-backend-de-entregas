import { Router } from 'express'
import { CreateClientController } from './modules/clients/use-cases/create-client/create-client-controller'
import { AuthenticateClientController } from './modules/account/authenticate-client/authenticate-client-controller'
import { CreateDeliverymanController } from './modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller'
import { AuthenticateDeliverymanController } from './modules/account/authenticate-deliveryman/authenticate-deliveryman-controller'
import { CreateDeliveryController } from './modules/deliveries/use-cases/create-delivery/create-delivery-controller'
import { ensureAuthenticateClient } from './middlewares/ensure-auhenticate-client'
import { FindAllAvailableController } from './modules/deliveries/use-cases/find-all-available/find-all-available-controller'
import { ensureAuthenticateDeliveryman } from './middlewares/ensure-authenticate-deliveryman'
import { UpdateDeliverymanController } from './modules/deliveries/use-cases/update-deliveryman/update-deliveryman-controller'
import { FindAllDeliveriesController } from './modules/clients/use-cases/deliveries/find-all-deliveries-controller'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/use-cases/find-all-deliveries/find-all-deliveries-deliveryman-controller'
import { UpdateEndDateController } from './modules/deliveries/use-cases/updateEndDate/update-end-date-controller'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const deliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClient = new FindAllDeliveriesController()

const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.post('/client/', createClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handle)
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)

routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesClient.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle)

routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle)

export { routes }
