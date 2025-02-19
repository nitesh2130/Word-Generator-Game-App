import { IsEmpty, IsNotEmpty, IsNumber } from 'class-validator';

export class AddAndUpdateAttempOfUser {
  @IsNumber()
  @IsNotEmpty()
  userAttempt: number;

  @IsNumber()
  @IsNotEmpty()
  roomId: number;

  //   @IsNumber()
  //   @IsEmpty()
  //   thirdUserAttempt: number;

  //   @IsNumber()
  //   @IsEmpty()
  //   fourthUserAttempt: number;
}
