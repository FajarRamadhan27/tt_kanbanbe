import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ProjectsTable1643956630965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBL_BOARD_PROJECTS',
        columns: [
          {
            name: 'project_cd',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'project_nm',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '300',
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'varchar',
          },
          {
            name: 'create_by',
            type: 'varchar',
            length: '10',
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
    queryRunner.query(`DROP TABLE TBL_BOARD_PROJECTS`)
  }
}
