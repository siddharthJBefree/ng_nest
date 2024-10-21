import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {UserRoleE} from '../../enums/roles.enum';

@Entity({name: 'user_list'})
export class UserEntity {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({unique: true})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updatedAt: Date;

  @Column({type: 'enum', nullable: true, array: true, enum: UserRoleE})
  role: string[];
}
