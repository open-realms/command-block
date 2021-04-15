import { Module } from '@nestjs/common';
import { DropletController } from './droplet.controller';
import { DropletService } from './droplet.service';

@Module({
  controllers: [DropletController],
  providers: [DropletService]
})
export class DropletModule {}
