import {Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors} from '@nestjs/common';
import {NoFilesInterceptor} from '@nestjs/platform-express';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UserC, UserRoleT} from './users.dto';
import {UsersService} from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('role/:role')
  @ApiOperation({summary: 'Get all users Role vise'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getAllUsersByRole(@Param('role') role: UserRoleT) {
    return this.usersService.getAllUsers(role);
  }

  @Get('id/:id')
  @ApiOperation({summary: 'Get user by ID'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(+id);
  }

  @Get('email/:email')
  @ApiOperation({summary: 'Get user by Email'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  @ApiOperation({summary: 'Create User'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 201, description: 'List Of users are as follow'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'},
        role: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['ADMIN', 'USER', 'INTERN']
          }
        }
      }
    }
  })
  @ApiOperation({summary: 'Create User'})
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() user: UserC) {
    console.log(user);
    return this.usersService.createUser(user);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update User'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 201, description: 'List Of users are as follow'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'},
        role: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['ADMIN', 'USER', 'INTERN']
          }
        }
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  updateUser(@Param('id') id: number, @Body() user: UserC) {
    return this.usersService.updateUser(+id, user);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete User'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(+id);
  }
}
