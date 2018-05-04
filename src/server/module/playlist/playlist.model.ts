import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import User from '@server/module/user/user.model';
import Track from '@server/module/tracks/track.model';

export interface PlaylistInterface {
  id: number;
  name: string;
  position: number;
  user: User;
}

@Entity()
export default class Playlist extends BaseEntity implements PlaylistInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('tinyint')
  position: number;

  @ManyToOne(type => User, user => user.playlists)
  user: User;

  @ManyToMany(type => Track, track => track.playlists)
  @JoinTable({ name: 'playlist_track' })
  tracks: Track[];
}
