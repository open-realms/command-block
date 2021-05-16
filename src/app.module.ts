import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { WorldModule } from './world/world.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, WorldModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
