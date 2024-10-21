import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {MySqlConnectionConst} from './shared/constants/connection.const';
import {LoggerMiddleware} from './shared/middleware/logger/logger.middleware';
import {UsersModule} from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(MySqlConnectionConst)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
