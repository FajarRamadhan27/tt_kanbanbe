import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BoardModule } from './modules/boards/board.module'
import { BoardSection } from './modules/boards/models/entities/board_section.entity'
import { Issue } from './modules/boards/models/entities/issue.entitiy'
import { Project } from './modules/boards/models/entities/project.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tt_kanban',
      entities: [Project, BoardSection, Issue],
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    }),
    BoardModule,
  ],
})
export class AppModule {}
