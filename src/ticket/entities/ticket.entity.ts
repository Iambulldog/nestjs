import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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
}
