import { IsNotEmpty, IsString } from 'class-validator';

export class PlayRoomDto {
  @IsNotEmpty()
  @IsString()
  roomName: string;
}
