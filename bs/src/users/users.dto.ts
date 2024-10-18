import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

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

  // @IsArray({
  //   each: true,
  //   message: 'Role should be an array'
  // })
  // @ArrayUnique()
  // @IsString({each: true})
  role: UserRoleT[];
}

export type UserRoleT = keyof typeof UserRoleE;

export enum UserRoleE {
  ADMIN,
  USER,
  INTERN
}
