import { Controller, UseGuards } from '@nestjs/common';
import { RoomDetailsService } from './room-details.service';
import { JwtAuthGuard } from 'src/user/jwt-auth.gaurd';

@UseGuards(JwtAuthGuard)
@Controller('room-details')
export class RoomDetailsController {
  constructor(private readonly RoomDetailsService: RoomDetailsService) {}
}
