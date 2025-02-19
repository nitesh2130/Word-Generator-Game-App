import { Test, TestingModule } from '@nestjs/testing';
import { RoomDashboardService } from './room-dashboard.service';

describe('RoomDashboardService', () => {
  let service: RoomDashboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomDashboardService],
    }).compile();

    service = module.get<RoomDashboardService>(RoomDashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
