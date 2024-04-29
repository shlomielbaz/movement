import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UserDto } from './dtos/user.dto';
import { HttpService } from '@nestjs/axios';

@Controller('api/users')
export class UsersController {
  constructor(
    private readonly http: HttpService,
    private readonly service: UsersService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<UserDto[]> {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<UserDto> {
    return this.service.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  // @UseGuards(AuthGuard)
  // @Get('/getUsers')
  // getUsers(@Query() query) {
  //   return this.service.getUsers(query.page);
  // }

  // @UseGuards(AuthGuard)
  // @Get('/getUser/:id')
  // getUser(@Param() params: any) {
  //   return this.service.getUser(params.id);
  // }

  // @UseGuards(AuthGuard)
  // @Post('/createUser')
  // createUser(@Body() body: UserDto) {
  //   return this.service.createUser(body);
  // }

  // @UseGuards(AuthGuard)
  // @Put('/updateUser/:id')
  // updateUser(@Param() params: any, @Body() body: any) {
  //   return this.service.updateUser(params.id, body);
  // }

  // @UseGuards(AuthGuard)
  // @Put('/deleteUser/:id')
  // deleteUser(@Param() params: any) {
  //   return this.service.deleteUser(params.id);
  // }
}
