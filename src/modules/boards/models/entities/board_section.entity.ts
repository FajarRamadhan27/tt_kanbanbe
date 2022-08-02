import { Timestamp } from './timestamp.entity'
import { yesOrNo } from 'src/helpers/enum.helper'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'TBL_BOARD_SECTIONS' })
export class BoardSection extends Timestamp {
  @PrimaryGeneratedColumn()
  board_cd: string

  @Column({
    length: 30,
  })
  board_nm: string

  @Column()
  project_cd: string

  @Column()
  is_active: yesOrNo

  @Column({
    length: 10,
  })
  create_by: string

  @Column({
    type: 'timestamp',
  })
  start_dt: Date

  @Column({
    type: 'timestamp',
  })
  end_dt: Date
}
