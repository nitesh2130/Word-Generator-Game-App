import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Word',
  timestamps: true,
})
export class Word extends Model<Word> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  roomWord: string;
}
