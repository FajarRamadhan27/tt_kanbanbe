import { BaseEntity, Column } from 'typeorm'

export abstract class Timestamp extends BaseEntity {
  @Column({
    type: 'timestamp',
  })
  create_dt: Date

  @Column({
    type: 'timestamp',
  })
  update_dt: Date
}
