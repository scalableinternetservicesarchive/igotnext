import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Court } from './Court'

@Entity()
export class Park extends BaseEntity {
  @PrimaryGeneratedColumn()
  parkID: number

  @Column() // to identify (for frontend)
  parkName: string

  @Column()
  longitude: number

  @Column()
  latitude: number

  @OneToMany(() => Court, court => court.park, { nullable: false, eager: true })
  @JoinColumn()
  courts: Court[]
}
