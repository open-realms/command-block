import { Test, TestingModule } from '@nestjs/testing';
import { DropletController } from './droplet.controller';

describe('DropletController', () => {
  let controller: DropletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropletController],
    }).compile();

    controller = module.get<DropletController>(DropletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
