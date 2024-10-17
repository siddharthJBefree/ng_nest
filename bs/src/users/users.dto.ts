import {IsArray, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class UserC {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty({message: 'Name is required'})
  name: string;

  @IsString()
  @IsNotEmpty({message: 'Email is required'})
  email: string;

  @IsString()
  @IsNotEmpty({message: 'Password is required'})
  password: string;

  @IsArray({
    each: true,
    message: 'Role should be an array'
  })
  role: UserRoleT[];
}

export type UserRoleT = keyof typeof UserRoleE;

export enum UserRoleE {
  ADMIN,
  USER,
  INTERN
}
