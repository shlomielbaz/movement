import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.filterBy({ email: email });
    const isValid = await user.comparePassword(password);
    if (isValid === false) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async register(payload: CreateUserDto): Promise<User> {
    return await this.usersService.create(payload);
  }
}
