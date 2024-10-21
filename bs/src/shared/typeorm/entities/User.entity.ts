import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {UserRoleE} from '../../enums/roles.enum';

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({type: 'enum', nullable: true, array: true, enum: UserRoleE})
  role: string[];
}
