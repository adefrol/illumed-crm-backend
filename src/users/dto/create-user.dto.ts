import { IsEmail, MinLength } from 'class-validator'


export class CreateUserDto {

    @IsEmail({}, {message: "Строка не соответствует формату электронной почты"})
    email : string

    username: string;

    name: string;

    @MinLength(8, { message: "Пароль должен содержать минимум 8 символов"})
    password: string;
    
    


}