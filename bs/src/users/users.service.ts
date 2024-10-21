import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from 'src/shared/type-orm/entities/user.entity';
import {Repository} from 'typeorm';
import {UserC, UserRoleT} from './users.dto';

@Injectable()
export class UsersService {
  private userList: UserC[] = [
    {
      id: 1,
      name: 'Siddharth Jaiswal',
      email: 'siddharth@example.com',
      password: '123456',
      role: ['ADMIN']
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
      role: ['USER']
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: '123456',
      role: ['USER']
    },
    {
      id: 4,
      name: 'Bob Smith',
      email: 'bob@example.com',
      password: '123456',
      role: ['USER']
    },
    {
      id: 5,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      password: '123456',
      role: ['INTERN']
    },
    {
      id: 6,
      name: 'Michael Brown',
      email: 'michael@example.com',
      password: '123456',
      role: ['INTERN']
    }
  ];
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  getAllUsers(role?: UserRoleT): UserC[] {
    if (!!role) {
      return this.userList.filter((user: UserC) => user.role?.includes(role));
    }
    return this.userList;
  }

  getUserById(id: number): UserC {
    const result = this.userList.find((user: UserC) => user.id === id);
    if (!!result) {
      return result;
    } else {
      throw new HttpException(`User not found with id ${id}`, HttpStatus.BAD_REQUEST);
    }
  }

  getUserByEmail(email: string): UserC {
    const result = this.userList.find((user: UserC) => user.email === email);
    if (!!result) {
      return result;
    } else {
      throw new HttpException(`User not found with email ${email}`, HttpStatus.BAD_REQUEST);
    }
  }

  async createUser(user: UserC): Promise<UserC> {
    const newUser = this.userRepository.create(user);
    console.log(newUser);

    try {
      const result = await this.userRepository.save(newUser);
      console.log(result);

      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async updateUser(id: number, user: UserC): Promise<UserC> {
    const newUser = {...user, id: id};
    try {
      const result = this.userRepository.update({id}, newUser);
      console.log(result);

      return newUser;
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  deleteUser(id: number): number {
    try {
      const result = this.userRepository.delete({id});
      console.log(result);

      return id;
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
