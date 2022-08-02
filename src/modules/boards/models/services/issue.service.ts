import { Injectable, Query } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'
import { Issue } from '../entities/issue.entitiy'

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  async getBoardIssues(): Promise<Issue[]> {
    return await this.issueRepository.query(`SELECT * FROM TBL_BOARD_ISSUES`)
  }

  async getActiveBoardIssues(params: { project_cd }): Promise<Issue[]> {
    const { project_cd } = params

    return await this.issueRepository.query(
      `
      SELECT * 
      FROM TBl_BOARD_ISSUES
      WHERE BOARD_CD IN (
        SELECT BOARD_CD 
        FROM TBL_BOARD_SECTIONS
        WHERE IS_ACTIVE = 'Y'
          AND PROJECT_CD = '` +
        project_cd +
        `'
      )
        AND PARENT_CD IS NULL
        AND PROJECT_CD = '` +
        project_cd +
        `'
    `,
    )
  }

  async getBacklogIssues(params: { project_cd }): Promise<Issue[]> {
    const { project_cd } = params

    return await this.issueRepository.query(
      `
      SELECT *
      FROM TBL_BOARD_ISSUES
      WHERE BOARD_CD IS NULL
        AND PROJECT_CD = '` +
        project_cd +
        `'
    `,
    )
  }

  async getChildsIssue(params: { parent_cd }): Promise<Issue[]> {
    const { parent_cd } = params

    return await this.issueRepository.query(
      `
      SELECT *
      FROM TBL_BOARD_ISSUES
      WHERE PARENT_CD = '` +
        parent_cd +
        `'
    `,
    )
  }

  async getActiveBoardChildsIssue(params: { project_cd }): Promise<Issue[]> {
    const { project_cd } = params

    return await this.issueRepository.query(
      `
      SELECT *
      FROM TBL_BOARD_ISSUES
      WHERE PARENT_CD IS NOT NULL
        AND BOARD_CD = (SELECT DISTINCT BOARD_CD FROM TBL_BOARD_SECTIONS WHERE IS_ACTIVE = 'Y')
        AND PROJECT_CD = '` +
        project_cd +
        `'
    `,
    )
  }

  async moveIssue(params: { issue_cd; destination }): Promise<Issue> {
    const { issue_cd, destination } = params

    let query = 'UPDATE TBL_BOARD_ISSUES SET '

    switch (destination) {
      case 'BACKLOG':
        query += `BOARD_CD      = NULL
                  , UPDATE_DT   = now()`
        break
      case 'ACTIVE_DEVELOPMENT':
        query += `BOARD_CD      = (SELECT DISTINCT BOARD_CD FROM TBL_BOARD_SECTIONS WHERE IS_ACTIVE = 'Y')
                  , UPDATE_DT   = now()`
        break
      default:
        break
    }

    query += ` WHERE ISSUE_CD  = '` + issue_cd + `'`

    console.log(query)
    return await this.issueRepository.query(query)
  }

  async updateStatus(params: { issue_cd; status }): Promise<Issue> {
    const { issue_cd, status } = params
    let sql =
      `UPDATE TBL_BOARD_ISSUES SET STATUS = '` +
      status +
      `', UPDATE_DT = NOW() WHERE ISSUE_CD = '` +
      issue_cd +
      `'`
    console.log(sql)

    return await this.issueRepository.query(sql)
  }
}
