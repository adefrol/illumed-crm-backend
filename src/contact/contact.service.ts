import { BadRequestException, Injectable } from '@nestjs/common'
import { Contact } from './entity/contact.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateContactDto } from './dto/create-contact.dto'

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>) { }


    async create(createContactDto: CreateContactDto) {
        const newContact = {
            name: createContactDto.name,
            phone: createContactDto.phone,
            email: createContactDto.email,
            deal: createContactDto.deal
        }

        if (!newContact) throw new BadRequestException(newContact)
        console.log(newContact)

        return await this.contactRepository.save(newContact)

    }
}
