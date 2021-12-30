import { Request, Response } from 'express'
import { FindAllDeliveriesDeliverymanUseCase } from './find-all-deliveries-deliveryman-use-case'

export class FindAllDeliveriesDeliverymanController {
  async handle (request: Request, response: Response) {
    const { idDeliveryman } = request

    const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase()
    const deliveries = await findAllDeliveriesUseCase.execute(idDeliveryman)

    return response.json(deliveries)
  }
}
