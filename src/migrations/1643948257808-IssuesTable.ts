import { type } from 'os'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class IssuesTable1643948257808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBL_BOARD_ISSUES',
        columns: [
          {
            name: 'issue_cd',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'parent_cd',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '300',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '1000',
            isNullable: true,
          },
          {
            name: 'issue_type',
            type: 'varchar',
            length: '30',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'reporter',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },
          {
            name: 'board_cd',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'project_cd',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'assignee',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'priority',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'est_tm',
            type: 'varchar',
            length: '5',
            isNullable: true,
          },
          {
            name: 'create_dt',
            type: 'timestamp',
          },
          {
            name: 'update_dt',
            type: 'timestamp',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE TBL_BOARD_ISSUES`)
  }
}
