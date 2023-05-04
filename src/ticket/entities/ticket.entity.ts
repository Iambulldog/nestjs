import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  detail: string;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (user) => user.tickets)
  @JoinColumn({ name: 'user_id' }) // กำหนดชื่อ column ที่เป็น foreign key
  user: User;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable({
    name: 'ticket_to_category',
    joinColumn: { name: 'ticket_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];
}
