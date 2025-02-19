import { Test, TestingModule } from '@nestjs/testing';
import { WordTableService } from './word-table.service';

describe('WordTableService', () => {
  let service: WordTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordTableService],
    }).compile();

    service = module.get<WordTableService>(WordTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
