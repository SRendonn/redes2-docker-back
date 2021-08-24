import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface QuoteDocument extends Quote, Document {}

@Schema()
export class Quote {
  @Prop({ required: true })
  author: string;

  @Prop({ require: true })
  quote: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
