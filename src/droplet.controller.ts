import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './droplet.service';

@Controller('droplets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllDroplets(): string {
    return this.appService.getAllDroplets();
  }

  @Post()
  createDroplet(): string {
    return this.appService.createDroplet();
  }

  @Delete(':id')
  deleteDroplet(@Param() params): string {
    return this.appService.deleteDroplet(params.id);
  }

  @Get(':id')
  getDropletDetails(@Param() params): string {
    return this.appService.getDropletDetails(params.id);
  }

  @Put(':id')
  updateDropletDetails(@Param() params): string {
    return this.appService.updateDropletDetails(params.id);
  }

  @Put(':id/start')
  startDroplet(@Param() params): string {
    return this.appService.startDroplet(params.id);
  }

  @Put(':id/stop')
  stopDroplet(@Param() params): string {
    return this.appService.stopDroplet(params.id);
  }
}
