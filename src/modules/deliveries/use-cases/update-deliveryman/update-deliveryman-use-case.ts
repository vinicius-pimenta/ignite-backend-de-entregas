import { prisma } from '../../../../database/prisma-client'

interface IUpdateDeliveryman {
  idDelivery: string
  idDeliveryman: string
}

export class UpdateDeliverymanUseCase {
  async execute ({ idDelivery, idDeliveryman }: IUpdateDeliveryman) {
    const result = await prisma.deliveries.update({
      where: {
        id: idDelivery
      },
      data: {
        fk_id_deliveryman: idDeliveryman
      }
    })

    return result
  }
}
