import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User]),PassportModule ,JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {
      expiresIn: '60s'
    },
  })],
  providers: [AuthService, UsersService, LocalStrategy, EmailService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}