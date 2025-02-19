import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Room',
  timestamps: true,
})
export class Room extends Model<Room> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  roomName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  roomWord: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roomOwner: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userFirst: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userSecond: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userThird: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userFourth: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  firstUserAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  secondUserAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  thirdUserAttempt: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fourthUserAttempt: Number;
}
