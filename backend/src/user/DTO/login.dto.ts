import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
// import { IsEmail } from "sequelize-typescript";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;
}
