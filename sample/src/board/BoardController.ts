import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './Board';
import { BoardService } from './BoardService';

interface SaveBoardRequest {
    type: string;
    author: string;
}

@Controller('boards')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get('/')
    public getBoards(): Board[] {
        return this.boardService.getBoards();
    }

    @Post('/')
    public saveBoard(@Body() body: SaveBoardRequest): Board | string {
        if (body.author !== '관리자') {
            return '관리자만 접근 가능합니다.';
        }
        return this.boardService.saveBoard(body.type);
    }
}
