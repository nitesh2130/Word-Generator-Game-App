import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNumber()
  @MinLength(6, { message: 'Phone Number must be at least 6 characters' })
  phoneNumber: number;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
