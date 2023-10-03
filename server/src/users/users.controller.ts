import { Body, Controller, Get, Param, Post, Put, Delete, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dtos/create-users.dto";
import { UpdateUsersDto } from "./dtos/update-users.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() dto: CreateUsersDto) {
        const existingUser = await this.usersService.findUserByEmail(dto.email);
        const existingUsername = await this.usersService.findOne(dto.username);

        if(existingUser) {
            throw new UnauthorizedException('Email ja existente');
        }
        
        if(existingUsername) {
            throw new UnauthorizedException('Username ja existente');
        }
        
        return this.usersService.create(dto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') username: string) {
        return this.usersService.findOne(username);
    }

    @Put(':username')
    async update(@Param('username') username: string, @Body() dto: UpdateUsersDto) {
        const existingUser =  await this.usersService.findUserByEmail(dto.email);
        const confirmEmail = await this.usersService.findUserByEmail(dto.confirmEmail);
        const existingUsername = await this.usersService.findOne(dto.username);
        const existingPassword = await this.usersService.findOne(dto.password);

        if(existingUser && confirmEmail) {
            throw new UnauthorizedException('Email ja existente');
        } else if (existingUser !== confirmEmail) {
            throw new UnauthorizedException('Emails diferentes');
        }
        
        if(existingUsername) {
            throw new UnauthorizedException('Username ja existente');
        }

        if(existingPassword && dto.password !== dto.confirmPassword) {
            throw new UnauthorizedException('Passwords diferentes');
        }

        
        return this.usersService.update(username, dto);

    }

    @Delete(':username')
    async delete(@Param('username') username: string) {
        return this.usersService.delete(username);
    }
}