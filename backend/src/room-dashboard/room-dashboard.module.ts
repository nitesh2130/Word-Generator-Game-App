import { Module } from '@nestjs/common';
import { RoomDashboardService } from './room-dashboard.service';
import { RoomDashboardController } from './room-dashboard.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dashboard } from './dashboard.model';

@Module({
  imports: [SequelizeModule.forFeature([Dashboard])],
  providers: [RoomDashboardService],
  controllers: [RoomDashboardController],
})
export class RoomDashboardModule {}
