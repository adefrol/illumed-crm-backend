import { Deal } from 'src/deal/entities/deal.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Funnel {
    @PrimaryGeneratedColumn({ name: 'funnel_id'})
    id?: number;

    @Column()
    name: string;

    @Column() 
    color:string;

    @Column()
    pos: number;

    @OneToMany(() => Deal, (deal) => deal.funnel)
    deals?: Deal[]
}