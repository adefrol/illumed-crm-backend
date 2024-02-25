import { Deal } from 'src/deal/entities/deal.entity'
import { Funnel } from 'src/purchase-funnel/entities/purchase-funnel.entity'
import { User } from 'src/users/entities/users.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Contact {
    @PrimaryGeneratedColumn({ name: 'contact_id'})
    id?: number;

    @Column()
    name: string;

    @Column() 
    email:string;

    @Column() 
    phone:string;

    @ManyToOne(() => Deal, (deal) => deal.contact, {onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'deal_id'})
    deal: Deal

}