import { Controller, Get } from '@nestjs/common'
import { BoardSection } from '../models/entities/board_section.entity'
import { BoardService } from '../models/services/board.service'

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('getProjectBoards')
  async getProjectBoards(): Promise<BoardSection[]> {
    try {
      return await this.boardService.gerProjectBoards()
    } catch (err) {
      return err
    }
  }
}
