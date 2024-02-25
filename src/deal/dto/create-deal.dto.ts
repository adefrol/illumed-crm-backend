import { Contact } from 'src/contact/entity/contact.entity'
import { Funnel } from 'src/purchase-funnel/entities/purchase-funnel.entity'

export class CreateDealDto {
    id?: number;
    name: string;
    deal_cost: number;
    funnel: Funnel;

}   