import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      schema: CommentSchema,
      name: Comment.name
    }]),
  ],
})
export class CommentsModule {}
