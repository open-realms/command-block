import { Prisma, World } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorldService {
  constructor(private prisma: PrismaService) {}

  async getWorld(
    worldWhereUniqueInput: Prisma.WorldWhereUniqueInput
  ): Promise<World | null> {
    return this.prisma.world.findUnique({
      where: worldWhereUniqueInput
    });
  }

  async getWorlds(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.WorldWhereUniqueInput;
    where?: Prisma.WorldWhereInput;
    orderBy?: Prisma.WorldOrderByInput;
  }): Promise<World[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.world.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async createWorld(data: Prisma.WorldCreateInput): Promise<World> {
    return this.prisma.world.create({
      data
    });
  }

  async updateWorld(params: {
    where: Prisma.WorldWhereUniqueInput;
    data: Prisma.WorldUpdateInput;
  }): Promise<World> {
    const { where, data } = params;
    return this.prisma.world.update({
      data,
      where
    });
  }

  async deleteWorld(where: Prisma.WorldWhereUniqueInput): Promise<World> {
    return this.prisma.world.delete({
      where
    });
  }
}
