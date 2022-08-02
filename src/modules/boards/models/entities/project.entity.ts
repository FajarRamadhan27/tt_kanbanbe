import { yesOrNo } from 'src/helpers/enum.helper'
import { Timestamp } from './timestamp.entity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { TBL_BOARD_PROJECTS } from 'src/helpers/const.helper'

@Entity({ name: TBL_BOARD_PROJECTS })
export class Project extends Timestamp {
  @PrimaryGeneratedColumn()
  project_cd: string

  @Column({
    length: 30,
  })
  project_nm: string

  @Column({
    length: 300,
  })
  description: string

  @Column()
  is_active: yesOrNo

  @Column({
    length: 10,
  })
  create_by: string
}
