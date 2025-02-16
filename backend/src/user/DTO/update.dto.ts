import {
  IsEmail,
  IsString,
  MinLength,
  IsNumber,
  IsEmpty,
} from 'class-validator';

export class UpdateDto {
  @IsString()
  @IsEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsEmpty()
  email: string;

  @IsNumber()
  @IsEmpty()
  @MinLength(6, { message: 'Phone Number must be at least 6 characters' })
  phoneNumber: number;

  @IsString()
  @IsEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
