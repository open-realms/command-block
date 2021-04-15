import { Module } from '@nestjs/common';
import { AppController } from './droplet.controller';
import { AppService } from './droplet.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
