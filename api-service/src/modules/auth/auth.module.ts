import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/modules/users/users.module';
import { UsersService } from 'src/modules/users/users.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../config/constants';
import { HttpModule } from '@nestjs/axios';
// import { AuthGuard } from './auth.guard';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret, //process.env.JWT_SECRET,
      signOptions: { expiresIn: '2h' },
    }),
    HttpModule,
  ],
  controllers: [AuthController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    AuthService,
    UsersService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
