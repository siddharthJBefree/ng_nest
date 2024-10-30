import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors} from '@nestjs/common';
import {NoFilesInterceptor} from '@nestjs/platform-express';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UserRoleE} from 'src/shared/enums/roles.enum';
import {AuthGuard} from 'src/shared/guards/auth.guard';
import {ParseEmailPipe} from 'src/shared/pipes/parse-email.pipe';
import {ParseEnumPipe} from '../shared/pipes/parse-enum.pipe';
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
  getAllUsersByRole(@Param('role', new ParseEnumPipe(UserRoleE)) role: UserRoleT) {
    return this.usersService.getAllUsers(role);
  }

  @Get('id/:id')
  @ApiOperation({summary: 'Get user by ID'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.getUserById(+id);
    } catch (error) {
      return error;
    }
  }

  @Get('email/:email')
  @ApiOperation({summary: 'Get user by Email'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  getUserByEmail(@Param('email', ParseEmailPipe) email: string) {
    try {
      return this.usersService.getUserByEmail(email);
    } catch (error) {
      return error;
    }
  }

  @Post()
  @UseGuards(AuthGuard)
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
        firstName: {type: 'string', example: 'Siddharth'},
        middleName: {type: 'string', example: 'H'},
        lastName: {type: 'string', example: 'Jaiswal'},
        email: {type: 'string', example: 'siddharth@example.com'},
        password: {type: 'string', example: 'test@123'},
        role: {
          type: 'string',
          enum: Object.values(UserRoleE),
          example: 'USER'
        },
        roleList: {
          type: 'array',
          enum: Object.values(UserRoleE),
          example: ['USER', 'ADMIN']
        },
        flagList: {
          type: 'object',
          example: {is_active: true, data: 'test'}
        }
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() user: UserC) {
    try {
      return this.usersService.createUser(user);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
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
        id: {type: 'number', example: 1},
        firstName: {type: 'string', example: 'Siddharth'},
        middleName: {type: 'string', example: 'H'},
        lastName: {type: 'string', example: 'Jaiswal'},
        email: {type: 'string', example: 'siddharth@example.com'},
        password: {type: 'string', example: 'test@123'},
        role: {
          type: 'string',
          enum: Object.values(UserRoleE),
          example: 'USER'
        },
        roleList: {
          type: 'array',
          enum: Object.values(UserRoleE),
          example: ['USER', 'ADMIN']
        },
        flagList: {
          type: 'object',
          example: {is_active: true, data: 'test'}
        }
      }
    }
  })
  @UseInterceptors(NoFilesInterceptor())
  @UseGuards(AuthGuard)
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UserC) {
    try {
      return this.usersService.updateUser(+id, user);
    } catch (error) {
      return error;
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({summary: 'Delete User'})
  @ApiResponse({status: 200, description: 'Get all users'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.deleteUser(+id);
    } catch (error) {
      return error;
    }
  }
}
