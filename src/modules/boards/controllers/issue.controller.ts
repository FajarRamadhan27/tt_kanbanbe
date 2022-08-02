import { Controller, Get, Param, Post } from '@nestjs/common'
import { get } from 'http'
import { Issue } from '../models/entities/issue.entitiy'
import { IssueService } from '../models/services/issue.service'

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Get('getBoardIssues')
  async getBoardIssues(): Promise<Issue[]> {
    try {
      return await this.issueService.getBoardIssues()
    } catch (err) {
      return err
    }
  }

  @Get('getActiveBoardIssues/:project_cd')
  async getActiveBoradIssues(
    @Param('project_cd') project_cd: string,
  ): Promise<Issue[]> {
    try {
      return await this.issueService.getActiveBoardIssues({ project_cd })
    } catch (err) {
      return err
    }
  }

  @Get('getBacklogIssues/:project_cd')
  async getBacklogIssues(
    @Param('project_cd') project_cd: string,
  ): Promise<Issue[]> {
    try {
      return this.issueService.getBacklogIssues({ project_cd })
    } catch (err) {
      return err
    }
  }

  @Get('getChildsIssue/:parent_cd')
  async getChildsIssue(
    @Param('parent_cd') parent_cd: string,
  ): Promise<Issue[]> {
    try {
      return this.issueService.getChildsIssue({ parent_cd })
    } catch (err) {
      return err
    }
  }

  @Get('getParentAndChilds/:project_cd')
  async getParentAndChilds(
    @Param('project_cd') project_cd: string,
  ): Promise<any> {
    try {
      const parents = await this.issueService.getActiveBoardIssues({
        project_cd,
      })
      const childs = await this.issueService.getActiveBoardChildsIssue({
        project_cd,
      })

      return parents.map((parent) => {
        return {
          ...parent,
          childs: childs.filter((child) => parent.issue_cd === child.parent_cd),
        }
      })
    } catch (err) {
      return err
    }
  }

  @Post('move/:issue_cd/to/:destination')
  async moveIssue(
    @Param('issue_cd') issue_cd: string,
    @Param('destination') destination: string,
  ): Promise<Issue> {
    try {
      return this.issueService.moveIssue({ issue_cd, destination })
    } catch (err) {
      return err
    }
  }

  @Post('update/status/:issue_cd/as/:status')
  async updateStatus(
    @Param('issue_cd') issue_cd: string,
    @Param('status') status: string,
  ): Promise<Issue> {
    try {
      return this.issueService.updateStatus({ issue_cd, status })
    } catch (err) {
      return err
    }
  }
}
