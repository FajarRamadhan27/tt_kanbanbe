import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BoardSection } from '../entities/board_section.entity'

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardSection)
    private boardRepository: Repository<BoardSection>,
  ) {}

  async gerProjectBoards(): Promise<BoardSection[]> {
    return await this.boardRepository.query('SELECT * FROM TBL_BOARD_SECTIONs')
  }
}
