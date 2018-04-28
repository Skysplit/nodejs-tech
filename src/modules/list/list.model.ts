import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany  } from 'typeorm';
import { Task } from '@app/modules/list/task';

@Entity()
export default class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Task, task => task.list)
  tasks: Task[];
}
