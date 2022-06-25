import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { PostModule } from './post/PostModule';
import { BoardModule } from './board/BoardModule';

// App Module에 PostModule, BoardModule의 의존성을 더한다.
@Module({
    imports: [PostModule, BoardModule],
    controllers: [AppController],
})
export class AppModule {}
