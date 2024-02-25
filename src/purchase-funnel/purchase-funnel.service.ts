import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Funnel } from './entities/purchase-funnel.entity'
import { Repository } from 'typeorm'
import { AuthGuard } from '@nestjs/passport'
import { CreateFunnelDto } from './dto/create-funnel.dto'

@Injectable()
export class PurchaseFunnelService {
    constructor(
        @InjectRepository(Funnel)
        private readonly funnelRepository: Repository<Funnel>
    ) { }
    async create(createFunnelDto: CreateFunnelDto): Promise<Funnel> {
        const newFunnel: Funnel = {
            name: createFunnelDto.name,
            color: createFunnelDto.color,
            pos: createFunnelDto.pos,
        }

        if (!newFunnel) throw new BadRequestException('Something went wrong')
        console.log(newFunnel)

        return await this.funnelRepository.save(newFunnel)
    }

    async findByKeyword(keyword: string) {
        const funnel = this.funnelRepository.find({
            where: {
                deals: {
                    name: keyword
                }
            },
            relations: {
                deals: {
                    contact: true,
                },
                
            }
        })

        if ((await funnel).length == 0) {
            return this.findAll()
        }
        return funnel
    }


    async findAll(): Promise<Funnel[]> {
        return this.funnelRepository.find({
            relations: {
                deals: {
                    contact: true
                },
            }
        })
    }
    async findOne(id: number): Promise<Funnel | NotFoundException> {
        const funnel = this.funnelRepository.findOne({
            where: {
                id,
            },
            relations: {
                deals: true,
            }
        })

        if (!funnel) {
            return new NotFoundException("funnel not found")
        }

        return funnel
    }

}
