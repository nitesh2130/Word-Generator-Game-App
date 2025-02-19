import { Module } from '@nestjs/common';
import { RoomDetailsController } from './room-details.controller';
import { RoomDetailsService } from './room-details.service';
import { Room } from './room.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Room])],
  controllers: [RoomDetailsController],
  providers: [RoomDetailsService],
})
export class RoomDetailsModule {}
