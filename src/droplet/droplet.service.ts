import { Injectable } from '@nestjs/common';

@Injectable()
export class DropletService {
  async getAllDroplets(): string {
    return 'Here are all the servers!';
  }

  async createDroplet(): string {
    return 'A new server has been created!';
  }

  deleteDroplet(id: string): string {
    return 'Server ${id} has been deleted!';
  }

  async getDropletDetails(id: string): string {
    return 'Here are the details for this server: ${id}';
  }

  async updateDropletDetails(id: string): string {
    return 'Server ${id} has been updated!';
  }

  async startDroplet(id: string): string {
    return 'Server ${id} has been started!';
  }

  async stopDroplet(id: string): string {
    return 'Server ${id} has been stopped!';
  }
}
