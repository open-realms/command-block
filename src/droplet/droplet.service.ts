import { Injectable } from '@nestjs/common';

@Injectable()
export class DropletService {
  getAllDroplets(): string {
    return 'Here are all the servers!';
  }

  createDroplet(): string {
    return 'A new server has been created!';
  }

  deleteDroplet(id: string): string {
    return 'Server ${id} has been deleted!';
  }

  getDropletDetails(id: string): string {
    return 'Here are the details for this server: ${id}';
  }

  updateDropletDetails(id: string): string {
    return 'Server ${id} has been updated!';
  }

  startDroplet(id: string): string {
    return 'Server ${id} has been started!';
  }

  stopDroplet(id: string): string {
    return 'Server ${id} has been stopped!';
  }
}
