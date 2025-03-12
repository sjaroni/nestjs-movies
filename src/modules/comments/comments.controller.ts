import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment, CommentDocument } from './comment';
import { DeleteResult } from 'mongoose';

@Controller('comments')
export class CommentsController {

  constructor(private commentsService: CommentsService) {
  }

  @Post()
  createComment(@Body() comment: Comment): Promise<CommentDocument> {
    return this.commentsService.create(comment);
  }

  @Get()
  readComments(): Promise<CommentDocument[]> {
    return this.commentsService.readComments();
  }

  @Get(':id')
  readComment(@Param('id') id: string): Promise<CommentDocument | null> {
    return this.commentsService.readComment(id)
  }

  @Put(':id')
  updateComment(@Param('id') id: string, @Body() newComment: Comment): Promise<CommentDocument> {
    return this.commentsService.updateComment(id, newComment);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string): Promise<DeleteResult> {
    return this.commentsService.deleteComment(id);
  }

}