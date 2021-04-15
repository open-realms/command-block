import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DropletModule } from './droplet/droplet.module';

@Module({
  imports: [DropletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
