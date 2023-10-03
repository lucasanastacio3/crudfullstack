import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { CreateUsersDto } from "./dtos/create-users.dto";
import { UpdateUsersDto } from "./dtos/update-users.dto";


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async create(dto: CreateUsersDto): Promise<User> {
        const users = this.userRepository.create(dto);
        return await this.userRepository.save(users);
    }
    
    async findAll() {
        return await this.userRepository.find();
    }

    async findOne(username: string) {
        return await this.userRepository.findOne({ where: { username } });
    }

    async update(username: string, dto: UpdateUsersDto) {
        const user = await this.userRepository.findOne({ where: { username } });
        

        // check that record exists
        this.userRepository.merge(user, dto);
        await this.userRepository.save(user);
        return user;
    }

    async delete(username: string) {
        const users = await this.userRepository.findOne({ where: { username } });
        // check that record exists

        return await this.userRepository.remove(users);
    }

    async findUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email } });
    }
}