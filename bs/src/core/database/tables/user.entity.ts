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
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({type: 'enum', nullable: true, enum: UserRoleE})
  role: UserRoleT;

  @Column({
    type: 'simple-array',
    nullable: true
  })
  role_list: Array<UserRoleT>;

  @Column({
    type: 'simple-json',
    nullable: true
  })
  flag_list: {[key in string]: any};

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @VersionColumn()
  version: number;
}
