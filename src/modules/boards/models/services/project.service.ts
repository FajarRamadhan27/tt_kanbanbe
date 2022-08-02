import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Project } from '../entities/project.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async getUserProjects(): Promise<Project[]> {
    return await this.projectRepository.query(
      'SELECT * FROM TBL_BOARD_PROJECTS',
    )
  }
}
