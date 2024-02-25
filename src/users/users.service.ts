import { BadRequestException, ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/users.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { JwtService } from '@nestjs/jwt'



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async findOne(username?: string,): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        username,
      },
    })
  }
  async findOneById(id: number,): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    })
  }

  async register(createUserDto: CreateUserDto) {
    console.log('ok');
    const existUser = await this.userRepository.findOne({
      where: [{
        email: createUserDto.email,
      },
      {
        username: createUserDto.username
      }
    ],
    })
    if(existUser) {
      throw new ConflictException("Пользователь с таким e-mail или логином уже существует")
    }
    const user = await this.userRepository.save({
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      username : createUserDto.username,
    })
    return { user, statusCode: 200 } 
  }
  

}
