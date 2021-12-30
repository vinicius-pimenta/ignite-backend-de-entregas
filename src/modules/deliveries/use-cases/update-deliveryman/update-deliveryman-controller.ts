import { Request, Response } from 'express'
import { UpdateDeliverymanUseCase } from './update-deliveryman-use-case'

export class UpdateDeliverymanController {
  async handle (request: Request, response: Response) {
    const { idDeliveryman } = request
    const { id: idDelivery } = request.params

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()
    const delivery = await updateDeliverymanUseCase.execute({
      idDeliveryman,
      idDelivery
    })

    return response.json(delivery)
  }
}
