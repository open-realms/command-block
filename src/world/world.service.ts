import { Injectable } from '@nestjs/common';

@Injectable()
export class WorldService {
  async getAllWorlds(): Promise<string> {
    return 'Here are all the worlds!';
  }

  async createWorld(): Promise<string> {
    return 'A new world has been created!';
  }

  async deleteWorld(id: string): Promise<string> {
    return 'World ${id} has been deleted!';
  }

  async getWorldDetails(id: string): Promise<string> {
    return 'Here are the details for this world: ${id}';
  }

  async updateWorldDetails(id: string): Promise<string> {
    return 'World ${id} has been updated!';
  }

  async startWorld(id: string): Promise<string> {
    return 'World ${id} has been started!';
  }

  async stopWorld(id: string): Promise<string> {
    return 'World ${id} has been stopped!';
  }
}
