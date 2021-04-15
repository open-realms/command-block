import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('servers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllServers(): string {
    return this.appService.getAllServers();
  }

  @Post()
  createServer(): string {
    return this.appService.createServer();
  }

  @Delete(':id')
  deleteServer(@Param() params): string {
    return this.appService.deleteServer(params.id);
  }

  @Get(':id')
  getServerDetails(@Param() params): string {
    return this.appService.getServerDetails(params.id);
  }

  @Put(':id')
  updateServerDetails(@Param() params): string {
    return this.appService.updateServerDetails(params.id);
  }

  @Put(':id/start')
  startServer(@Param() params): string {
    return this.appService.startServer(params.id);
  }

  @Put(':id/stop')
  stopServer(@Param() params): string {
    return this.appService.stopServer(params.id);
  }
}
