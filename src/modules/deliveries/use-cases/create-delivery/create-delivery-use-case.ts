import { prisma } from '../../../../database/prisma-client'

interface ICreateDelivery {
  itemName: string
  idClient: string
}

export class CreateDeliveryUseCase {
  async execute ({ itemName, idClient }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: itemName,
        fk_id_client: idClient
      }
    })

    return delivery
  }
}
