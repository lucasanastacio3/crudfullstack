import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';

export class CreateUsersDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais' })
    password: string;
}

