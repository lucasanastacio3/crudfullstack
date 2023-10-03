import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(
    @Inject(AuthService) private authService: AuthService,
   ) {
    super({
      usernameField: 'email',
    });
   }

   async validate(email: string, password: string) {
    const user: any = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    return user;
   }
}