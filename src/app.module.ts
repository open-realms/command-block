import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorldModule } from './world/world.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WorldsModule } from './worlds/worlds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    WorldModule,
    PrismaModule,
    UserModule,
    WorldsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
