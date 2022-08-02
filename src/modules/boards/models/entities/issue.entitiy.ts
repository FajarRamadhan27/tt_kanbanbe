import { Timestamp } from './timestamp.entity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'TBL_BOARD_ISSUES' })
export class Issue extends Timestamp {
  @PrimaryGeneratedColumn()
  issue_cd: string

  @Column()
  parent_cd: string

  @Column({
    length: 300,
  })
  title: string

  @Column({
    length: 500,
  })
  description: string

  @Column({
    length: 30,
    nullable: false,
  })
  issue_type: string

  @Column()
  board_cd: string

  @Column()
  project_cd: string

  @Column({
    length: 30,
  })
  status: string

  @Column({
    length: 10,
  })
  reporter: string

  @Column({
    length: 10,
  })
  assignee: string

  @Column({
    length: 10,
  })
  priority: string

  @Column({
    length: 5,
  })
  est_time: string

  @Column()
  linked_issues: string
}
