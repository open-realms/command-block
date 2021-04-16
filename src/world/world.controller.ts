import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorldService } from './world.service';

@Controller('worlds')
export class WorldController {
  constructor(private readonly worldService: WorldService) {}

  @Get()
  async getAllWorlds(): Promise<string> {
    return await this.worldService.getAllWorlds();
  }

  @Post()
  async createWorld(): Promise<string> {
    return await this.worldService.createWorld();
  }

  @Delete(':id')
  async deleteWorld(@Param() params): Promise<string> {
    return await this.worldService.deleteWorld(params.id);
  }

  @Get(':id')
  async getWorldDetails(@Param() params): Promise<string> {
    return await this.worldService.getWorldDetails(params.id);
  }

  @Put(':id')
  async updateWorldDetails(@Param() params): Promise<string> {
    return await this.worldService.updateWorldDetails(params.id);
  }

  @Put(':id/start')
  async startWorld(@Param() params): Promise<string> {
    return await this.worldService.startWorld(params.id);
  }

  @Put(':id/stop')
  async stopWorld(@Param() params): Promise<string> {
    return await this.worldService.stopWorld(params.id);
  }
}
