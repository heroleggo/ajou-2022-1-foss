import { Injectable } from '@nestjs/common';
import { Board } from './Board';
import { boards } from '../lib/example';

@Injectable()
export class BoardService {
    public getBoards(): Board[] {
        return boards;
    }

    public saveBoard(type: string): Board {
        const board = new Board(boards.length + 1, type);
        boards.push(board);

        return board;
    }
}
