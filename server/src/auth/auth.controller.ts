import { Body, Controller, Post , Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { EmailService } from 'src/email/email.service';


@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService, private emailService: EmailService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }

  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string) {
    const user = await this.usersService.findUserByEmail(email);

    if (user) {
      await this.emailService.sendEmail(email);
      return { message: 'Email de redefinição enviado' };
    } else {
      return { message: 'Email não encontrado' };
    }
  }
}