import { prisma } from '../../../../database/prisma-client'

export class FindAllDeliveriesUseCase {
  async execute (idClient: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: idClient
      },
      include: {
        deliveries: true
      }
    })

    return deliveries
  }
}
