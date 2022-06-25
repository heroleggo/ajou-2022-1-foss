import { Board } from '../board/Board';

export class Post {
    id!: number;

    title!: string;

    content!: string;

    author!: string;

    board!: Board;

    constructor(id, title, content, author, board) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.board = board;
    }
}
