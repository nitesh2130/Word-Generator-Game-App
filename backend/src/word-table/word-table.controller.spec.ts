import { Test, TestingModule } from '@nestjs/testing';
import { WordTableController } from './word-table.controller';

describe('WordTableController', () => {
  let controller: WordTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordTableController],
    }).compile();

    controller = module.get<WordTableController>(WordTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
