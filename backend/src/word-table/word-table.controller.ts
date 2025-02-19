import { JwtAuthGuard } from 'src/user/jwt-auth.gaurd';
import { WordTableService } from './word-table.service';
import { Controller, Get, UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('word-table')
export class WordTableController {
  constructor(private readonly WordTableService: WordTableService) {}

  @Get('getWord')
  getRandomWord() {
    return this.WordTableService.getRandomWord();
  }
}
