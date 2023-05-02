/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {

  @Matches('[a-z0-9\-]+') 
  test:string;
  
  @IsEmail({}, { message: 'Invaสาดเ้สวดเ้วา.' })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

}