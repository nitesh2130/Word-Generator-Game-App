import { Injectable, NotFoundException } from '@nestjs/common';
import { Word } from './word.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WordTableService {
  constructor(@InjectModel(Word) private WordModel: typeof Word) {}

  //get a single and random word to the word table

  async getRandomWord() {
    const count = await this.WordModel.count();
    if (count === 0) {
      throw new NotFoundException('No words found.');
    }
    const randomIndex = Math.floor(Math.random() * count);
    const randomWord = await this.WordModel.findOne({ offset: randomIndex });
    return randomWord;
  }
}
