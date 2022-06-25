import { Module } from '@nestjs/common';
import { BoardController } from './BoardController';
import { BoardService } from './BoardService';

@Module({
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
