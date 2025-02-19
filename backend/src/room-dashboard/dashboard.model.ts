import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Dashboard',
  timestamps: true,
})
export class Dashboard extends Model<Dashboard> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  roomName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  firstRank: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  secondRank: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  thirdRank: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  fourthRank: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  firstRankerAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  secondRankerAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  thirdRankerAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  fourthRankerAttempt: Number;
}
