import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/users.entity';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AuthService {
    constructor(@Inject(UsersService) private readonly usersService: UsersService, private readonly jwtService: JwtService, @InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async login(user: any) {
      const payload = { sub: user.id, email: user.email }

      return {
        token:  this.jwtService.sign(payload),
      }
    }

      async validateUser(email: string, password: string) {
        let user: any;
        try {
          user = await this.usersService.findUserByEmail(email);
          const save = await this.userRepository.save(user);

          if(save) {
            return save
          }
          
        } catch (error) {
          console.log(error);
        }

        const isPasswordValid = compareSync(password, user.password);
        if(!isPasswordValid) return null;
        
        return user;
      }

}
