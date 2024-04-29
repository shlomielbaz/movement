import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly service: AuthService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, string>,
    @Res() res: Response,
  ) {
    try {
      const user = await this.service.signIn(
        signInDto.username,
        signInDto.password,
      );

      delete user.password;

      const token = await this.jwtService.sign(
        {},
        {
          jwtid: uuidv4(),
          subject: JSON.stringify(user),
        },
      );

      res.cookie('jwt', token, { httpOnly: true });
      res.setHeader('Authenticate', `Bearer ${token}`);

      res.status(201).json({ token: token });
    } catch (err: unknown) {
      throw new InternalServerErrorException(err);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.service.register(createUserDto);

      delete user.password;

      const token = await this.jwtService.sign(
        {},
        {
          jwtid: uuidv4(),
          subject: JSON.stringify(user),
        },
      );

      res.cookie('jwt', token, { httpOnly: true });
      res.setHeader('Authenticate', `Bearer ${token}`);

      res.status(201).json({ token: token });
    } catch (err: unknown) {
      throw new InternalServerErrorException(err);
    }
  }
}
