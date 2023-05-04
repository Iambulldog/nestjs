import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class ticket_to_category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticket_id: number;

  @Column()
  category_id: number;
}
