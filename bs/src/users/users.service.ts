import {Injectable} from '@nestjs/common';
import {User, UserRole} from './users.interface';

@Injectable()
export class UsersService {
  private userList: User[] = [
    {
      id: 1,
      name: 'Siddharth Jaiswal',
      email: 'siddharth@example.com',
      password: '123456',
      role: 'ADMIN'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
      role: 'USER'
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: '123456',
      role: 'USER'
    },
    {
      id: 4,
      name: 'Bob Smith',
      email: 'bob@example.com',
      password: '123456',
      role: 'USER'
    },
    {
      id: 5,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      password: '123456',
      role: 'INTERN'
    },
    {
      id: 6,
      name: 'Michael Brown',
      email: 'michael@example.com',
      password: '123456',
      role: 'INTERN'
    }
  ];

  getAllUsers(role?: UserRole): User[] {
    if (!!role) {
      return this.userList.filter((user: User) => (typeof user.role === 'string' ? user.role === role : user.role?.includes(role)));
    }
    return this.userList;
  }

  getUserById(id: number): User {
    return this.userList.find((user: User) => user.id === id);
  }

  getUserByEmail(email: string): User {
    return this.userList.find((user: User) => user.email === email);
  }

  createUser(user: User): User {
    const highestId = Math.max(...this.userList.map((user) => user.id));
    const newUser = {...user, id: highestId + 1};
    this.userList.push(newUser);
    console.log(newUser);

    return newUser;
  }

  updateUser(id: number, user: User): User {
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
