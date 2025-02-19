import { Test, TestingModule } from '@nestjs/testing';
import { RoomDashboardController } from './room-dashboard.controller';

describe('RoomDashboardController', () => {
  let controller: RoomDashboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomDashboardController],
    }).compile();

    controller = module.get<RoomDashboardController>(RoomDashboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
