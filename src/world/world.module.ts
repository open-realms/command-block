import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { WorldService } from './world.service';

@Module({
  imports: [PrismaModule],
  providers: [WorldService],
  exports: [WorldService]
})
export class WorldModule {}
