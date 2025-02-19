import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './user/user.service';
import { UserModule } from './user/user.module';
import { WordTableService } from './word-table/word-table.service';
import { WordTableModule } from './word-table/word-table.module';
import { RoomDashboardModule } from './room-dashboard/room-dashboard.module';
import { RoomDetailsModule } from './room-details/room-details.module';

@Module({
  imports: [UserModule, WordTableModule, RoomDashboardModule, RoomDetailsModule],
  controllers: [AppController],
  providers: [AppService, UsersService, WordTableService],
})
export class AppModule {}
