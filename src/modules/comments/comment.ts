import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Comment {
  
  @Prop()
  message: string;
  
  @Prop()
  writtenAt: Date;

  @Prop()
  username: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);