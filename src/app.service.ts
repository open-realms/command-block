import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllServers(): string {
    return 'Here are all the servers!';
  }

  createServer(): string {
    return 'A new server has been created!';
  }

  deleteServer(id: string): string {
    return 'Server ${id} has been deleted!';
  }

  getServerDetails(id: string): string {
    return 'Here are the details for this server: ${id}';
  }

  updateServerDetails(id: string): string {
    return 'Server ${id} has been updated!';
  }

  startServer(id: string): string {
    return 'Server ${id} has been started!';
  }

  stopServer(id: string): string {
    return 'Server ${id} has been stopped!';
  }
}
