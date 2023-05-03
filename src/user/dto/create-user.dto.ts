/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {

  // @Matches('[a-z0-9\-]+') 
  // test:string;
  
  // @IsEmail({}, { message: 'Invaสาดเ้สวดเ้วา.' })
  @IsNotEmpty()
  f_name: string;

  @IsNotEmpty()
  l_name: string;
  
  is_active: boolean;

}