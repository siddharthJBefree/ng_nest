import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {UserEntity} from '../database/tables/user.entity';

export const MySqlConnectionConst: TypeOrmModuleOptions = Object.freeze({
  type: 'mysql',
  host: process?.env?.DB_HOST || 'localhost',
  port: +process?.env?.DB_PORT || 3306,
  username: process?.env?.DB_USER_NAME || 'root',
  password: process?.env?.DB_PASSWORD || '',
  database: 'bs_local',
  entities: [UserEntity],
  synchronize: true
});
