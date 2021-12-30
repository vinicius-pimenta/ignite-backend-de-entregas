import { prisma } from '../../../../database/prisma-client'

interface IUpdateEndDate {
  idDelivery: string
  idDeliveryman: string
}

export class UpdateEndDateUseCase {
  async execute ({ idDelivery, idDeliveryman }: IUpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: idDelivery,
        fk_id_deliveryman: idDeliveryman
      },
      data: {
        end_at: new Date()
      }
    })

    return result
  }
}
