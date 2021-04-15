import { Injectable } from '@nestjs/common';

@Injectable()
export class DropletService {
  async getAllDroplets(): Promise<string> {
    return 'Here are all the servers!';
  }

  async createDroplet(): Promise<string> {
    return 'A new server has been created!';
  }

  async deleteDroplet(id: string): Promise<string> {
    return 'Server ${id} has been deleted!';
  }

  async getDropletDetails(id: string): Promise<string> {
    return 'Here are the details for this server: ${id}';
  }

  async updateDropletDetails(id: string): Promise<string> {
    return 'Server ${id} has been updated!';
  }

  async startDroplet(id: string): Promise<string> {
    return 'Server ${id} has been started!';
  }

  async stopDroplet(id: string): Promise<string> {
    return 'Server ${id} has been stopped!';
  }
}
