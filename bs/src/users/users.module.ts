import {Module} from '@nestjs/common';
import {DevConnectionConst} from '../shared/constants/connection.const';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'CONNECTION',
      useValue: DevConnectionConst
    }
  ]
})
export class UsersModule {}
