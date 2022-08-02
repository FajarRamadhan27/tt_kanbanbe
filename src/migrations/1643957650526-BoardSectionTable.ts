import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class BoardSectionTable1643957650526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TBL_BOARD_SECTIONS',
        columns: [
          {
            name: 'board_cd',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'board_nm',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'project_cd',
            type: 'varchar',
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
            name: 'start_dt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'end_dt',
            type: 'timestamp',
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
    queryRunner.query(`DROP TABLE TBL_BOARD_SECTIONS`)
  }
}
