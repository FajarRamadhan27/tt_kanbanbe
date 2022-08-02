import { Controller, Get } from '@nestjs/common'
import { Project } from 'src/modules/boards/models/entities/project.entity'
import { ProjectService } from 'src/modules/boards/models/services/project.service'

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('getUserProjects')
  async getUserProjects(): Promise<Project[]> {
    try {
      return this.projectService.getUserProjects()
    } catch (err) {
      return err
    }
  }
}
