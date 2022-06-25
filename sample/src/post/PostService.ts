import { Injectable } from '@nestjs/common';
import { posts, boards } from '../lib/example';
import { Post } from './Post';

@Injectable()
export class PostService {
    public getPosts(type?: string): Post[] {
        if (type) {
            return posts.filter((p) => p.board.type === type);
        }
        return posts;
    }

    public getPostById(id: number): Post {
        return posts.find((p) => p.id === id);
    }

    public savePost(
        title: string,
        content: string,
        author: string,
        boardType: string,
    ): Post | string {
        const post = new Post(
            posts.length + 1,
            title,
            content,
            author,
            boards.find((b) => b.type === boardType),
        );
        posts.push(post);

        return post;
    }
}
