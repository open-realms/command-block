import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DropletService } from './droplet.service';

@Controller('droplets')
export class DropletController {
  constructor(private readonly dropletService: DropletService) {}

  @Get()
  getAllDroplets(): string {
    return this.dropletService.getAllDroplets();
  }

  @Post()
  async createDroplet(): string {
    return await this.dropletService.createDroplet();
  }

  @Delete(':id')
  async deleteDroplet(@Param() params): string {
    return await this.dropletService.deleteDroplet(params.id);
  }

  @Get(':id')
  async getDropletDetails(@Param() params): string {
    return this.dropletService.getDropletDetails(params.id);
  }

  @Put(':id')
  updateDropletDetails(@Param() params): string {
    return this.dropletService.updateDropletDetails(params.id);
  }

  @Put(':id/start')
  startDroplet(@Param() params): string {
    return this.dropletService.startDroplet(params.id);
  }

  @Put(':id/stop')
  stopDroplet(@Param() params): string {
    return this.dropletService.stopDroplet(params.id);
  }
}
