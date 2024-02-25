import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { ContactService } from './contact.service'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { CreateContactDto } from './dto/create-contact.dto'

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post()
    create(@Body() createContactDto: CreateContactDto) {
        return this.contactService.create(createContactDto)
    }
}
