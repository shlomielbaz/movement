import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';

import { constants } from '../../data/constants';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly http: HttpService,
  ) {}

  createUser(body: UserDto) {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: any) {
    throw new Error('Method not implemented.');
  }
  updateUser(id: any, body: any) {
    throw new Error('Method not implemented.');
  }

  async getUser(id: number) {
    const URL = `${constants.external_url}/api/users/${id}`;

    const { data } = await firstValueFrom(
      this.http.get(URL).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      ),
    );

    return data;
  }

  async getUsers(page: number) {
    const URL = `${constants.external_url}/api/users?page=${page}`;
    const { data } = await firstValueFrom(
      this.http.get(URL).pipe(
        catchError((error) => {
          throw `An error happened. Msg: ${JSON.stringify(
            error?.response?.data,
          )}`;
        }),
      ),
    );

    return data;
  }

  async findAll(): Promise<UserDto[]> {
    return (await this.userRepository.find()).map((e) => ({
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      avatar: e.avatar,
    }));
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async filterBy(filter: any): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { ...filter } });
    if (!user) {
      throw new NotFoundException(`User with ${filter} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`A user "${id}" was not found`);
    }
    return { message: 'User successfully deleted' };
  }
}
