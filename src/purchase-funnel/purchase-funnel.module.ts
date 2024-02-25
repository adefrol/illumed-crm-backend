import { Module } from '@nestjs/common';
import { PurchaseFunnelService } from './purchase-funnel.service';
import { PurchaseFunnelController } from './purchase-funnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Funnel } from './entities/purchase-funnel.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Funnel])],
  providers: [PurchaseFunnelService],
  controllers: [PurchaseFunnelController],
  exports: [PurchaseFunnelService]
})


export class PurchaseFunnelModule {}
