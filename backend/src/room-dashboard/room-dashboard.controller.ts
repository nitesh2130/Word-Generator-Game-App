import { Controller, UseGuards } from '@nestjs/common';
import { RoomDashboardService } from './room-dashboard.service';
import { JwtAuthGuard } from 'src/user/jwt-auth.gaurd';

@UseGuards(JwtAuthGuard)
@Controller('room-dashboard')
export class RoomDashboardController {
  constructor(private readonly RoomDashboardService: RoomDashboardService) {}
}
