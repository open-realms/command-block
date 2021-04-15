import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './droplet.controller';
import { AppService } from './droplet.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "A new server has been created!"', () => {
      expect(appController.createDroplet()).toBe('A new server has been created!');
    });
  });
});
