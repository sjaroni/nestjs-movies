import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Comment {
  @Prop()
  message: string;
  
  @Prop()
  writtenAt: Date;
  
  @Prop()
  username: string;
}

export type CommentDocument = Document & Comment;
export const CommentSchema = SchemaFactory.createForClass(Comment);
