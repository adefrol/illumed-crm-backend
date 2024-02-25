import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Deal } from './entities/deal.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateDealDto } from './dto/create-deal.dto'

@Injectable()
export class DealService {
    constructor(
        @InjectRepository(Deal)
        private readonly dealRepository: Repository<Deal>) { }


    async create(createDealDto: CreateDealDto) {
        const newDeal = {
            id: createDealDto.id,
            name: createDealDto.name,
            deal_cost: createDealDto.deal_cost,
            funnel: createDealDto.funnel,
        }

        if(!newDeal) throw new BadRequestException(newDeal)
        console.log(newDeal);

        return await this.dealRepository.save(newDeal)
        
    }

    async update(createDealDto: CreateDealDto, id: number) {
        return await this.dealRepository.update(id,createDealDto)
    }

    async delete(id: number) {
        return await this.dealRepository.delete(id)

    }
    
    async findAll() {
        return await this.dealRepository.find({
            relations: {
                funnel: true,
            }
        });
    }

    async findOne(id: number) {
        const deal = this.dealRepository.findOne({
            where: {
                id,
            },
            relations: {
                funnel: true,
                contact: true
            }
        })

        if (!deal) {
            return new NotFoundException()
        }

        return deal
    }
}
