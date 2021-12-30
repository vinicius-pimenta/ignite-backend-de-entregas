import { prisma } from '../../../../database/prisma-client'

export class FindAllAvailableUseCase {
  async execute () {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        fk_id_deliveryman: null
      }
    })

    return deliveries
  }
}
