import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/users.entity'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/auth/constants'
/* import { usersProviders } from './users.providers' */

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  }),],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule { }  
