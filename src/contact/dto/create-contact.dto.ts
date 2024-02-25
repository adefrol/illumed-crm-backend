import { Deal } from 'src/deal/entities/deal.entity'

export class CreateContactDto {
    name: string;
    email: string;
    phone: string;
    deal: Deal
}