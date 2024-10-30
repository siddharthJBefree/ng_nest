import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from 'src/shared/type-orm/entities/user.entity';
import {Repository} from 'typeorm';
import {UserC, UserRoleT} from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async getAllUsers(role?: UserRoleT): Promise<Array<UserC>> {
    if (!!role) {
      const result = await this.userRepository.find({where: {role}});
      console.log(result);
      return result;
    }
    const result = await this.userRepository.find();
    console.log(result);
    return result;
  }

  async getUserById(id: number): Promise<UserC> {
    const result = await this.userRepository.findOne({where: {id}});
    console.log(result);
    if (!!result) {
      return result;
    } else {
      throw new HttpException(`User not found with id ${id}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getUserByEmail(email: string): Promise<UserC> {
    const result = await this.userRepository.findOne({where: {email}});
    console.log(result);
    if (!!result) {
      return result;
    } else {
      throw new HttpException(`User not found with email ${email}`, HttpStatus.BAD_REQUEST);
    }
  }

  async createUser(user: UserC): Promise<UserC> {
    const newUser = this.userRepository.create(user);

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
      const result = await this.userRepository.update({id}, newUser as UserEntity);
      console.log(result);

      return newUser;
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUser(id: number): Promise<number> {
    try {
      const result = await this.userRepository.delete({id});
      console.log(result);

      return id;
    } catch (error) {
      console.error(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
