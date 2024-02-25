import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Query, Req, UseGuards } from '@nestjs/common'
import { PurchaseFunnelService } from './purchase-funnel.service'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { Funnel } from './entities/purchase-funnel.entity'
import { CreateFunnelDto } from './dto/create-funnel.dto'


@Controller('purchase-funnel')
export class PurchaseFunnelController {
    constructor(private funnelService: PurchaseFunnelService) { }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('query')
    findByKeyWord(@Query("keyword") keyword:string) {
        return this.funnelService.findByKeyword(keyword)
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll(): Promise<Funnel[]> {
        return this.funnelService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Funnel | NotFoundException> {
        return this.funnelService.findOne(id)
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post()
    create(@Body() createFunnelDto: CreateFunnelDto, @Req() req): Promise<Funnel> {
        return this.funnelService.create(createFunnelDto)
    }



}
