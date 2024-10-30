import {IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsObject, IsString, Length} from 'class-validator';
import {UserRoleE} from 'src/shared/enums/roles.enum';

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

  @IsEnum(UserRoleE)
  role: UserRoleT;

  @IsEnum(UserRoleE, {each: true})
  role_list: Array<UserRoleT>;

  @IsObject()
  flag_list: {[key in string]: boolean};
}

class FlagList {
  @IsBoolean()
  is_active: boolean;

  @IsBoolean()
  is_active2: boolean;
}
