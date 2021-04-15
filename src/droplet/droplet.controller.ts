import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DropletService } from './droplet.service';

@Controller('droplets')
export class DropletController {
  constructor(private readonly dropletService: DropletService) {}

  @Get()
  async getAllDroplets(): Promise<string> {
    return await this.dropletService.getAllDroplets();
  }

  @Post()
  async createDroplet(): Promise<string> {
    return await this.dropletService.createDroplet();
  }

  @Delete(':id')
  async deleteDroplet(@Param() params): Promise<string> {
    return await this.dropletService.deleteDroplet(params.id);
  }

  @Get(':id')
  async getDropletDetails(@Param() params): Promise<string> {
    return await this.dropletService.getDropletDetails(params.id);
  }

  @Put(':id')
  async updateDropletDetails(@Param() params): Promise<string> {
    return await this.dropletService.updateDropletDetails(params.id);
  }

  @Put(':id/start')
  async startDroplet(@Param() params): Promise<string> {
    return await this.dropletService.startDroplet(params.id);
  }

  @Put(':id/stop')
  async stopDroplet(@Param() params): Promise<string> {
    return await this.dropletService.stopDroplet(params.id);
  }
}
