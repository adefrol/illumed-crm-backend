import { Contact } from 'src/contact/entity/contact.entity'
import { Funnel } from 'src/purchase-funnel/entities/purchase-funnel.entity'
import { User } from 'src/users/entities/users.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Deal {
    @PrimaryGeneratedColumn({ name: 'deal_id'})
    id?: number;

    @Column()
    name: string;

    @Column() 
    deal_cost:number;

    @ManyToOne(() => Funnel, (funnel) => funnel.deals, {onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'funnel_id'})
    funnel: Funnel

    @OneToMany(() => Contact, (contact) => contact.deal, {onUpdate: "NO ACTION"})
    @JoinColumn({name: 'contact_id'})
    contact: Contact[]
/*     @OneToOne(() => User, (user) => user.deal, {onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'user_id'})
    user: User; */

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn() 
    updated_at: Date;
}