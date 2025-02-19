import { AddAndUpdateAttempOfUser } from './DTO/addAndUpdate-attemptOfUser.dto';
import { User } from './../user/user.model';
import { CreateRoom } from './DTO/create-room.dto';
import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Room } from './room.model';
import { InjectModel } from '@nestjs/sequelize';
import { Word } from 'src/word-table/word.model';
import { PlayRoomDto } from './DTO/playRoom.dto';

@Injectable()
export class RoomDetailsService {
  constructor(
    // @InjectModel(Room) private RoomModel: typeof Room,
    @InjectModel(Room)
    private readonly RoomModel: typeof Room,
    @InjectModel(Word) private WordModel: typeof Word,
    @InjectModel(User) private UserModel: typeof User,
  ) {}

  //for create the Room
  async createRoom(createRoom: CreateRoom, roomOwner: number) {
    const {
      roomName,
      userFirstemail,
      userSecondemail,
      userThirdemail,
      userFourthemail,
    } = createRoom;
    if (
      !roomName ||
      !roomOwner ||
      !userFirstemail ||
      !userSecondemail ||
      !userThirdemail ||
      !userFourthemail
    ) {
      throw new NotFoundException(
        'Room data is not found, all feild are required',
      );
    }

    const firstUserAttempt = 0;
    const secondUserAttempt = 0;
    const thirdUserAttempt = 0;
    const fourthUserAttempt = 0;

    //check room name is exist or not
    const roomExist = await this.RoomModel.findOne({
      where: { roomName: roomName },
    });
    if (roomExist) {
      throw new BadGatewayException('room Allready Exist');
    }

    //check the first user
    const userOne = await this.UserModel.findOne({
      where: { email: userFirstemail },
    });
    if (!userFirstemail) {
      throw new NotFoundException('First user email is not found');
    }

    const userSecond = await this.UserModel.findOne({
      where: { email: userSecondemail },
    });
    if (!userSecondemail) {
      throw new NotFoundException('Second user email is not found');
    }

    //check the first user
    const userThird = await this.UserModel.findOne({
      where: { email: userThirdemail },
    });
    if (!userThirdemail) {
      throw new NotFoundException('Third user email is not found');
    }

    //check the first user
    const userFourth = await this.UserModel.findOne({
      where: { email: userFourthemail },
    });
    if (!userFourthemail) {
      throw new NotFoundException('Fourth user email is not found');
    }

    //get the randomWord for the Room
    const count = await this.WordModel.count();
    if (count === 0) {
      throw new NotFoundException('No words found.');
    }
    const randomIndex = Math.floor(Math.random() * count);
    const roomWord = await this.WordModel.findOne({
      offset: randomIndex,
      attributes: ['word'],
    });
    if (!roomWord) {
      throw new BadGatewayException('not getting the random word');
    }
    // create the room
    const room = {
      roomWord: roomWord,
      roomName: roomName,
      roomOwner: roomOwner,
      userFirst: userOne?.id,
      userSecond: userSecond?.id,
      userThird: userThird?.id,
      userFourth: userFourth?.id,
    };
    const newRoom = await this.RoomModel.create({
      roomWord: roomWord?.roomWord,
      roomName: roomName,
      roomOwner: roomOwner,
      userFirst: userOne?.id,
      userSecond: userSecond?.id,
      userThird: userThird?.id,
      userFourth: userFourth?.id,
      firstUserAttempt,
      secondUserAttempt,
      thirdUserAttempt,
      fourthUserAttempt,
    });

    // await newRoom.save();
    // firstUserAttempt,
    // secondUserAttempt,
    // thirdUserAttempt,
    // fourthUserAttempt,

    if (!newRoom) {
      throw new BadGatewayException('somthing wend wrong, room is not created');
    }

    return { newRoom, message: 'room is created successfully' };
  }

  // //For add the attempt the user
  // async addAttempt() {}

  //play room the user
  async playRoom(playRoomDto: PlayRoomDto, userId) {
    const { roomName } = playRoomDto;
    const room = await this.RoomModel.findOne({
      where: { roomName: roomName },
    });
    if (
      room?.userFirst === userId ||
      room?.userSecond === userId ||
      room?.userThird === userId ||
      room?.userFourth === userId
    ) {
      const roomWord = room?.roomWord;
      return {
        roomWord,
        message: 'user getting the game, Now user can play the game',
      };
    }
  }

  //update the user attempt
  async addUserAttempt(
    addAndUpdateAttempOfUser: AddAndUpdateAttempOfUser,
    userId: number,
  ) {
    const { userAttempt, roomId } = addAndUpdateAttempOfUser;

    const room = await this.RoomModel.findOne({
      where: { id: roomId },
    });

    //for the check First user
    if (room?.userFirst === userId) {
      await this.RoomModel.update(
        { firstUserAttempt: userAttempt },
        { where: { id: room.id } },
      );
    } else {
      //for the check First user
      if (room?.userSecond === userId) {
        await this.RoomModel.update(
          { secondUserAttempt: userAttempt },
          { where: { id: room.id } },
        );
      } else {
        //for the check First user
        if (room?.userThird === userId) {
          await this.RoomModel.update(
            { thirdUserAttempt: userAttempt },
            { where: { id: room.id } },
          );
        } else {
          //for the check First user
          if (room?.userFourth === userId) {
            await this.RoomModel.update(
              { fourthUserAttempt: userAttempt },
              { where: { id: room.id } },
            );
          }
        }
      }
    }

    return { message: 'user attempt is save successfully' };
  }
}
