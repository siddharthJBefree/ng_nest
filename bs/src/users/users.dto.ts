import {IsEmail, IsEnum, IsNotEmpty, IsNumber, IsObject, IsString, Length, ValidateIf} from 'class-validator';
import {OperationE} from 'src/shared/enums/operation.enum';
import {UserRoleE} from 'src/shared/enums/roles.enum';

export type UserRoleT = keyof typeof UserRoleE;

export class UserC {
  @IsNumber()
  @ValidateIf((_, context) => context?.[OperationE.UPDATE] === true) // Only validate if createMode is true
  @IsNotEmpty()
  id: number;

  @IsString()
  @Length(1, 255)
  @IsNotEmpty({message: 'First Name is required'})
  firstName: string;

  @IsString()
  @Length(0, 255)
  @IsNotEmpty({message: 'Middle Name is required'})
  middleName: string;

  @IsString()
  @Length(0, 255)
  @IsNotEmpty({message: 'Last Name is required'})
  lastName: string;

  @IsEmail()
  @Length(3, 255)
  @IsNotEmpty({message: 'Email is required'})
  email: string;

  @IsString()
  @Length(1, 255)
  @IsNotEmpty({message: 'Password is required'})
  password: string;

  @IsEnum(UserRoleE)
  role: UserRoleT;

  @IsEnum(UserRoleE, {each: true})
  roleList: Array<UserRoleT>;

  @IsObject()
  flagList: {[key in string]: boolean};
}
