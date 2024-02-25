import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { DealService } from './deal.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Deal } from './entities/deal.entity'

@Module({
  controllers: [DealController],
  providers: [DealService],
  imports : [TypeOrmModule.forFeature([Deal])],
  exports: [DealService],

})
export class DealModule {}
