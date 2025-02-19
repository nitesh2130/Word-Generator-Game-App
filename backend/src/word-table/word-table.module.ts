import { Module } from '@nestjs/common';
import { WordTableController } from './word-table.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Word } from './word.model';
import { WordTableService } from './word-table.service';

@Module({
  imports: [SequelizeModule.forFeature([Word])],
  providers: [WordTableService],
  controllers: [WordTableController],
})
export class WordTableModule {}
