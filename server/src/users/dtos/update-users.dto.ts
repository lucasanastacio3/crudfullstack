import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';

export class UpdateUsersDto {
    @IsNotEmpty()
    username: string;

    @IsEmail({}, { message: 'Email inválido ' })
    email: string;

    @IsEmail({}, { message: 'Confirmação de Email inválido ' })
    confirmEmail: string;
    
    @IsNotEmpty()
    @Matches(RegExHelper.password, { message: 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais    ' })
    password: string;

    @IsNotEmpty()
    confirmPassword: string;
}

