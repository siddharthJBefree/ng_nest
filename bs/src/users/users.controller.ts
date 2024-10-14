import {Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors} from '@nestjs/common';
import {NoFilesInterceptor} from '@nestjs/platform-express';
import {User, UserRole} from './users.interface';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('role/:role')
  getAllUsersByRole(@Param('role') role: UserRole) {
    return this.usersService.getAllUsers(role);
  }

  @Get('id/:id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(+id);
  }

  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() user: User) {
    console.log(user);
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  @UseInterceptors(NoFilesInterceptor())
  updateUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.updateUser(+id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(+id);
  }
}
