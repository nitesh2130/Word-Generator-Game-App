import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Dashboard } from './dashboard.model';

@Injectable()
export class RoomDashboardService {
  constructor(
    @InjectModel(Dashboard) private DashboardModel: typeof Dashboard,
  ) {}
}
