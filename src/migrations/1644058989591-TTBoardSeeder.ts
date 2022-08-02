import { MigrationInterface, QueryRunner } from 'typeorm'

export class TTBoardSeeder1644058989591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO TBL_BOARD_PROJECTS
                (project_cd, project_nm, description, is_active, create_by, create_dt, update_dt)
            VALUES
                (
                    'TT_BOARD',
                    'TT BOARD',
                    'IT Team Project Management',
                    'Y',
                    'TT21060003',
                    now(),
                    now()
                ),
                (
                    'TTSCM',
                    'TT SCM',
                    'TT Supply Chain Management System',
                    'Y',
                    'TT21060003',
                    now(),
                    now()
                ),
                (
                    'TTPMDM',
                    'TT PMDM',
                    'TT Production Master Data Management',
                    'Y',
                    'TT21060003',
                    now(),
                    now()
                ),
                (
                    'IP_SLAB',
                    'IP_SLAB',
                    'TT Supply Chain Management System',
                    'Y',
                    'TT21060003',
                    now(),
                    now()
                )
        `)

    await queryRunner.query(`
            INSERT INTO TBL_BOARD_SECTIONS
                (board_cd, board_nm, project_cd, is_active, create_by, create_dt, update_dt)
            VALUES
                (
                    'TT_BOARD_1',
                    'BOARD 1',
                    'TT_BOARD',
                    'Y',
                    'TT21060003',
                    now(),
                    now()
                )
        `)

    await queryRunner.query(`
            INSERT INTO TBL_BOARD_ISSUES
                (issue_cd, parent_cd, project_cd, title, description, issue_type, status, reporter, board_cd, assignee, priority, est_tm, create_dt, update_dt)
            VALUES
                (
                    'TT_BOARD_C1',
                    NULL,
                    'TT_BOARD',
                    'Sebagai seorang manager saya ingin sebuah UI kanban agar saya dapat mendistribusikan pekerjaan, mengetahui apa yang sedang di kerjakan dan progress pengerjaanya',
                    NULL,
                    'STORY',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C2',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Setup source code menggunakan reactjs dan tailwind css',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C3',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat Base component Sidebar',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '1h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C4',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat Base Component Navbar',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '1h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C5',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat Form & Fungsi Login',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '1h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C6',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat Menu Backlog',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C7',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat Menu Active Board',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C8',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat form detail subtask',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C9',
                    'TT_BOARD_C1',
                    'TT_BOARD',
                    'Membuat modal Create New Task',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h', 
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C10',
                    NULL,
                    'TT_BOARD',
                    'Untuk menghubungkan database dengan UI Saya membutuhkan system API dan dokumentasinya agar mempermudah proses integrasi UI dengan API',
                    NULL,
                    'STORY',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C11',
                    'TT_BOARD_C10',
                    'TT_BOARD',
                    'Setup project menggunakan Nestjs & Swagger untuk dokumentasi API',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C12',
                    'TT_BOARD_c10',
                    'TT_BOARD',
                    'Membuat table BOARD, PROJECTS & ISSUES',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '1h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C13',
                    'TT_BOARD_c10',
                    'TT_BOARD',
                    'Membuat API Get Issues, Get Projects, Get Boards, Move Issue & Update Issue Status',
                    NULL,
                    'SUBTASK',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    '5h',
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C14',
                    null,
                    'TT_BOARD',
                    'Agar UI dapat berfungsi seutuhnya saya ingin mengintegrasikan UI dengan API yang sudah tersedia',
                    NULL,
                    'STORY',
                    'TODO',
                    'TT21060003',
                    'TT_BOARD_1',
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C15',
                    null,
                    'TT_BOARD',
                    'Membuat Component Text Editor',
                    NULL,
                    'TASK',
                    'TODO',
                    'TT21060003',
                    null,
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C16',
                    null,
                    'TT_BOARD',
                    'Sebagai User saya ingin sebuah menu yang dapat digunakan untuk melakukan request issue',
                    NULL,
                    'STORY',
                    'TODO',
                    'TT21060003',
                    null,
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                ),
                (
                    'TT_BOARD_C17',
                    null,
                    'TT_BOARD',
                    'Sebagai manager saya ingin sebuah menu yang dapat digunakan untuk Management Project',
                    NULL,
                    'TASK',
                    'TODO',
                    'TT21060003',
                    null,
                    'TT21060003',
                    'MEDIUM',
                    NULL,
                    now(),
                    now()
                )
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
