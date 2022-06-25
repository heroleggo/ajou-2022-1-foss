import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { Post as PostModel } from './Post';
import { PostService } from './PostService';

interface SavePostRequest {
    title: string;
    content: string;
    author: string;
    boardType: string;
}

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    public getPosts(@Query('type') type: string): PostModel[] {
        return this.postService.getPosts(type);
    }

    @Get('/:id')
    public getPostById(@Param('id') postId: number): PostModel {
        return this.postService.getPostById(postId);
    }

    @Post('/')
    public savePost(@Body() post: SavePostRequest): PostModel | string {
        if (!post.title || !post.content || !post.author || !post.boardType) {
            return 'ERROR: title, content, author, boardType is required';
        }
        return this.postService.savePost(
            post.title,
            post.content,
            post.author,
            post.boardType,
        );
    }
}
