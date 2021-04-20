import { Injectable } from '@nestjs/common';
import { MinecraftService } from '@open-realms/do-minecraft';
import { CreateWorldDto } from './create-world.dto';

@Injectable()
export class WorldsService {
  constructor(private readonly minecraftService: MinecraftService) {}

  async getAllWorlds(): Promise<string> {
    // fetch data from database about each world

    return 'Here are all the worlds!';
  }

  async createWorld(createWorldDto: CreateWorldDto): Promise<string> {
    // create droplet and server on DigitalOcean
    await this.minecraftService.createMinecraftDroplet(createWorldDto);

    // update database with info about world

    return 'A new world has been created!';
  }

  async deleteWorld(id: number): Promise<string> {
    await this.minecraftService.killMinecraftDroplet(id);

    // remove all info from database about that world

    return 'World ${id} has been deleted!';
  }

  async getWorldDetails(id: number): Promise<string> {
    // fetch world details from database

    return 'Here are the details for this world: ${id}';
  }

  async updateWorldDetails(id: number): Promise<string> {
    // update DigitalOcean

    // update database

    return 'World ${id} has been updated!';
  }

  async startWorld(id: number): Promise<string> {
    // use existing snapshot to create new droplet

    // update database

    return 'World ${id} has been started!';
  }

  async stopWorld(id: number): Promise<string> {
    await this.minecraftService.stopMinecraftDroplet(id);

    // take and save snapshot of droplet

    // destroy droplet

    // update database

    return 'World ${id} has been stopped!';
  }
}
