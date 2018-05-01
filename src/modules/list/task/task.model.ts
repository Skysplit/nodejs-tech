import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { List } from '@app/modules/list';

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('tinyint')
  done: boolean;

  @ManyToOne(type => List, list => list.tasks)
  list: List;
}
