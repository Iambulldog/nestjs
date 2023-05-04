import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Ticket, (ticket) => ticket.categories)
  tickets: Ticket[];
}
