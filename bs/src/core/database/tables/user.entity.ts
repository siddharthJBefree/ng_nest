import {UserRoleT} from 'src/users/users.dto';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import {UserRoleE} from '../../../shared/enums/roles.enum';

@Entity({name: 'user_list'})
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    comment: 'Primary Key ID',
    type: 'bigint'
  })
  id: number;

  @Column({
    nullable: false,
    comment: 'First Name of the User',
    name: 'first_name'
  })
  firstName: string;

  @Column({
    nullable: true,
    comment: 'Middle Name of the User',
    name: 'middle_name'
  })
  middleName: string;

  @Column({
    nullable: true,
    comment: 'Last Name of the User',
    name: 'last_name'
  })
  lastName: string;

  @Column({
    unique: true,
    comment: 'Email Address of the User',
    nullable: false
  })
  email: string;

  @Column({
    nullable: false,
    comment: 'Password of the User',
    select: false
  })
  password: string;

  @Column({
    type: 'enum',
    name: 'role',
    comment: 'Default Role of the User When Login',
    nullable: true,
    enum: UserRoleE
  })
  role: UserRoleT;

  @Column({
    type: 'simple-array',
    name: 'role_list',
    comment: 'List of roles which User can can access',
    nullable: true
  })
  roleList: Array<UserRoleT>;

  @Column({
    type: 'simple-json',
    name: 'flag_list',
    comment: 'Flags for the User',
    nullable: true
  })
  flagList: {[key in string]: any};

  @CreateDateColumn({
    name: 'created_on',
    comment: 'Date when User was created'
  })
  createdOn: Date;

  @UpdateDateColumn({
    name: 'updated_on',
    comment: 'Date when User was updated'
  })
  updatedOn: Date;

  @DeleteDateColumn({
    name: 'deleted_on',
    comment: 'Date when User was deleted'
  })
  deletedOn: Date;

  @VersionColumn({
    name: 'version',
    comment: 'Version will change when User will be updated'
  })
  version: number;
}
