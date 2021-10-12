import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinecraftService } from '@open-realms/do-minecraft';
import { Droplet } from 'digitalocean-js';
import { WorldService } from '../world/world.service';
import { CreateWorldDto } from './dto/create-world.dto';

@Injectable()
export class WorldsService {
  constructor(private config: ConfigService, private world: WorldService) {}

  async getAllWorlds(): Promise<string> {
    // fetch data from database about each world

    return 'Here are all the worlds!';
  }

  async createWorld(createWorldDto: CreateWorldDto): Promise<Droplet> {
    // TODO: Get digitalocean api key from user record
    // instead of local config. This is okay for now for testing
    // until we get users set up properly.
    const minecraftService = new MinecraftService(
      this.config.get('DIGITAL_OCEAN_KEY')
    );

    // Create droplet and minecraft world on DigitalOcean
    const droplet = await minecraftService.createMinecraftDroplet(
      createWorldDto
    );

    // Add world to database
    await this.world.createWorld({
      name: createWorldDto.name,
      flavor: createWorldDto.flavor,
      dropletId: droplet.id.toString()
    });

    return droplet;
  }

  async deleteWorld(id: number): Promise<string> {
    // TODO: See above
    const minecraftService = new MinecraftService(
      this.config.get('DIGITAL_OCEAN_KEY')
    );
    await minecraftService.killMinecraftDroplet(id);

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
    // TODO: See above
    const minecraftService = new MinecraftService(
      this.config.get('DIGITAL_OCEAN_KEY')
    );
    await minecraftService.stopMinecraftDroplet(id);

    // take and save snapshot of droplet

    // destroy droplet

    // update database

    return 'World ${id} has been stopped!';
  }
}
