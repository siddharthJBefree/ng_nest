import {Injectable} from '@nestjs/common';
import {UserC, UserRoleT} from './users.interface';

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

  getAllUsers(role?: UserRoleT): UserC[] {
    if (!!role) {
      return this.userList.filter((user: UserC) => user.role?.includes(role));
    }
    return this.userList;
  }

  getUserById(id: number): UserC {
    return this.userList.find((user: UserC) => user.id === id);
  }

  getUserByEmail(email: string): UserC {
    return this.userList.find((user: UserC) => user.email === email);
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
      throw new Error('User not found');
    }

    this.userList[index] = {...this.userList[index], ...user, id};

    return this.userList[index];
  }

  deleteUser(id: number): number {
    const index = this.userList.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.userList.splice(index, 1);
    return id;
  }
}
