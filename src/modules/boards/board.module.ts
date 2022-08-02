import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BoardController } from './controllers/board.controller'
import { IssueController } from './controllers/issue.controller'
import { ProjectController } from './controllers/project.controller'
import { BoardSection } from './models/entities/board_section.entity'
import { Issue } from './models/entities/issue.entitiy'
import { Project } from './models/entities/project.entity'
import { BoardService } from './models/services/board.service'
import { IssueService } from './models/services/issue.service'
import { ProjectService } from './models/services/project.service'

@Module({
  imports: [TypeOrmModule.forFeature([Project, BoardSection, Issue])],
  providers: [ProjectService, BoardService, IssueService],
  controllers: [ProjectController, BoardController, IssueController],
})
export class BoardModule {}
