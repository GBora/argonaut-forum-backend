import { Entity, Column, PrimaryColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class languages {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  code: string;
  @Column()
  name: string;
}
