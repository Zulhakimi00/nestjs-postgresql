import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shops {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;
}
