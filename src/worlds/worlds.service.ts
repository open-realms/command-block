import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinecraftService } from '@open-realms/do-minecraft';
import { World } from '.prisma/client';
import { WorldService } from '../world/world.service';
import { CreateWorldDto } from './dto/create-world.dto';

@Injectable()
export class WorldsService {
  constructor(private config: ConfigService, private world: WorldService) {}

  async getAllWorlds(): Promise<string> {
    // fetch data from database about each world

    return 'Here are all the worlds!';
  }

  async createWorld(createWorldDto: CreateWorldDto): Promise<World> {
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
    const world = await this.world.createWorld({
      name: createWorldDto.name,
      flavor: createWorldDto.flavor,
      dropletId: droplet.id
    });

    return world;
  }

  async deleteWorld(id: string): Promise<void> {
    const minecraftService = new MinecraftService(
      this.config.get('DIGITAL_OCEAN_KEY')
    );

    const world = await this.world.getWorld({ id });

    await minecraftService.killMinecraftDroplet(world.dropletId);

    await this.world.deleteWorld({ id });
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
