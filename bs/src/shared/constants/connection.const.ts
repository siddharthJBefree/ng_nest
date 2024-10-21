import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {UserEntity} from '../typeorm/entities/User.entity';

export const MySqlConnectionConst: TypeOrmModuleOptions = Object.freeze({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'bs_local',
  entities: [UserEntity],
  synchronize: true
});
