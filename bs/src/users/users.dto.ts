import {IsEmail, IsEnum, IsNotEmpty, IsString, Length} from 'class-validator';

export enum UserRoleE {
  ADMIN = 'ADMIN',
  USER = 'USER',
  INTERN = 'INTERN'
}

export type UserRoleT = keyof typeof UserRoleE;

export class UserC {
  // @IsNumber()
  id: number;

  @IsString()
  @Length(1, 255)
  @IsNotEmpty({message: 'Name is required'})
  name: string;

  @IsEmail()
  @Length(1, 255)
  @IsNotEmpty({message: 'Email is required'})
  email: string;

  @IsString()
  @Length(1, 255)
  @IsNotEmpty({message: 'Password is required'})
  password: string;

  @IsEnum(UserRoleE, {each: true})
  role: UserRoleT[];
}
