import { Module } from '@nestjs/common';
import { WorldModule } from '../world/world.module';
import { WorldsController } from './worlds.controller';
import { WorldsService } from './worlds.service';

@Module({
  imports: [WorldModule],
  controllers: [WorldsController],
  providers: [WorldsService]
})
export class WorldsModule {}
