import {IsArray, IsNumber, IsString} from 'class-validator';

export class UserC {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
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
