import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorldsModule } from './worlds/worlds.module';

@Module({
  imports: [WorldsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
