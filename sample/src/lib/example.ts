import { Board } from '../board/Board';
import { Post } from '../post/Post';

export const boards = [
    new Board(1, 'FREE'),
    new Board(2, 'NOTICE'),
    new Board(3, 'QNA'),
];

export const posts = [
    new Post(
        1,
        '첫 글!',
        '안녕하세요! 자유 게시판 첫 글이네요..',
        '김철수',
        boards[0],
    ),
    new Post(2, '여러분들 질문 있어요', '뻥이지롱~', '박철수', boards[0]),
    new Post(
        3,
        '추천',
        '오늘 저녁은 뭘 먹는게 좋을까요? 치킨? 피자?',
        '최철수',
        boards[0],
    ),
    new Post(
        4,
        '부적절한 게시글 관리',
        '부적절한 게시글은 통보 없이 삭제될 수 있습니다.',
        '관리자',
        boards[1],
    ),
    new Post(
        5,
        '부적절한 게시글 관리(추가)',
        '부적절한 게시글을 확인했을 경우, h3r0.y0u@gmail.com으로 연락 부탁드립니다.',
        '관리자',
        boards[1],
    ),
    new Post(
        6,
        '게시판 추가 안내',
        'QNA 게시판이 신설되었습니다. 많은 이용 부탁드립니다.',
        '관리자',
        boards[1],
    ),
    new Post(
        7,
        '사용법',
        'POST /posts 를 통해 글을 생성할 수 있습니다!',
        '관리자',
        boards[2],
    ),
    new Post(
        8,
        '메일 문의',
        '문의는 h3r0.y0u@gmail.com 으로 부탁드립니다. 감사합니다.',
        '관리자',
        boards[2],
    ),
    new Post(
        9,
        '후원 문의',
        '문의는 h3r0.y0u@gmail.com 으로 부탁드립니다. 감사합니다.',
        '관리자',
        boards[2],
    ),
];
