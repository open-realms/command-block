import { Test, TestingModule } from '@nestjs/testing';
import { DropletService } from './droplet.service';

describe('DropletService', () => {
  let service: DropletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropletService],
    }).compile();

    service = module.get<DropletService>(DropletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
