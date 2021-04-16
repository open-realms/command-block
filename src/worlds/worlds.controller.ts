import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorldsService } from './worlds.service';

@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Get()
  async getAllWorlds(): Promise<string> {
    return await this.worldsService.getAllWorlds();
  }

  @Post()
  async createWorld(): Promise<string> {
    return await this.worldsService.createWorld();
  }

  @Delete(':id')
  async deleteWorld(@Param() params): Promise<string> {
    return await this.worldsService.deleteWorld(params.id);
  }

  @Get(':id')
  async getWorldDetails(@Param() params): Promise<string> {
    return await this.worldsService.getWorldDetails(params.id);
  }

  @Put(':id')
  async updateWorldDetails(@Param() params): Promise<string> {
    return await this.worldsService.updateWorldDetails(params.id);
  }

  @Put(':id/start')
  async startWorld(@Param() params): Promise<string> {
    return await this.worldsService.startWorld(params.id);
  }

  @Put(':id/stop')
  async stopWorld(@Param() params): Promise<string> {
    return await this.worldsService.stopWorld(params.id);
  }
}
