import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UserRole} from './users.interface';
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
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Get('email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  createUser(@Body() user: any) {
    return this.createUser(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return this.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.deleteUser(id);
  }
}
