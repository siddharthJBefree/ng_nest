import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {ConnectionT} from '../shared/constants/connection.const';
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
  constructor(@Inject('CONNECTION') private connection: ConnectionT) {}

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

  createUser(user: UserC): UserC {
    const highestId = Math.max(...this.userList.map((user) => user.id));
    const newUser = {...user, id: highestId + 1};
    this.userList.push(newUser);
    console.log(newUser);

    return newUser;
  }

  updateUser(id: number, user: UserC): UserC {
    const index = this.userList.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new HttpException(`User not found with id ${id}`, HttpStatus.BAD_REQUEST);
    }

    this.userList[index] = {...this.userList[index], ...user, id};

    return this.userList[index];
  }

  deleteUser(id: number): number {
    const index = this.userList.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new HttpException(`User not found with id ${id}`, HttpStatus.BAD_REQUEST);
    }
    this.userList.splice(index, 1);
    return id;
  }
}
