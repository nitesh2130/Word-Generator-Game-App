import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoom {
  @IsString()
  @IsNotEmpty()
  roomName: string;

  //   @IsNumber()
  //   @IsNotEmpty()
  //   roomOwner: number;

  @IsNumber()
  @IsNotEmpty()
  userFirstemail: number;

  @IsNumber()
  @IsNotEmpty()
  userSecondemail: number;

  @IsNumber()
  @IsNotEmpty()
  userThirdemail: number;

  @IsNumber()
  @IsNotEmpty()
  userFourthemail: number;
}
